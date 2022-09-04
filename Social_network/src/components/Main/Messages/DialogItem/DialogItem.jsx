import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	return (
		<div className='dialog__user'>
			<img className='img__dialog' src={require(`../../../../img/dialogAva${props.id}.jpg`)} alt={`dialogAva${props.id}`} />
			<NavLink className='dialog' to={`/messages/${props.id}`}>{props.name}</NavLink>
		</div>
	);
};



export default DialogItem;