import React from "react";
import Navegation from "./Navegation";
import Router from './Router';

const ContainerApp = () => (
  <main>
    <Navegation />
    <div className="container">
      <Router/> 
    </div>
  </main>
);

export default ContainerApp;
