import { Navigate } from 'react-router-dom';
import About from '../Components/pages/About';
import Error from '../Components/pages/Error';
import Login from '../Components/pages/Login';
import PostIdPage from '../Components/pages/PostIdPage';
import Posts from '../Components/pages/Posts';

export const privateRoutesArr = [
	{ path: '/', element: <Navigate to='/posts' /> },
	{ path: '/about', element: <About /> },
	{ path: '/posts', element: <Posts /> },
	{ path: '/posts/:id', element: <PostIdPage /> },
	{ path: '/*', element: <Error /> },
	{ path: '/login', element: <Navigate to='/posts' />, }

];
export const publicRoutesArr = [
	{ path: '/login', element: <Login /> },
	{ path: '/*', element: <Navigate to='/login' /> },
];