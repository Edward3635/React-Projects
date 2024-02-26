import axios from "axios";
import { AxiosResponse } from 'axios'; import { IAuthResponse } from '../types/authResponse';
import { IUser } from '../types/user';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:5000/api',
	// headers: { 'API-KEY': '1347d0fe-3b2a-43f7-8695-98f77fb0d7a72' }
});

instance.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config;
})

const jwtAuthAPI = {
	async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
		const response = await instance.post<IAuthResponse>('/login', { email, password })
		return response;
	},

	async registration(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
		const response = await instance.post<IAuthResponse>('/registration', { email, password })
		return response;
	},

	async logout(): Promise<void> {
		return instance.post('/logout')
	},

	async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
		return instance.get<IUser[]>('/users')
	}
};
export default jwtAuthAPI;