import React from "react";
import { Col, Card } from "react-bootstrap";

export default function ProjectCard({ img, name, description }) {
  return (
    <Col>
      <Card className="h-100 text-center">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
