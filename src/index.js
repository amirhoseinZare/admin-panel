import React from 'react';
import ReactDOM from 'react-dom';
import {getData} from './model/AjaxRequests'
import {Header} from './layouts/Header/Header'
import {App} from "./App"

ReactDOM.render(
  <Header><App/></Header>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
