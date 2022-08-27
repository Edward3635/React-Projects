import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

const App = function (props) {

	return (
		<div className='app-wrapper'>
			<Header />
			<Main state={props.state} />
		</div>
	)
};

export default App;