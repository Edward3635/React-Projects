import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Messages from './Messages/Messages';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import Users from './Friends/Users';
import Profile from './Profile/Profile';
import SignIn from '../SignIn/SignIn';


const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/profile' element={<Profile />}>
				<Route path='/profile/:userId' element={<Profile />} />
			</Route>

			<Route path='/messages/*' element={<Messages />} />
			<Route path='/news' element={<News />} />
			<Route path='/music' element={<Music />} />
			<Route path='/settings' element={<Settings />} />
			<Route path='/friends' element={<Users />} />
			<Route path='/SignIn' element={<SignIn />} />
		</Routes>
	);
};

export default MainRoutes;