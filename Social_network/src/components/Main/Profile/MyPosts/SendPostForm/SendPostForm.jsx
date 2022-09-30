import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../../../../redux/profileReducer';
import { maxLengthValidator } from '../../../../../Validators/validator';
import { InputError } from '../../../../Common/InputError/InputError';

const SendPostForm = () => {
	const dispatch = useDispatch(),
		onAddPost = (post) => dispatch(addPost(post)),
		onEnterPress = e => {
			if (e.key === 'Enter' && e.shiftKey) return;
			if (e.key === 'Enter') {
				e.preventDefault();
				//dispatch(addMessage(e.currentTarget.value));
				return true
			}
		};
	return (
		<Formik
			initialValues={{ postBody: '' }}
			validationSchema={maxLengthValidator(150, 'postBody')}
			onSubmit={(values, { resetForm }) => {
				onAddPost(values.postBody)
				resetForm({ values: '' });
			}}
		>
			{({ dirty, handleSubmit, errors }) => (
				<Form>
					<Field as='textarea' className={`post__area  ${errors.postBody ? 'field__error' : null}`}
						name='postBody'
						onKeyPress={(e) => { if (onEnterPress(e)) handleSubmit() }} />
					{errors.postBody && <InputError error={errors.postBody} myClass='post__error' />}
					<div className='post__buttons'>
						<div className='posts_secondary__buttons'>
							<button className='secondarry__button'></button>
							<button className='secondarry__button'></button>
							<button className='secondarry__button'></button>
							<button className='secondarry__button'></button>
							<button className='secondarry__button'></button>
						</div>
						<div className='btn__add-post-wrapper'>
							<button className='btn__add-post' disabled={!dirty || errors.postBody} type='submit'>
								Add post</button>
						</div>
						{/* <button className='btn__remove-post'>Remove post</button> */}
					</div>
				</Form>)}

		</Formik>
	)
}

export default SendPostForm;