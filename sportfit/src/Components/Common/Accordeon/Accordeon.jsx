import React, { useState } from 'react'
import arrow from '../../../img/sidebar_arrow.svg';
import cl from '../../Main/Shorts/Style/css/style.module.css';

const Accordeon = ({ children, array, toggle, toggleState, className, activeClass, inputs }) => {

	const [focus, setFocus] = useState([]);

	const toggleFocus = (id) => {
		if (focus.includes(id)) {
			setFocus(focus.filter((blockId) => blockId !== id));
		} else {
			setFocus([...focus, id]);
		}
		console.log(focus);
	};

	const listItems = inputs ? array.map((item, index) => (
		<li key={index}>
			<input type="checkbox" id={item} />
			<label htmlFor={item}>{item}</label>
		</li>))
		: array.map((item, index) => <li key={index} onClick={() => toggleFocus(index)}
			className={focus.includes(index) ? cl.itemFocus : null}>{item}</li>);

	return (
		<div className={className}>
			<button onClick={() => toggleState(children)}>
				<span>{children}</span>
				<img className={toggle.includes(children) ? cl.arrowClosed : cl.arrowOpen} src={arrow} alt="arrow" />
			</button>
			<ul className={toggle.includes(children) ? activeClass : cl.filterHidden}  >
				{listItems}
			</ul>
		</div>
	)
}

export default Accordeon