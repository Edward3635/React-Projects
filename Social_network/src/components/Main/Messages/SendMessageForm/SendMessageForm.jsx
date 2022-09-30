import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../../redux/messagesReducer';
import { maxLengthValidator } from '../../../../Validators/validator';
import { InputError } from '../../../Common/InputError/InputError';

const SendMessageForm = () => {

	const dispatch = useDispatch(),

		onAddMsg = (value) => dispatch(addMessage(value)),
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
			initialValues={{ messageBody: '' }}
			validationSchema={maxLengthValidator(150, 'messageBody')}
			onSubmit={(values, { resetForm }) => {
				onAddMsg(values.messageBody)
				resetForm({ values: '' });
			}}
		>
			{({ dirty, handleSubmit, errors }) => (
				<Form className='send__msg-form'>
					{errors.messageBody && <InputError error={errors.messageBody} myClass='message__required' />}

					<div className='send__msg-wrapper'>
						<Field className={`text__area-msg ${errors.messageBody ? 'field__error' : null}`}
							as='textarea' name={'messageBody'}
							onKeyPress={(e) => { if (onEnterPress(e)) handleSubmit() }} />
						<button disabled={!dirty || errors.messageBody} type='submit' className={dirty &&
							!errors.messageBody ? 'btn__send-msg' : 'btn__send-msg btn__send-msg-disabled'}>
						</button>
					</div>
				</Form>)
			}

		</Formik >
	)
}
export default SendMessageForm;
