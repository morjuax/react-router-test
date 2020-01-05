import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SectionTest from './SectionTest'
import Index from './home/Index'
import Error from './Error';

const Router = () => (
  <BrowserRouter>
  {/* Configure routes and pages */}
    <Switch>
      <Route exact path="/" component={Index}></Route>
      <Route exact path="/route-test" component={SectionTest}></Route>
      {/* Route static */}
      <Route exact path="/page-1" render={() => (<h1>Hola Mundo</h1>)}></Route>
      {/* Route with parameters */}
      <Route exact path="/page-2/:id" render={(props) => {

          return (
      <h1>Page with parameters {props.id}</h1>
          )
      }}></Route>
      <Route component={Error}></Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
