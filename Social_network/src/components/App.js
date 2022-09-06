import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

const App = function (props) {
	return (
		<div className='app-wrapper'>
			<Header />
			<Main store={props.store} />
		</div>
	)
};

export default App;