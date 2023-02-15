import React from 'react'
import classes from './MyButton.module.css'

const myButton = ({ children, ...props }) => {
	return (
		<button {...props}
			className={`${classes.myBtn} ${props.disabled ? classes.btn__disabled : null}`}>
			{children}
		</button>
	)
}

export default myButton;