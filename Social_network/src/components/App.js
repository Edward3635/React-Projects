import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import HeaderContainer from './Header/HeaderContainer';

const App = function () {
	return (
		<div className='app-wrapper'>
			<BrowserRouter>
				<HeaderContainer />
				<Main />
			</BrowserRouter>
		</div>
	)
};

export default App;
