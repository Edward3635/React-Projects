import UserModel from '../models/user-model.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid'
import mailService from './mail-service.js';
import tokenService from './token-service.js';
import UserDto from '../dtos/user-dtos.js'
import ApiError from '../exceptions/api-error.js';
import userModel from '../models/user-model.js';

class UserService {
	async registration(email, password) {
		const candidate = await UserModel.findOne({ email });
		if (candidate) {
			throw ApiError.BadRequest(`User with email ${email} already exist`);
		}
		const hashPassword = await bcrypt.hash(password, 3)
		const activationLink = uuidv4()
		const user = await UserModel.create({ email, password: hashPassword, activationLink });
		await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return { ...tokens, userDto }
	}

	async activate(activationLink) {
		const user = await UserModel.findOne({ activationLink });
		if (!user) throw ApiError.BadRequest('Broken activation link');
		user.isActivated = true;
		await user.save();
	}

	async login(email, password) {
		const user = await UserModel.findOne({ email })
		if (!user) { throw ApiError.BadRequest('Wrong login or password') }
		const isPassEquals = await bcrypt.compare(password, user.password);
		if (!isPassEquals) { throw ApiError.BadRequest('Wrong login or password') }
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(userDto.id, tokens.refreshToken);
		return { ...tokens, userDto }


	}

	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken);
		return token;
	}

	async refresh(refreshToken) {
		if (!refreshToken) throw ApiError.UnauthorizedError();
		const userData = tokenService.validateRefreshToken(refreshToken);
		const tokenFromDb = await tokenService.findToken(refreshToken);
		if (!userData || !tokenFromDb) throw ApiError.UnauthorizedError();
		const user = await userModel.findById(userData.id)
		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({ ...userDto });
		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return { ...tokens, userDto };
	}

	async getAllUser() {
		const users = await UserModel.find();
		return users;
	}

};

export default new UserService();