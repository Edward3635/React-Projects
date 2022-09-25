import React from 'react';
import { Form, Formik } from 'formik'

const SignInForm = () => {
	
	return (
		<Formik>
			<Form className='form__sign-in'>
				<div className='wrapper__label-input'>
					<label className='label__login label' htmlFor=''>Login</label>
					<input className='input__login input__field' type="text" />
				</div>
				<div className='wrapper__label-input'>
					<label className='label__password label' htmlFor=''>Password</label>
					<input className='input__password input__field' type="password" />
				</div>
				<div className='wrapper__label-input'>
					<input className='input__checkbox' type="checkbox" id='checkbox__remember' />
					<label className='label__checkbox label' htmlFor='label__remember-me'>Remebmer me</label>
				</div>

				<div className='wrapper__sign-up'><button className='btn__sign-up'>Sign Up</button></div>
			</Form>
		</Formik>
	);
};
export default SignInForm;