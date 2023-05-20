import React from 'react';
import { createRoot } from 'react-dom/client';
//import ReactDOM from 'react-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import TagManager from 'react-gtm-module'
//import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const tagManagerArgs ={
    gtmIds: 'G-GSS01Z2VN6'
}

TagManager.initialize(tagManagerArgs)

root.render(
    <App />
);


reportWebVitals();
