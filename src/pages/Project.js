import "./Project.css";
import React from "react";
import CarouselComponent from "../components/carousel";

const Project = () => {
  return (
    <div className="MapProject">
      <h1 className="TitleProject">Mes projets</h1>
      <p className="TextProject">
        Veuillez trouver ci-dessous tous mes projets réalisé
      </p>
      <React.Fragment>
        <CarouselComponent />
      </React.Fragment>
    </div>
  );
};

export default Project;
