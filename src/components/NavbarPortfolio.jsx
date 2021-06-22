import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../logo.png";
import "../styles/NavbarPortfolio.css";

export function NavbarPortfolio() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img src={logo} className="d-inline-block align-top" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Proyectos</Nav.Link>
          <Nav.Link href="#link">Contáctame</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
