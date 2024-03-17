import React from "react";
import "./Header.css";
import logoGithub from "../images/logo-github.webp";
import logoLinkedin from "../images/logo-linkedin.webp";

function Header() {
  return (
    <header className="header">
      <div className="container-header">
        <div className="name-header">
          <h1 className="logo-container">CÉDEV</h1>
          <p>Développeur Web</p>
        </div>
        <nav className="nav-header">
          <a href="/" className="lien-avec-bordure souligner-au-survol">
            Acceuil
          </a>
          <a href="/about" className="lien-avec-bordure souligner-au-survol">
            À propos
          </a>
          <a href="/project" className="lien-avec-bordure souligner-au-survol">
            Projets
          </a>
          <a href="/contact" className="lien-avec-bordure souligner-au-survol">
            Contact
          </a>
          <a
            href="https://github.com/CedricMillot?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
            className="lien-github"
          >
            <img src={logoGithub} alt="Logo-GitHub" style={{ width: "30px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/cedric-millot-9229921b/"
            target="_blank"
            rel="noreferrer noopener"
            className="lien-linkedin"
          >
            <img
              src={logoLinkedin}
              alt="Logo-linkedin"
              style={{ width: "30px" }}
            />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
