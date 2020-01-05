import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";

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
      <NavItem href="/route-test">section test</NavItem>
      <NavItem href="/">index</NavItem>
    </Navbar>
  </header>
);

export default Navegation;
