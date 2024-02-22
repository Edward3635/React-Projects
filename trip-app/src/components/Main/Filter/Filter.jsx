import React from 'react';
import cl from './filter.module.scss';

const Filter = ({handleSelectSort}) => {
	return (
		<div>
			<select className={cl.input} onChange={(e)=>{handleSelectSort(e)}}>
				<option value="Default">Default</option>
				<option value="StartDate">Sort by Start Date</option>
			</select>
		</div>
	)
}

export default Filter