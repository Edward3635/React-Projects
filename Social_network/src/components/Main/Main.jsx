import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import NavigationContainer from './Navigation/NavigationContainer';


const Main = () => {
	return (
		<BrowserRouter>
			<main className='main'>
				<NavigationContainer/>
				<div className='main__content'>
					<MainRoutes />
				</div>
			</main>
		</BrowserRouter>
	)
};
export default Main;