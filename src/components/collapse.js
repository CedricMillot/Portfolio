import React, { useState } from "react";
import "./collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-collapse">
      <div>
        <label htmlFor="menu" className={`menu-button ${isOpen ? "open" : ""}`}>
          <div>{title}</div>
          <div onClick={toggleCollapse}>
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        </label>
        <div className={`description-container ${isOpen ? "open" : ""}`}>
          {description}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
