import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../img/logo.png";
import "../styles/NavbarPortfolio.css";

export const NavbarPortfolio = () => {
  return (
    <Navbar bg="dark" expand="md" variant="dark" fixed="top">
      <Navbar.Brand href="#home">
        <img src={logo} className="d-inline-block align-top" alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#welcome-section">Home</Nav.Link>
          <Nav.Link href="#skillset">Habilidades</Nav.Link>
          <Nav.Link href="#projects">Proyectos</Nav.Link>
          <Nav.Link href="#contact">Contáctame</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
