import React from 'react';
import {Route} from 'react-router-dom';
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';
import UserDashboard from './components/UserDashboard.js';
import HomePage from './components/HomePage.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/register" component={SignUp}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/dashboard" component ={UserDashboard}/>
    </div>
  );
}

export default App;