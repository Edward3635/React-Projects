import React, { useState } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MainRoutes from './Main/MainRoutes';
import { BrowserRouter } from 'react-router-dom';


function App() {
	const [itemsNumber, setItemsNumber] = useState(parseInt(localStorage.getItem('ItemsNumber')) || 0);
	// const clearStorage = () => { localStorage.clear() }
	return (
		<div className='app__container'>
			<BrowserRouter>
				<Header itemsNumber={itemsNumber} />
				{/* <button onClick={clearStorage}>Clear</button> */}
				<MainRoutes setItemsNumber={setItemsNumber} />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
