import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated to use React 18's createRoot
import './index.css';
import App from './App';

// Create the root using React 18's new createRoot method
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Register the service worker for offline support and faster loading
