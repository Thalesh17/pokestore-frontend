import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Main from '../../pages/Main';
import Shopping from '../../pages/Shopping';

const Routes: React.FC = () => {
 return (
   <BrowserRouter>
     <Route exact path="/" component={Main} />
     <Route exact path="/main" component={Main} />
     <Route exact path="/shoppings" component={Shopping} />
   </BrowserRouter>
 );
};

export default Routes;