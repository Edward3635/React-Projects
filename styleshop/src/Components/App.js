import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import AppRoutes from './Routes/AppRoutes';


function App() {
	return (
		<div className='app'>
			<Header />
			<div className='container'>
				<Sidebar />
				<AppRoutes />
			</div>
			<Footer />
		</div>
	);
}

export default App;
