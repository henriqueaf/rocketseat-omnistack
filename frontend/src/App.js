import React from 'react';

import Routes from './routes';
import './App.css';

import logo from './assets/logo.svg';

const App = () => (
  <div className="container">
    <img src={logo} alt="AirCnC"/>

    <div className="content">
      <Routes />
    </div>
  </div>
);

export default App;
