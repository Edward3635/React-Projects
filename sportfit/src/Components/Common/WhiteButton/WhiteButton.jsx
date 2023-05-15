import React from 'react'
import cl from './WhiteButton.module.css';

const WhiteButton = ({ children, padding }) => {
	if (Array.isArray(padding)) padding = padding.join(' ');
	return (<button className={cl.whiteButton} style={{ padding }}>{children}</button>)
}

export default WhiteButton;