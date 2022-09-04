import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import Friends from './Friends/Friends';


const MainRoutes = props => {
	return (
		<Routes>
			<Route path='/profile' element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
			<Route path='/messages/*' element={<Messages state={props.state.messagesPage} dispatch={props.dispatch} />} />
			<Route path='/news' element={<News />} />
			<Route path='/music' element={<Music />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/friends' element={<Friends />} />
		</Routes>
	);
};

export default MainRoutes;