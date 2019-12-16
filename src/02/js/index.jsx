import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Top from './pages/Top';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

ReactDOM.render(
  <Router>
    <Route exact path="/02/" component={Top}></Route>
    <Route exact path="/02/profile" component={Profile}></Route>
    <Route exact path="/02/contact" component={Contact}></Route>
    <Link to="/02/">Top</Link>
    <Link to="/02/profile">Profile</Link>
    <Link to="/02/contact">Contact</Link>
  </Router>,
  document.querySelector('#app')
);
