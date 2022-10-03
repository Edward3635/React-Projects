import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Header from './Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from '../redux/appReducer';
import Preloader from './Common/Preloader/Preloader';

const App = function () {
	const dispatch = useDispatch(),
		initialized = useSelector(state => state.app.initialized);
	useEffect(() => (dispatch(initializeApp())));


	if (!initialized) return <Preloader divClass={'preloader__app'} />;
	return (
		<div className='app-wrapper'>
			<BrowserRouter>
				<Header />
				<Main />
			</BrowserRouter>
		</div>
	)
};

export default App;
