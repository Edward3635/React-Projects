import React from 'react';
import MainRoutes from './MainRoutes';
import NavigationContainer from './Navigation/NavigationContainer';


const Main = () => {
	return (
			<main className='main'>
				<NavigationContainer/>
				<div className='main__content'>
					<MainRoutes />
				</div>
			</main>
	)
};
export default Main;