import React from "react";
import { Col } from "react-bootstrap";

export const Skill = ({ icon, name }) => {
  return (
    <Col className="skillset-icon d-flex flex-column align-items-center justify-content-center">
      <i className={icon}></i>
      <p>{name}</p>
    </Col>
  );
};
