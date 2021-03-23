import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
  const logout = () => {
    axiosWithAuth()
      .post('/api/logout')
      .then(res => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      })
      .catch(err => {
        console.log(err.response);
      })
  }
  return (
  <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link onClick={logout}>Logout</Link>
        </li>
        <li>
          {localStorage.getItem('token') &&<Link to="/FriendsList">Friends List</Link>}
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/FriendsList" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
