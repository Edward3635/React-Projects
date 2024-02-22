import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<GoogleOAuthProvider clientId="27212231666-p2pfhf6q8cb6vrjs7pmjt74o35qc2lac.apps.googleusercontent.com">
			<App />
		</GoogleOAuthProvider>;
	</Provider>);
