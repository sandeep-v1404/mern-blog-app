import React from "react";
import { Navbar, Nav } from "react-bootstrap";
export default function Navigationbar() {
  return (
    <Navbar
      style={{ background: "#673AB7" }}
      collapseOnSelect
      fixed="top"
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand href="/">Blog Lover</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/auth">SignUp</Nav.Link>
          <Nav.Link href="/publish">Publish</Nav.Link>
          <Nav.Link>About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
