import React, { useState } from 'react';
import './Gallery.css';
import gal1 from './assets/gal1.jpg'
import gal2 from './assets/gal2.jpg'
import gal3 from './assets/gal3.jpg'
import gal4 from './assets/gal4.jpg'
import gal5 from './assets/gal5.jpg'
import gal6 from './assets/gal6.jpg'

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [gal1, gal2, gal3, gal4, gal5, gal6];
  
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      };
    
      return (
        <div className="gallery-container">
          <div className="slider">
          <h1 className="text-center text-3xl text-white dm-bold">Gallery</h1>
            {images.map((img, index) => {
              let position;
              if (index === currentIndex) {
                position = "active";
              } else if (
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === images.length - 1)
              ) {
                position = "prev";
              } else if (
                index === currentIndex + 1 ||
                (currentIndex === images.length - 1 && index === 0)
              ) {
                position = "next";
              } else {
                position = "hidden";
              }
    
              return (
                <div
                  key={index}
                  className={`item ${position}`}
                >
                  <img src={img} alt={`Slide ${index + 1}`} />
                </div>
              );
            })}
            <button id="prev" onClick={prevSlide}>&lt;</button>
            <button id="next" onClick={nextSlide}>&gt;</button>
          </div>
        </div>
      );
    };
    
    export default Gallery;