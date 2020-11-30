import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Main from '../../pages/Main';

const Routes: React.FC = () => {
 return (
   <BrowserRouter>
     <Route exact path="/" component={Main} />
     <Route exact path="/home" component={Home} />
   </BrowserRouter>
 );
};

export default Routes;