import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import Login from './components/Login';

function App() {
  const logout = () => {

  }
  return (
  <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">a</Link>
        </li>
        <li>
          {localStorage.getItem('token') &&<Link to="/protected">Protected Page</Link>}
        </li>
      </ul>
      <Switch>
        {/* <Route exact path="/protected" component={ahhhh} /> */}
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
