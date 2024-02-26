import { IUser } from './user';

export interface IAuthResponse {
	accesToken: string;
	refreshToken: string;
	user: IUser;
}