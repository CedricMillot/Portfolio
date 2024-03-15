import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./carousel.css";
import jsonData from "../data/project.json";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setImages(
      jsonData.map((item) => ({
        id: item.id,
        cover: item.cover,
      }))
    );
  }, []);

  const handleImageClick = (imageId) => {
    navigate(`/project/${imageId}`);
  };

  return (
    <div className="carousel-container">
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={image.id || index}>
            <img
              src={image.cover}
              alt={`Carrousel ${index + 1}`} // Correction de l'attribut alt
              className="carousel-image"
              onClick={() => handleImageClick(image.id)}
            />
            <div className="carousel-overlay"></div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
