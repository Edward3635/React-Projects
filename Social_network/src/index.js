import './style/css/style.css';
import store from './components/State/State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './style/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
	root.render(<App state={state} dispatch={store.dispatch.bind(store)} />);
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);