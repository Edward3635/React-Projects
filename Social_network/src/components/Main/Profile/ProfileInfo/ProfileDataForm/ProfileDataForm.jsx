import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveProfile } from '../../../../../redux/profileReducer';

const ProfileDataForm = ({ closeEditMode }) => {
	const dispatch = useDispatch(),
		profile = useSelector(state => state.profilePage.profile),
		turnBack = () => (closeEditMode()),
		defineErrorField = (status, key) => {
			if (status) {
				status = status.slice([status.indexOf('>') + 1], status.length - 1);
				if (status.toLowerCase() === key.toLowerCase()) return 1;
			};

		},
		showStatus = (status, key) => {
			status = status.split(' ');
			status.splice(-1, 1, key);
			return status.join(' ')
		};

	for (let key in profile.contacts) {
		if (profile.contacts[key] == null) profile.contacts[key] = '';

	};

	return (

		<Formik
			initialValues={profile}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				dispatch(saveProfile(values, setStatus)).then(() => {
					closeEditMode();
					setSubmitting(false);
				})

			}}>
			{({ status }) => (
				<Form className='form__edit-profile'>
					<div className='profile__name-edit flex__input'>
						<b className='profile__name-title'>Full name:</b>
						<Field className='input__password input__field profile__field' name='fullName' placeholder='Full name' />
					</div>
					<div className='profile__edit'><b>Looking for a job:</b>
						<Field type='checkbox' className='checkbox__job-looking ' name='lookingForAJob' /></div>
					<div className='flex__input'>
						<b className='skills__description'>Skills <br /> description:</b>
						<Field as='textarea' name='lookingForAJobDescription' className='textarea__profile'
							placeholder='My professional skills for a job' /></div>
					<div className='flex__input'><b>About me:</b>
						<Field as='textarea' name='aboutMe' className='textarea__profile' placeholder='About me' /></div>
					<div >
						{Object.keys(profile.contacts).map(key =>
							<div key={key} >
								{defineErrorField(status, key) && <span className='error__span'>{showStatus(status, key)}</span>}
								<div className='flex__input'>
									<span className='profile__title'>{key}:</span>
									<Field placeholder={key} name={`contacts.${key}`}
										className={status && defineErrorField(status, key) ?
											'field__error profile__field' : 'profile__field'} />
								</div>
							</div>)}
					</div>
					<div className='control__buttons-profile'>
						<button type='submit' className='save__profile' >Save</button>
						<button onClick={turnBack} className='turn__back' >Back</button>
					</div>
				</Form>
			)}
		</Formik>
	)
}

export default ProfileDataForm