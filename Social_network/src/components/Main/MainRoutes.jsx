import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MessagesContainer from './Messages/MessagesContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import UsersContainer from './Friends/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';


const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/profile/*' element={<ProfileContainer />} />
			<Route path='/messages/*' element={<MessagesContainer />} />
			<Route path='/news' element={<News />} />
			<Route path='/music' element={<Music />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/friends' element={<UsersContainer />} />
		</Routes>
	);
};

export default MainRoutes;