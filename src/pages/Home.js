import React from "react";
import "./Home.css";
import monImage from "../images/photo.png";
import logohtml from "../images/logohtml.png";
import logocss from "../images/logocss.png";
import logoreact from "../images/logoreact.png";
import logomongodb from "../images/logomongodb.png";
import logonodejs from "../images/logonodejs.png";

function Home() {
  return (
    <div className="home">
      <div className="container-home">
        <div className="text-home">
          <h1>Bienvenue</h1>
          <p>Ceci est la page d'accueil de mon portfolio.</p>
          <p>
            Je suis un développeur Web passionné par la création de sites web et
            d'applications web.
          </p>
          <p>
            Vous pouvez en apprendre plus sur moi et mes projets en explorant
            mon portfolio.
          </p>
        </div>
        <div className="position-picture">
          <img className="picture" src={monImage} alt="Cédric Millot" />
        </div>
      </div>
      <div className="skill">
        <h1>Mes compétences</h1>
        <div className="logos">
          <div className="logo-skills">
            <img src={logohtml} alt="Logohtml" className="logo-skill" />
          </div>
          <div className="logo-skills">
            <img src={logocss} alt="Logocss" className="logo-skill" />
          </div>
          <div className="logo-skills">
            <img src={logoreact} alt="Logoreact" className="logo-skill" />
          </div>
          <div className="logo-skills">
            <img src={logomongodb} alt="Logomongodb" className="logo-skill" />
          </div>
          <div className="logo-skills">
            <img src={logonodejs} alt="Logonodejs" className="logo-skill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
