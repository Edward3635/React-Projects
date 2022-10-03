import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
//import Profile from './Profile/Profile';
//import Messages from './Messages/Messages';
//import News from './News/News';
//import Music from './Music/Music';
//import Settings from './Settings/Settings';
//import Users from './Friends/Users';
//import SignIn from '../SignIn/SignIn';
import Preloader from '../Common/Preloader/Preloader';

const Profile = React.lazy(() => import('./Profile/Profile'));
const Messages = React.lazy(() => import('./Messages/Messages'));
const News = React.lazy(() => import('./News/News'));
const Music = React.lazy(() => import('./Music/Music'));
const Settings = React.lazy(() => import('./Settings/Settings'));
const Users = React.lazy(() => import('./Friends/Users'));
const SignIn = React.lazy(() => import('../SignIn/SignIn'));


const MainRoutes = () => {
	return (
		<Suspense fallback={<Preloader />}>
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
		</Suspense>
	);
};

export default MainRoutes;