import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row md={4}>
          <Col sm>
            <h2>Contáctame</h2>
            <p>Si te interesa trabajar conmigo en tu próximo proyecto me puedes contactar enviándome un mensaje o a través de mis redes.</p>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-instagram"></i>
          </Col>
          <Col sm>
            <form action="https://formspree.io/f/xbjqynaq" method="post"></form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
