import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Profile from './Profile/Profile';
import MessagesContainer from './Messages/MessagesContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import Friends from './Friends/Friends';


const MainRoutes = props => {
	return (
		<Routes>
			<Route path='/profile' element={<Profile store={props.store} />} />
			<Route path='/messages/*' element={<MessagesContainer store={props.store} />} />
			<Route path='/news' element={<News />} />
			<Route path='/music' element={<Music />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/friends' element={<Friends />} />
		</Routes>
	);
};

export default MainRoutes;