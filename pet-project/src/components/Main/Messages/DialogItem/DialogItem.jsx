import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	return (
		<NavLink className='dialog' to={`/messages/${props.id}`}>{props.name}</NavLink>
	);
};



export default DialogItem;