import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated for React 18+
import App from './App';
import * as serviceWorker from './serviceWorker';

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Service Worker setup
// If you want your app to work offline and load faster, change unregister() to register().
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
