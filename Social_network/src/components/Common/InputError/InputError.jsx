import React from 'react'

export const InputError = ({ error, myClass }) => {

	return <span className={`input__error ${myClass ? myClass : null}`}>{error}</span>

}
