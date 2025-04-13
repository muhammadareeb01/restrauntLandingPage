import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TestimonialSlider({ testimonials }) {
  const [isFading, setIsFading] = useState(false);

  console.log(testimonials, '..');

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8500,
    speed: 1500, // Total duration for the fade-out + fade-in (1.5 seconds)
    fade: false, // Disable react-slick's fade to use custom CSS
    arrows: false, // Hide arrows since they're not in the design
    beforeChange: () => setIsFading(true), // Start fade-out
    afterChange: () => setIsFading(false), // Reset after fade-in
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="bg-gray-100 w-full text-center py-4 text-gray-600">
        No testimonials available.
      </div>
    );
  }

  return (
    <div className="bg-gray-100 w-full">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full">
            <div
              className={`relative testimonial-slide ${
                isFading ? 'fade-out' : 'fade-in'
              }`}
            >
              <p className="text-gray-600 text-base leading-relaxed italic">
                ‘{testimonial.quote}’
              </p>
              <div className="mt-6 md:mt-8">
                <p className="text-xl font-semibold text-red-600">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonial.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;