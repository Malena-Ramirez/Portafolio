import React from "react";
import "../styles/WelcomeSection.css";
import profile from "../profile.jpg";
import { Container, Row, Col } from "react-bootstrap";

export function WelcomeSection() {
  return (
    <section id="welcome-section" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col s={12} md={4}>
            <img className="profile-img img-fluid" src={profile} alt="Imagen de perfil" />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <h1>Soy Malena Ramírez Uribe</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sunt recusandae quia consequatur aspernatur magnam animi expedita tempore rem nesciunt!</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
