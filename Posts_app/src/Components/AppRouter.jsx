import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context';
import { privateRoutesArr, publicRoutesArr } from '../router/index'
import Loader from './UI/loader/Loader';

const AppRouter = () => {

	const { isAuth, isLoading } = useContext(AuthContext);
	const privateRoutes = privateRoutesArr.map((route => <Route path={route.path} element={route.element} key={route.path} />));
	const publicRoutes = publicRoutesArr.map((route => <Route path={route.path} element={route.element} key={route.path} />));

	if (isLoading) return <Loader />
	return (
		<Routes>
			{isAuth ? privateRoutes : publicRoutes}
			{/* <Route path='/' element={<Navigate to='/posts' />} />
			<Route path='/about' element={<About />} />
			<Route path='/posts' element={<Posts />} />
			<Route path='/posts/:id' element={<PostIdPage />} />
			<Route path='/*' element={<Error />} /> */}
		</Routes>
	)
}

export default AppRouter