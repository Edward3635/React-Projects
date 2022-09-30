import * as axios from "axios";


const instance = axios.create(
	{
		withCredentials: true,
		baseURL: 'https://social-network.samuraijs.com/api/1.0/',
		headers: { 'API-KEY': '1347d0fe-3b2a-43f7-8695-98f77fb0d7a7' } //vlacheslav 32d1f0e3-9564-4812-9fae-cd3caea18846
	}
);

export const usersAPI = {

	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => (response.data))
	},
	getUserProfile(userId) { return instance.get(`profile/${userId}`).then(response => (response.data)) },
	getAuthorization() { return instance.get(`auth/me`).then(response => (response.data)) },
	followOnUser(userId) { return instance.post(`follow/${userId}`) },
	unfollowFromUser(userId) { return instance.delete(`follow/${userId}`) },
	getUserStatus(userId) { return instance.get(`profile/status/${userId}`) },
	updateUserStatus(status) { return instance.put('profile/status', { status }) },
	signIn(obj) { return instance.post('auth/login', obj) },
	logout() { return instance.delete('auth/login') }

}