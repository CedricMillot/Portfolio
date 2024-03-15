import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./carousel.css"; // Importer le fichier CSS personnalisé
import jsonData from "../data/project.json";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselComponent = () => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setImages(
      jsonData.map((item) => ({
        id: item.id,
        cover: item.cover,
        title: item.title,
        tags: item.tags || [],
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
          <Carousel.Item key={`${image.id}-${index}`}>
            <img
              src={require(`../data/${image.cover}`)}
              alt={`Carrousel ${index + 1}`}
              className="carousel-image"
              onClick={() => handleImageClick(image.id)}
            />
            <div className="carousel-overlay">
              <p>{image.title}</p>
              <div className="tags-container">
                {image.tags &&
                  image.tags.map((tag, tagIndex) => (
                    <span key={`${image.id}-${tagIndex}`} className="tag">
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
