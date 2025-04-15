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
      <div className="rotating-image-container">
        <div className="rotating-border" ref={borderRef}></div>
        <div className="circle-image-wrapper">
          <img
            src={dimmedImageSrc}
            alt="Story Food Background"
            className="dimmed-image"
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
