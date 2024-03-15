import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [nom, setNom] = useState(""); // Nom
  const [sujet, setSujet] = useState(""); // Sujet
  const [email, setEmail] = useState(""); // Adresse e-mail

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implémentez la logique d'envoi d'e-mail avec les données collectées (nom, sujet, email)
    // Vous pouvez utiliser une bibliothèque d'envoi d'e-mails tierce ou un service back-end pour cela.

    console.log("Formulaire soumis :", { nom, sujet, email }); // À des fins de développement
    setNom("");
    setSujet("");
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="container">
        <form className="footer-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom :</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sujet">Sujet :</label>
            <input
              type="text"
              id="sujet"
              name="sujet"
              value={sujet}
              onChange={(e) => setSujet(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
        <p>
          &copy; {new Date().getFullYear()} - Copyright © 2024 CÉDEV. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
