import React from "react";
import "./About.css";
import Collapse from "../components/collapse";

function About() {
  return (
    <div className="about">
      <div className="presentation-text">
        <div className="h2-container">
          <h2>Ma présentation</h2>
        </div>
        <h3>Bonjour, je m'appelle Cédric Millot,Développeur Web Junior</h3>
        <Collapse
          title="Enthousiaste et passionné par les technologies du web"
          description={
            <p>
              Ma découverte du code il y a quelques années a déclenché une
              véritable fascination pour cet univers en constante évolution.
              Déterminé à explorer ce domaine, j'ai entrepris une reconversion
              professionnelle en suivant une formation diplômante dispensée par
              OpenClassrooms.
            </p>
          }
        />
        <Collapse
          title="Motivé par l'apprentissage et l'innovation"
          description={
            <p>
              je suis doté d'une grande capacité d'adaptation et d'un esprit
              d'équipe aiguisé. Curieux et persévérant, je suis toujours à la
              recherche de nouveaux défis et d'opportunités pour développer mes
              compétences et enrichir mes connaissances.
            </p>
          }
        />
        <Collapse
          title="Maîtrisant les langages HTML, CSS et JavaScript"
          description={
            <p>
              je suis capable de créer des sites web et des applications web
              responsives et intuitives. Je suis également familier avec les
              frameworks populaires tels que React et Node.js, et je suis motivé
              à explorer d'autres technologies prometteuses.
            </p>
          }
        />
        <Collapse
          title="Dynamique et rigoureux"
          description={
            <p>
              je suis prêt à m'investir pleinement dans un environnement de
              travail stimulant et collaboratif. Je suis persuadé que mon
              enthousiasme, ma soif d'apprendre et mon engagement contribueront
              positivement à votre équipe.
            </p>
          }
        />
        <h5>N'hésitez pas à me contacter</h5>
      </div>
    </div>
  );
}

export default About;
