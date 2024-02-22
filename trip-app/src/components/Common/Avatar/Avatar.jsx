import React, { useState } from 'react'
import cl from './avatar.module.scss'
import avatar from 'img/commonIcons/avatar.png';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../redux/authReducer';

const Avatar = () => {
	const dispatch = useDispatch();
	const [isShowSignIn, setIsShowSignIn] = useState(false);
	const userData = useSelector(state => state.auth.userData)

	const signInHandler = (credentialResponse) => {
		dispatch(setUser(jwtDecode(credentialResponse.credential)));
	};

	return (
		<div className={cl.userInfoWrapper}>
			{userData ? <div className={cl.loginAvatar}>
				<div>
				<div className={cl.userName}>{userData.name}</div>
				<div>{userData.email}</div>
				</div>
				<img className={cl.imgAvatar} src={userData.picture} alt="avatar" />
			</div> :
				<>
					<div className={cl.loginAvatar}>
						<button className={cl.btnLogin} onClick={() => setIsShowSignIn(!isShowSignIn)}>LOGIN</button>
						<img className={cl.imgAvatar} src={avatar} alt="avatar" />
					</div>
					{isShowSignIn && <GoogleLogin
						onSuccess={signInHandler}
						onError={() => {
							console.log('Login Failed');
						}}
					/>}
				</>

			}
		</div>
	)
}

export default Avatar