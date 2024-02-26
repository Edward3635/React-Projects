import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types/user';
import { IAuthState, ILoginPayload } from '../types/authState';
import jwtAuthAPI from '../api/api';


const initialState: IAuthState = {
	user: {} as IUser,
	isAuth: false
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IUser>) { state.user = action.payload },
		setAuth(state, action: PayloadAction<boolean>) { state.isAuth = action.payload; }
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
				state.isAuth = true;
				state.user = action.payload;
			})
			.addCase(registration.fulfilled, (state, action: PayloadAction<IUser>) => {
				state.isAuth = true;
				state.user = action.payload;
			})
			.addCase(logout.fulfilled, (state) => {
				state.isAuth = false;
				state.user = {} as IUser;
			})
		// .addCase(login.pending, (state) => {
		// 	state.isLoading = true;

		// })
		// .addCase(login.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.error = action.payload as string
		// })
	}
})
export default authSlice.reducer;
export const { setUser, setAuth } = authSlice.actions;

export const login = createAsyncThunk(
	'login',
	async (payload: ILoginPayload, thunkAPI) => {
		try {
			const response = await jwtAuthAPI.login(payload.email, payload.password);
			localStorage.setItem('token', response.data.accesToken);
			return response.data.user;

		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
);

export const registration = createAsyncThunk(
	'registration',
	async (payload: ILoginPayload, thunkAPI) => {
		try {
			const response = await jwtAuthAPI.registration(payload.email, payload.password);
			localStorage.setItem('token', response.data.accesToken);
			return response.data.user;

		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
);

export const logout = createAsyncThunk(
	'login',
	async (_, thunkAPI) => {
		try {
			await jwtAuthAPI.logout();
			localStorage.remove('token');

		} catch (e) {
			return thunkAPI.rejectWithValue(e)
		}
	}
);