import { Field, Form, Formik } from 'formik';
import React, { useContext } from 'react'
import classes from '../UI/input/MyInput.module.css'
import MyButton from '../UI/button/MyButton';
import formStyle from '../../Styles/css/createPostForm.module.css'
import { AuthContext } from '../../context/index'

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	return (
		<div>
			<div style={{ textAlign: 'center', margin: 13, fontSize: '1.5rem' }}>
				Enter your login and password
			</div>
			<Formik
				initialValues={{ login: '', password: '' }}
				onSubmit={(values, { resetForm }) => {
					setIsAuth(true);
					localStorage.setItem('auth', 'true');
					resetForm({});
				}}
			>
				{() => (
					<Form>
						<Field className={classes.myInput} name='login' placeholder='Login' />
						<Field className={classes.myInput} name='password' placeholder='Password' type='password' />
						<div className={formStyle.flexButton}>
							<MyButton type='submit' style={{ margin: '9px auto' }}>Sign In</MyButton>
						</div>
					</Form>
				)}


			</Formik>
		</div>

	)
}

export default Login