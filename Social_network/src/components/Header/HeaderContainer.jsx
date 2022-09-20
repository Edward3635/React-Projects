import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthorization } from '../../redux/authReducer';
import Header from './Header';

const HeaderContainer = () => {
	const isAuthorized = useSelector(state => state.authorization.isAuthorized),
		login = useSelector(state => state.authorization.login),
		isFetching = useSelector(state => state.authorization.isFetching),
		userId = useSelector(state => state.authorization.id),
		dispatch = useDispatch();

	useEffect(() => (dispatch(getAuthorization())))
	
	return <Header isAuthorized={isAuthorized} isFetching={isFetching} login={login} userId={userId} />
};
export default HeaderContainer;