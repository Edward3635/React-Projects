import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Header from './Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { globalErrorRequest, initializeApp } from '../redux/appReducer';
import Preloader from './Common/Preloader/Preloader';

const App = function () {
	const dispatch = useDispatch(),
		initialized = useSelector(state => state.app.initialized),
		globalError = useSelector(state => state.app.globalError),
		catchAllUnhandledErrors = promiseRegectionEvent => {
			dispatch(globalErrorRequest(promiseRegectionEvent))
			alert('Some error occured')
			console.error(promiseRegectionEvent);
		};
	useEffect(() => {
		dispatch(initializeApp())
		window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
		return () => { window.removeEventListener('unhandledrejection', catchAllUnhandledErrors); };
	});


	if (!initialized) return <Preloader divClass={'preloader__app'} />;
	return (
		<div className='app-wrapper'>
			<BrowserRouter>
				<Header />
				{globalError ? <div>{globalError}</div> : null}
				<Main />
			</BrowserRouter>
		</div>
	)
};

export default App;
