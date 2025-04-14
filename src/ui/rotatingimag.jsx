// src/components/RotatingCircleImage.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function RotatingCircleImage({ dimmedImageSrc, overlayImageSrc }) {
  const borderRef = useRef(null);

  useEffect(() => {
    if (borderRef.current) {
      gsap.to(borderRef.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="story-food-image lg:w-1/2 w-full md:w-full sm:w-full flex justify-center">
      {/* Container to position the border and images together */}
      <div className="rotating-image-container">
        {/* Dotted border that rotates */}
        <div className="rotating-border" ref={borderRef}></div>
        {/* Static images that do not rotate */}
        <div className="circle-image-wrapper">
          <img
            src={dimmedImageSrc}
            alt="Story Food Background"
            className="dimmed-image"
            // data-aos="fade-left"
          />
          <img
            src={overlayImageSrc}
            alt="Overlay Wraps"
            className="overlay-image"
          />
        </div>
      </div>
    </div>
  );
}

export default RotatingCircleImage;