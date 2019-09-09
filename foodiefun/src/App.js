import React from 'react';
import {Route} from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/register" component={SignUp}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/dashbaord" component ={UserDashboard}/>
    </div>
  );
}

export default App;