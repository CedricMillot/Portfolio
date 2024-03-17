import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text">© 2024 Mon Entreprise. Tous droits réservés.</p>
        <p className="text">Mon contact{" : "} </p>
        <a href="linkedin.com/in/cedric-millot-bb6b1b295">Linkedin</a> |{" "}
        <p>Cedricmillot@laposte.net</p>
      </div>
    </footer>
  );
};

export default Footer;
