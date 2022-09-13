import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {add} from './calculator';
import App from './App';

// alert(add(1, 2))
const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(
  <App/>)

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const root = ReactDOM.render(
//   <h1>Hello World !!</h1>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
