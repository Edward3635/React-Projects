import './style/css/style.css';
import store from './components/State/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './style/css/style.css';
import { Provider } from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
	root.render(
		<Provider store={store}>
			<App />
		</Provider>
	)
};

rerenderEntireTree();
store.subscribe(() => rerenderEntireTree());