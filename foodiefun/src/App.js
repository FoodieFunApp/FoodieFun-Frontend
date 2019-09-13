import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';
import UserDashboard from './components/UserDashboard.js';
import HomePage from './components/HomePage.js';
<<<<<<< HEAD
import AddReview from './components/AddReview.js';
=======
import AddReview from './components/AddReview';
import { ProtectedRoute } from './components/PrivateRoute';
>>>>>>> dadb867889ed20328609f6c58f3748921144b4ec

import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/register" component={SignUp}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/app" component ={UserDashboard}/>
      <Route exact path="/add-review" component={AddReview}/>
=======
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addreview" component={AddReview} />
        <ProtectedRoute exact path="/dashboard" component={UserDashboard} />
        <Route exact path="*" component={() => "404 Not Found"} />
      </Switch>

>>>>>>> dadb867889ed20328609f6c58f3748921144b4ec
    </div>
  );
}

export default App;