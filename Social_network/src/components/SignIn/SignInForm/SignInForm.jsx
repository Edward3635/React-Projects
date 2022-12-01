import React from 'react';
import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { InputError } from '../../Common/InputError/InputError';
import { signInFormValidation, signInFormValidation2 } from '../../../Validators/validator';
import { signIn } from '../../../redux/authReducer';



const SignInForm = () => {

	const dispatch = useDispatch();
	const captcha = useSelector(state => state.authorization.captcha);

	return (
		<Formik
			initialValues={{ email: '', password: '', rememberMe: false, captcha: '' }}
			onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
				dispatch(signIn(values, setStatus));
				setSubmitting(false);
				resetForm({ 'values': { ...values, captcha: '' } });
			}}
			validationSchema={captcha ? signInFormValidation2 : signInFormValidation}
		>
			{({ errors, touched, isValid, dirty, status, setStatus }) => (
				<Form className='form__sign-in' >

					<div className='signin__status__from'>{status}</div>
					<div className='wrapper__label-input'>
						<label className='label__email label'>
							Login or Email
							{touched.email && errors.email &&
								<InputError error={errors.email} myClass={'signIn__required'} />}
							<Field className='input__email input__field' name='email'
								onKeyUp={() => { if (setStatus) setStatus(''); }}
								style={{ border: (touched.email && errors.email) || status ? ' 1px solid red' : null }} />
						</label>
					</div>

					<div className='wrapper__label-input'>
						<label className='label__password label'>
							Password
							{touched.password && errors.password &&
								<InputError error={errors.password} myClass={'signIn__required'} />}
							<Field className={`input__password input__field`} name='password' type='password'
								style={{ border: (touched.password && errors.password) || status ? ' 1px solid red' : null }}
							/>
						</label>
					</div>

					<div className='wrapper__label-input'>
						<Field className='input__checkbox' type="checkbox" name={'rememberMe'} id={'rememberMe'} />
						<label className='label__checkbox label' htmlFor='rememberMe'>Remebmer me</label>
					</div>
					<div className='captcha__wrapper'>
						{captcha && <img src={captcha} alt="captcha" />}
						<div>
							{touched.captcha && errors.captcha &&
								<InputError error={errors.captcha} myClass={'signIn__required'} />}
						</div>
						{captcha && <Field name='captcha' className='input__captcha' />}
					</div>

					<div className='wrapper__sign-up'>
						<button disabled={!(isValid && dirty)} type={'submit'} className='btn__sign-up'>
							Sign In
						</button>
					</div>

				</Form>
			)}

		</Formik>
	);
};
export default SignInForm;