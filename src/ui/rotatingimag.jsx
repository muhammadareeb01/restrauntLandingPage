// src/components/RotatingCircleImage.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function RotatingCircleImage({ dimmedImageSrc, overlayImageSrc }) {
  const borderRef = useRef(null);

  useEffect(() => {
    // GSAP animation to rotate the dotted border
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
    <div className="story-food-image w-full md:w-full  sm:w-full flex justify-center">
      <div className="rotating-border" ref={borderRef}>
        <div className="circle-image-wrapper">
          {/* Dimmed background image */}
          <img
            src={dimmedImageSrc}
            alt="Story Food Background"
            className="dimmed-image"
            data-aos="fade-left"
          />
          {/* Overlay image centered on top of the dimmed image */}
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