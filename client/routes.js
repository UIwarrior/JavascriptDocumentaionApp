import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './src/pages/home';
import viewDetails from './src/pages/view';
import createForm from './src/pages/create';
import history from '../client/src/history';

const AppRoutes = () => {
    return (
        <BrowserRouter history={history}>
        <Switch >        
         <Route exact path = "/" component = {Home} />
         <Route path = "/home" component = {Home} />
         <Route path = "/view" component = {viewDetails} />
         <Route path = "/create" component = {createForm} />
        </Switch>
  
        </BrowserRouter>
          )
}

export default AppRoutes;