import React from "react";
import "../styles/WelcomeSection.css";
import profile from "../profile.jpg";

export function WelcomeSection() {
  return (
    <section id="welcome-section">
      <img src={profile} alt="Imagen de perfil" />
      <div>
        <h1>Soy Malena Ramírez Uribe</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sunt recusandae quia consequatur aspernatur magnam animi expedita tempore rem nesciunt!</p>
      </div>
    </section>
  );
}
