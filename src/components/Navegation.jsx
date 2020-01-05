import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import {NavLink} from 'react-router-dom'

const Navegation = () => (
  <header>
    <Navbar
      alignLinks="right"
      brand={
        <a className="brand-logo" href="#">
          Logo
        </a>
      }
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavLink to="/">index</NavLink>
      <NavLink to="/route-test">section test</NavLink>
      <NavLink to="/page-2/juan">Page 2</NavLink>
    </Navbar>
  </header>
);

export default Navegation;
