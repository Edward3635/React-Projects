import * as yup from 'yup'

export const signInFormValidation = yup.object().shape({
	email: yup.string().typeError('Must be a string').required('Required'),
	password: yup.string().typeError('Must be a string').required('Required')
});

// export const sendMessageFormValidation = yup.object().shape({
// 	messageBody: yup.string().typeError('Must be a string').max(5, 'Max length is 5 symbols')
// });

export const maxLengthValidator = (maxLength, field) => () => {
	return yup.object().shape({
		[field]: yup.string().typeError('Must be a string').max(maxLength, `Max length is ${maxLength} symbols`)
	});
};