import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Top from './pages/Top';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

ReactDOM.render(
  <Router>
    <Route exact path="/react-router/" component={Top}></Route>
    <Route exact path="/react-router/profile" component={Profile}></Route>
    <Route exact path="/react-router/contact" component={Contact}></Route>
    <Link to="/react-router/">Top</Link>
    <Link to="/react-router/profile">Profile</Link>
    <Link to="/react-router/contact">Contact</Link>
  </Router>,
  document.querySelector('#app')
);
