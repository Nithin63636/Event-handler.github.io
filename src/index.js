import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Box from './App';


const b = ReactDOM.createRoot(document.getElementById('root'));
b.render(
  <React.StrictMode>
    < Box abc= " A DAY IN THE LIFE OF GOLDFISH"/>
  </React.StrictMode>
)
// ReactDOM.renedre is not working
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

