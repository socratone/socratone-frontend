import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './nav/Nav';
import Home from './pages/Home';
import Works from './pages/Works';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import styled from 'styled-components';

const Wrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Routes = () => {
  return (  
    <Router>
      <Nav />
      <Wrap>
        <Switch>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Wrap>
    </Router>
  );
}
 
export default Routes;