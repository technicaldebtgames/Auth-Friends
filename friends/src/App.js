import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <nav className='nav-container'>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path='/friends' component={FriendList} />
          <Route path='/login' component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
