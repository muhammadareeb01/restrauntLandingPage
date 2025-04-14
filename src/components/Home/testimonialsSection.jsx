import React from 'react';
import TestimonialSlider from '../../ui/slider';
import { testimonials } from '../../data/data';
import  wrapImage   from '../../assets/image.png';

function TestimonialSection() {
  console.log('Testimonials data:', testimonials);

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-6 lg:gap-8 items-center">
          <div className="w-full" data-aos="fade-right">
            <img
              src={wrapImage}
              alt="Food Wrap"
              className="w-full h-auto max-h-64 lg:max-h-96 object-cover "
            />
          </div>
          <div className="flex flex-col w-full" data-aos="fade-left">
            <div className="mb-6 md:mb-8 lg:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-playfair">
                Client
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 font-playfair">
                Reviews
              </h2>
            </div>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;