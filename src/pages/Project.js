import "./Project.css";
import React from "react";
import CarouselComponent from "../components/carousel";

const Project = () => {
  return (
    <div className="MapProject">
      <div className="Project-background">
        <h1 className="TitleProject">Mes projets</h1>
        <p className="TextProject">
          Veuillez trouver ci-dessous tous mes projets réalisé
        </p>
      </div>
      <React.Fragment>
        <CarouselComponent />
      </React.Fragment>
    </div>
  );
};

export default Project;
