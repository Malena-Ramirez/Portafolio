import React from "react";
import "../styles/WelcomeSection.css";
import profile from "../img/profile.jpg";
import { Container, Row, Col } from "react-bootstrap";

export function WelcomeSection() {
  return (
    <section id="welcome-section" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col s={12} md={4} className="px-5">
            <img className="profile-img img-fluid" src={profile} alt="Imagen de perfil" />
          </Col>
          <Col className="d-flex flex-column justify-content-center px-5 mt-4 welcome-text">
            <h1>¡Hola! Soy Malena Ramírez Uribe</h1>
            <p>Soy desarrolladora front-end en continuo proceso de formación. Amo retarme a cada día aprender cosas nuevas. Estoy siempre dispuesta a dar lo mejor de mí. Me gusta investigar y saber el funcionamiento de todo.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
