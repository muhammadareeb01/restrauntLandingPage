import React from "react";
import "../../styles/menu.css";
import menuItems from "../../data/menudata"; // Import the data

function MenuSection() {
  return (
    <div className="menu-section relative " style={{ background: "#e6413b" }}>
      <div className="menu-curve-wrapper"> </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center mb-12">
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            View Our
          </span>
          <span className="block text-7xl sm:text-6xl lg:text-9xl font-medium text-white">
            MENU
          </span>
          <span className="block text-2xl sm:text-2xl lg:text-2xl font-light text-white">
            Curated dishes for you
          </span>
        </h2>

        <div className="menu-grid">
          <div
            className="menu-item flex items-center p-4"
            data-aos="fade-left"
            data-aos-delay="0"
          >
            <div className="menu-image-wrapper mr-4">
              <div className="menu-image-inner"></div>
              <img
                src={menuItems[0].image}
                alt={menuItems[0].title}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">
                {menuItems[0].title.toUpperCase()}
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                {menuItems[0].description}
              </p>
              <div className="flex flex-row items-center justify-start gap-3">
                <div>
                  <p className="text-white font-bold">{menuItems[0].price}</p>
                </div>
                <div>
                  <button className="cart-btn">
                    <span className="cart-content text-sm">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="dotted-divider vertical top"></div>

          <div
            className="menu-item flex items-center p-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="menu-image-wrapper mr-4">
              <div className="menu-image-inner"></div>
              <img
                src={menuItems[1].image}
                alt={menuItems[1].title}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">
                {menuItems[1].title.toUpperCase()}
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                {menuItems[1].description}
              </p>
              <div className="flex flex-row items-center justify-start gap-3">
                <div>
                  <p className="text-white font-bold">{menuItems[1].price}</p>
                </div>
                <div>
                  <button className="cart-btn">
                    <span className="cart-content text-sm">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="dotted-divider horizontal left"></div>
          <div className="divider-gap"></div>
          <div className="dotted-divider horizontal right"></div>

          <div
            className="menu-item flex items-center p-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="menu-image-wrapper mr-4">
              <div className="menu-image-inner"></div>
              <img
                src={menuItems[2].image}
                alt={menuItems[2].title}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">
                {menuItems[2].title.toUpperCase()}
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                {menuItems[2].description}
              </p>
              <div className="flex flex-row items-center justify-start gap-3">
                <div>
                  <p className="text-white font-bold">{menuItems[2].price}</p>
                </div>
                <div>
                  <button className="cart-btn">
                    <span className="cart-content text-sm">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="dotted-divider vertical bottom"></div>

          <div
            className="menu-item flex items-center p-4"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="menu-image-wrapper mr-4">
              <div className="menu-image-inner"></div>
              <img
                src={menuItems[3].image}
                alt={menuItems[3].title}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">
                {menuItems[3].title.toUpperCase()}
              </h3>
              <p className="text-gray-300 text-sm mb-2">
                {menuItems[3].description}
              </p>
              <div className="flex flex-row items-center justify-start gap-3">
                <div>
                  <p className="text-white font-bold">{menuItems[3].price}</p>
                </div>
                <div>
                  <button className="cart-btn">
                    <span className="cart-content text-sm">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
