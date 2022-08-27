import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './style/css/style.css';
import state from './components/State/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App state={state} />);