import { IUser } from './user';

export interface IAuthState {
	user: IUser,
	isAuth: boolean
}

export interface ILoginPayload {
	email: string;
	password: string;
}