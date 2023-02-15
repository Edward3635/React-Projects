import React from 'react'
import { Field, Form, Formik } from 'formik'
import classes from './MyInput.module.css'

const MyInput = (props) => {
	return (
		<Formik
			initialValues={{ input: '' }}
		>
			{() => (
				<Form>
					<Field name="input" className={classes.myInput} {...props}>
					</Field>
				</Form>
			)}
		</Formik>
	)
}

export default MyInput;