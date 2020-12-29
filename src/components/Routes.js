import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './nav/Nav';
import Home from './pages/Home';
import styled from 'styled-components';

const Routes = () => {
  return (  
    <Router>
      <Nav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
 
export default Routes;