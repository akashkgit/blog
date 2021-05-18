import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Body from  './components/Body/Body';


import styles from  './index.css';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  
	<div className={styles.index}>
  <Header />
  <Body />
  </div>
  ,
  document.getElementById('root')
);


// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

