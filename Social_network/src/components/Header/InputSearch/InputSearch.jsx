import React from 'react';

const InputSearch = () => {
	return (
		<form className="flex-form">
			<input type="search" placeholder="What do you want to search?" />
			<input type="submit" value="Search" />
		</form>
	)
};
export default InputSearch;