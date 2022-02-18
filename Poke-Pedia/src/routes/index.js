import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import LandingRoute from './landing.routes';

const IndexRoutes = (props) => {
  return (
      <Switch>
        <Route path="/" component={LandingRoute} props={props}/>
      </Switch>
    
)};

export default IndexRoutes;