import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SectionTest from "./SectionTest";
import Index from "./home/Index";
import Error from "./Error";
import Navegation from "./Navegation";

const Router = () => (
  <BrowserRouter>
  {/* <Navegation /> */}
    <Navegation />
    
    <div className="container">
      {/* Configure routes and pages */}
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route exact path="/route-test" component={SectionTest}></Route>
        {/* Route static */}
        <Route exact path="/page-1" render={() => <h1>Hola Mundo</h1>}></Route>
        {/* Route with parameters */}
        <Route
          exact
          path="/page-2/:id"
          render={props => {
            let id = props.match.params.id;
            return <h1>Page with parameters {id}</h1>;
          }}
        ></Route>
        <Route component={Error}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
