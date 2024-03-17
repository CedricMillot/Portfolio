import React from "react";
import { useParams } from "react-router-dom";
import jsonData from "../data/project.json";
import "./ProjectDescription.css";
import Collapse from "../components/collapse";

function ProjectDetails() {
  const { id } = useParams();
  const project = jsonData.find((item) => item.id === id);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="project-details-container">
      <div className="banner-top">
        <h2 className="project-title">{project.title}</h2>
        <h3 className="title-git">
          Cliquez sur un projet pour accéder à mon GitHub
        </h3>
      </div>
      <div className="images-container">
        {project.pictures.map((picture, index) => (
          <div key={index} className="image-wrapper">
            <a
              className="a-project"
              href={project.location}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require(`../data/${picture}`)}
                alt={`description ${index}`}
                className="project-image"
              />
            </a>
          </div>
        ))}
      </div>
      <Collapse
        title="Description du projet"
        description={<p className="description">{project.description}</p>}
        className="custom-width-collapse"
      />
    </div>
  );
}

export default ProjectDetails;
