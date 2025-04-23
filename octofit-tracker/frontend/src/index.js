import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated to use ReactDOM.createRoot for React 18
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
