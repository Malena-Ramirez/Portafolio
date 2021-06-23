import React from "react";
import { Col, Card } from "react-bootstrap";

export default function ProjectCard({ img, name, description, url }) {
  return (
    <Col>
      <Card className="h-100 text-center">
        <a href={url} className="card-link" target="_blank" rel="noopener noreferrer">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </a>
      </Card>
    </Col>
  );
}
