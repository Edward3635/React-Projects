import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Profile from './Profile/Profile';
import MessagesContainer from './Messages/MessagesContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import FriendsContainer from './Friends/FriendsContainer';


const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/profile' element={<Profile />} />
			<Route path='/messages/*' element={<MessagesContainer />} />
			<Route path='/news' element={<News />} />
			<Route path='/music' element={<Music />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/friends' element={<FriendsContainer />} />
		</Routes>
	);
};

export default MainRoutes;