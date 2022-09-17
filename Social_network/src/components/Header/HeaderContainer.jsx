import * as axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUserData } from '../redux/authReducer';
import Header from './Header';

const HeaderContainer = () => {
	const isAuthorized = useSelector(state => state.authorization.isAuthorized),
		login = useSelector(state => state.authorization.login),
		isFetching = useSelector(state => state.authorization.isFetching),
		dispatch = useDispatch();
	useEffect(() => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
			.then(response => {
				response.data.resultCode === 0 ? dispatch(setAuthUserData(response.data.data)) :
					console.log(response.data.messages.join());

			});
	})
	return <Header isAuthorized={isAuthorized} isFetching={isFetching} login={login} />
};
export default HeaderContainer;