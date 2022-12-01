import React from 'react'

const Contact = ({ name, value }) => {
	return (
		value && <div><i>{name}:</i> {value}</div>
	)
}

export default Contact