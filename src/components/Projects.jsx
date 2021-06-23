import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import { Row } from "react-bootstrap";
import { projects } from "../utils/data/projects";
import "../styles/Projects.css";

export function Projects() {
  return (
    <section id="projects" className="d-flex flex-column align-items-center justify-content-center">
      <h2>Proyectos en los que he trabajado</h2>
      <Row xs={1} md={3} className="g-4 m-5">
        {projects.map((project, index) => (
          <ProjectCard url={project.url} img={project.img} name={project.name} description={project.description} key={`${project.name}-${index}`} />
        ))}
      </Row>
    </section>
  );
}
