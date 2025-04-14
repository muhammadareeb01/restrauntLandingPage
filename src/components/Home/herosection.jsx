// src/components/HeroSection.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import wrapsImage from "../../assets/wrapsImage.png";
import { RiEBike2Line } from "react-icons/ri";
function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-red-curve" />
      <div className="hero-black-curve">
        <div className="hero-image-fill" />
      </div>
      <div className="discount-wrapper">
        <div className="delivery-info" data-aos="fade-up" data-aos-delay="200">
       
          <RiEBike2Line className="bike-icon" />
          <div className="delivery-text">
            <span>DELIVERY SERVICE</span>
            <span>AVAILABLE 24/7</span>
          </div>
        </div>
        <div className="discount-rotator">
          <div className="discount-box" data-aos="fade-up" data-aos-delay="300">
            <span className="text-5xl">20 </span>
            <p className="text-2xl">
              % <p className="text-2xl">OFF</p>
            </p>
          </div>
        </div>
      </div>
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <Navbar />
        <div className="hero-split flex flex-col md:flex-row items-center justify-between">
          <div className="hero-image w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src={wrapsImage}
              alt="Wraps"
              className="w-3/4 md:w-full max-w-md object-contain"
            />
          </div>
          <div className="hero-text w-full md:w-1/2 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="block">Welcome to</span>
              <span className="text-red-600 block">Sean Anyanwu</span>
            </h1>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/order">
                <button className="bg-red-600 order button text-white px-6 py-3 rounded-full hover:bg-red-700 transition font-medium">
               
                  Order Now
                </button>
              </Link>
              <Link to="/menu">
                <button className="bg-red-600 order button text-white px-6 py-3 rounded-full hover:bg-red-700 transition font-medium">
                  Go to Our Menu
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
