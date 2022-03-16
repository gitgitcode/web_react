import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
const name = 'Josn Perez';
const element = <h1>hello , {name}</h1>
ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals(console.log);
