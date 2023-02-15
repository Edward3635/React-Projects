import React from 'react'
import { Field, Form, Formik } from 'formik'
import classes from './UI/input/MyInput.module.css'
import MyButton from './UI/button/MyButton';
import formStyle from '../Styles/css/createPostForm.module.css'

const CreatePostForm = props => {
	return (
		<Formik
			initialValues={{ title: '', body: '' }}
			onSubmit={(values, { resetForm }) => {
				props.addNewPost(values);
				resetForm({});
			}}
		>
			{() => (
				<Form>
					<Field className={classes.myInput} name='title' placeholder='Post Name'></Field>
					<Field className={classes.myInput} name='body' placeholder='Post Description'></Field>
					<div className={formStyle.flexButton}>
						<MyButton type='submit' >Create Post</MyButton>
						<MyButton onClick={props.turnBack}>Back</MyButton>
					</div>
				</Form>
			)}


		</Formik>

	);
}

export default CreatePostForm