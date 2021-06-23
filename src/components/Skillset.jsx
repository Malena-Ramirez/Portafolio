import React from "react";
import { Skill } from "./Skill.jsx";
import { skillset } from "../utils/data/skillset";
import { Container, Row } from "react-bootstrap";
import "../styles/Skillset.css";

export const Skillset = () => {
  return (
    <section id="skillset" className="d-flex flex-column align-items-center">
      <h2>Habilidades</h2>
      <Container className="h-100 d-flex align-items-center">
        <Row className="skillset-icons-container">
          {skillset.map((skill) => (
            <Skill icon={skill.icon} name={skill.name} key={skill.name} />
          ))}
        </Row>
      </Container>
    </section>
  );
};
