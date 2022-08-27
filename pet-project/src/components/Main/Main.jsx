import React from 'react';
import Messages from './Messages/Messages';
import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Main = props => {

	return (
		<BrowserRouter>
			<main className='main'>
				<Navigation />
				<div className='main__content'>
					<Routes>
						<Route path='/profile' element={<Profile state={props.state.profilePage} />} />
						<Route path='/messages/*' element={<Messages state={props.state.messagesPage} />} />
						<Route path='/news' element={<News />} />
						<Route path='/music' element={<Music></Music>} />
						<Route path='/settings' element={<Settings />} />
					</Routes>
				</div>
			</main>
		</BrowserRouter>
	)
};
export default Main;