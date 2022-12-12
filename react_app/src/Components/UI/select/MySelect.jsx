import React from 'react'
import { Field, Form, Formik } from 'formik'
import classes from './MySelect.module.css'
import MyButton from '../button/MyButton'

const MySelect = ({ options, defaultValue, value, onChange }) => {
	const optionArr = options.map(option => <option value={option.value} key={option.value}>{option.name}</option>);
	return (
		<Formik
			initialValues={{ sortBy: '' }}
		>
			{() => (
				<Form>
					<Field as="select" value={value} name="sortBy" onChange={(e) => onChange(e.target.value)}
						className={classes.mySelect}>
						{optionArr}
					</Field>
					<MyButton type='reset' onClick={() => onChange(defaultValue)} disabled={value === 'id' ? true : false}>
						Reset
					</MyButton>
				</Form>
			)}
		</Formik>

	)
}

export default MySelect