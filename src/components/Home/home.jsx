import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import TestimonialsSection from "./TestimonialsSection";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import wrapsImage from "../../assets/wrapsImage.png"; // Replace with the actual path to the wraps image
import storyFoodImage from "../../assets/wrapsImage.png"; // Replace with the actual path to the circular food image

function Home() {
  // Initialize AOS for animations on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only animate once when scrolling into view
    });
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        {/* Red Background Semi-Circle */}
        <div className="hero-red-curve" />

        {/* Black Inner Semi-Circle */}
        <div className="hero-black-curve">
          <div className="hero-image-fill" />
        </div>

        {/* Container for Delivery Info and Discount Box */}
        <div className="discount-wrapper">
          {/* Delivery Info with Bike Icon and Text */}
          <div
            className="delivery-info"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <svg
              className="bike-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <div className="delivery-text">
              <span>DELIVERY SERVICE</span>
              <span>AVAILABLE 24/7</span>
            </div>
          </div>

          {/* Discount Box for "20% OFF" */}
          <div className="discount-rotator">
            <div
              className="discount-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="text-5xl">20 </span>
              <p className="text-2xl">
                % <p className="text-2xl">OFF</p>
              </p>
            </div>
          </div>
        </div>

        {/* Main Hero Content with Navbar, Image, and Text */}
        <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
          <Navbar />
          <div className="hero-split flex flex-col md:flex-row items-center justify-between">
            {/* Left Side: Wraps Image */}
            <div className="hero-image w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                src={wrapsImage}
                alt="Wraps"
                className="w-3/4 md:w-full max-w-md object-contain"
              />
            </div>

            {/* Right Side: Welcome Text and Buttons */}
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
                <Link
                  to="/order"
                  //   className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition font-medium"
                >
                  <button className="bg-red-600  order button text-white px-6 py-3 rounded-full hover:bg-red-700 transition font-medium">
                    {" "}
                    Order Now
                  </button>
                </Link>
                <Link to="/menu">
                  <button className="bg-red-600  order button text-white px-6 py-3 rounded-full hover:bg-red-700 transition font-medium">
                    {" "}
                    Go to Our Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View Our Story Section */}
      <div className="story-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="story-split flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Wraps Image */}
          <div className="story-image w-full md:w-1/3 flex justify-center">
            <img
              src={wrapsImage}
              alt="Story Wraps"
              className="w-3/4 md:w-full max-w-sm object-contain"
              data-aos="fade-right"
            />
          </div>

          {/* Center: Story Text */}
          <div className="story-text w-full md:w-1/3 text-center">
            <h2
              className="text-4xl md:text-5xl font-bold text-red-600 mb-4"
              data-aos="fade-up"
            >
              View Our Story
            </h2>
            <p
              className="text-gray-600 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <Link
              to="/story"
              className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition font-medium"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Read More
            </Link>
          </div>

          {/* Right Side: Circular Food Image */}
          <div className="story-food-image w-full md:w-1/3 flex justify-center">
            <div className="circle-image-wrapper">
              <img
                src={storyFoodImage}
                alt="Story Food"
                className="w-full h-full object-cover rounded-full"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}

export default Home;
