import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignInForm from './SignInForm/SignInForm';

const SignIn = () => {
	const isAuth = useSelector(state => state.authorization.isAuthorized),
		navigate = useNavigate();
	useEffect(() => { if (isAuth) return navigate('/profile') }, [isAuth, navigate]);

	return (
		<section className='section__login'>
			<h2>SIGN IN</h2>
			<SignInForm />
		</section>
	);
};

export default SignIn