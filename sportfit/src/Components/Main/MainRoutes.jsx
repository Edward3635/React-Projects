import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Shorts from './Shorts/Shorts';
import Homepage from './Homepage/Homepage';
import Short from './Short/Short';
import BottomNavigation from '../Header/BottomNavigation/BottomNavigation';

const MainRoutes = (props) => {
	const [isHomepage, setIsHomepage] = useState(false);
	const location = useLocation();
	useEffect(() => {
		setIsHomepage(!location.pathname.includes('/homepage'));
	}, [location.pathname]);

	return (
		<>
			{isHomepage ? <BottomNavigation /> : null}
			<Routes>
				<Route path='/' element={<Navigate to='/homepage' />} />
				<Route path="/homepage" element={<Homepage />} />
				<Route path="/stuff" element={<Shorts />} />
				<Route path="/short" element={<Short setItemsNumber={props.setItemsNumber} />} />
				<Route path='/*' element={'Not found'} />
			</Routes>
		</>
	);
};


export default MainRoutes