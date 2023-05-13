import React from 'react';
import { createRoot } from 'react-dom/client';
//import ReactDOM from 'react-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
//import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
    <App />
);


reportWebVitals();
