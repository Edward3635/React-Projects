import React from 'react';
import MainRoutes from './MainRoutes';
import Navigation from './Navigation/Navigation';


const Main = () => {
	return (
		<main className='main'>
			<Navigation />
			<div className='main__content'>
				<MainRoutes />
			</div>
		</main>
	)
};
export default Main;