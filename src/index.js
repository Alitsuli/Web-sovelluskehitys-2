import React from 'react';
import ReactDOM from 'react-dom';
import Kartta from './components/Kartta';
import App from './App';


ReactDOM.render(
  <div id="mapid">
    <App/>,
    <Kartta/>
  </div>,
  document.getElementById('root')
);