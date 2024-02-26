import React from 'react';
import cl from './style/App.module.scss';
import LoginForm from './components/LoginForm';

function App() {
	return (
		<div className={cl.app}>
			<LoginForm/>
		</div>
	);
}

export default App;
