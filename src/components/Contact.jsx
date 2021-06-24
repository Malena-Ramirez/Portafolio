import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <section id="contact">
      <Container className="py-5">
        <Row>
          <Col sm className="px-5">
            <h2 className="mb-3">Contáctame</h2>
            <p className="my-4">Si te interesa trabajar conmigo en tu próximo proyecto me puedes contactar enviándome un mensaje o a través de mis redes.</p>
            <div className="contact-icon d-flex justify-content-center my-3">
              <a href="https://www.linkedin.com/in/malena-ram%C3%ADrez-uribe-033643215/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"> </i>
              </a>
              <a href="https://github.com/Malena-Ramirez" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/maleramirezu/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
          <Col sm className="px-4">
            <form action="https://formspree.io/f/xbjqynaq" method="post" className="p-3" id="contact-form">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Escribe tu mensaje aquí" name="message" required />
              </Form.Group>
              <Button type="submit" size="lg">
                Enviar
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
