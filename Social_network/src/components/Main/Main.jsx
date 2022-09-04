import React from 'react';
import Navigation from './Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes';


const Main = props => {
	return (
		<BrowserRouter>
			<main className='main'>
				<Navigation state={props.state.sideBarFriends} />
				<div className='main__content'>
					<MainRoutes state={props.state} dispatch={props.dispatch} />
				</div>
			</main>
		</BrowserRouter>
	)
};
export default Main;