import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

document.addEventListener('DOMContentLoaded', function(){
  var app = document.getElementById('app');
  ReactDOM.render(<App/>, app);
});
