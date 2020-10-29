import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Home from '../containers/Home';
import Profile from '../containers/Profile';


const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
  </BrowserRouter>
)

export default App;
