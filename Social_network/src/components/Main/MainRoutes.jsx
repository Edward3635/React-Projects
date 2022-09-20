import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MessagesContainer from './Messages/MessagesContainer';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import UsersContainer from './Friends/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';
import Login from '../Login/Login';


const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/profile' element={<ProfileContainer />}>
				<Route path='/profile/:userId' element={<ProfileContainer />} />
			</Route>

			<Route path='/messages/*' element={<MessagesContainer />} />
			<Route path='/news' element={<News />} />
			<Route path='/music' element={<Music />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/friends' element={<UsersContainer />} />
			<Route path='/login' element={<Login/>} />
		</Routes>
	);
};

export default MainRoutes;