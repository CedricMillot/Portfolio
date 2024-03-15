import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../data/project.json";
import "./ProjectDescription.css";
import Collapse from "../components/collapse";

function ProjectDetails() {
  const { id } = useParams();
  const project = jsonData.find((item) => item.id === id);

  // Vérifiez si project est défini avant d'essayer d'accéder à ses propriétés
  if (!project) {
    return <div>Projet non trouvé</div>; // Affiche un message si le projet n'est pas trouvé
  }

  return (
    <div className="project-details-container">
      <h2 className="project-title">{project.title}</h2>
      <div className="images-container">
        {project.pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`description ${index}`}
            className="project-image"
          />
        ))}
      </div>
      <div className="collapse-container">
        <Collapse
          title="Description du projet"
          description={<p className="description">{project.description}</p>}
        />
      </div>
    </div>
  );
}

export default ProjectDetails;
