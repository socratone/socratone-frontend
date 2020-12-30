import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './nav/Nav';
import SideNav from './nav/SideNav';
import Home from './pages/Home';

const Routes = () => {
  const isMenu = useSelector(state => state.ui.nav.isMenu);

  return (  
    <Router>
      {isMenu && <SideNav />}
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