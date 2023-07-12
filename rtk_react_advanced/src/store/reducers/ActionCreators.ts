import axios from "axios";
import { IUser } from "../../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Redux, don't do like this
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
// 	try {
// 		dispatch(userSlice.actions.usersFetching());
// 		const response = await axios.get<IUser[]>('http://jsonplaceholder.typicode.com/users');
// 		dispatch(userSlice.actions.usersFetchingSuccess(response.data))

// 	} catch (error) {
// 		dispatch(userSlice.actions.usersFetchingError(getErrorMessage(error)))
// 	}
// };

// Redux ToolKit
export const fetchUsers = createAsyncThunk(
	'user/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IUser[]>('http://jsonplaceholder.typicode.com/users');
			return response.data;

		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue("Can't download users")
		}
	}
);