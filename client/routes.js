import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './src/pages/home';
import viewDetails from './src/pages/view';
import createForm from './src/pages/create';

const AppRoutes = () => {
    return (
        <BrowserRouter>
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