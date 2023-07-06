import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/User";
import axios from "axios";

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) =>{
	try {
		dispatch({type: UserActionTypes.FETCH_USERS})
		const response = await axios.get('https://jsonplaceholder.typicode.com/users')
		dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS, payload:response.data});
	} catch (error) {
		dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload:'Сталася помилка при завантаженні користувачів'})
	}
};