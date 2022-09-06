import React from 'react';
import Navigation from './Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes';


const Main = (props) => {
	return (
		<BrowserRouter>
			<main className='main'>
				<Navigation store={props.store.getState().sideBarFriends} />
				<div className='main__content'>
					<MainRoutes />
				</div>
			</main>
		</BrowserRouter>
	)
};
export default Main;