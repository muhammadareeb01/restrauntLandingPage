// src/components/MenuSection.js
import React from "react";
import "../../styles/menu.css"; // Import the dedicated CSS file

// Placeholder images (replace with your actual images)
import menuImage1 from "../../assets/image.png"; // Replace with your image paths
import menuImage2 from "../../assets/image.png";
import menuImage3 from "../../assets/image.png";
import menuImage4 from "../../assets/image.png";

function MenuSection() {
  const menuItems = [
    {
      image: menuImage1,
      title: "Vort Miatirq",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      price: "$10.00",
    },
    {
      image: menuImage2,
      title: "Iacirt Ifunlirv",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      price: "$12.00",
    },
    {
      image: menuImage3,
      title: "Vorr Nerrlirq",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      price: "$15.00",
    },
    {
      image: menuImage4,
      title: "Vorr Hortlirv",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      price: "$18.00",
    },
  ];

  return (
    <div className="menu-section relative bg-white">
      {/* Red background with U-shaped curve at the top */}
      <div className="menu-top-curve"></div> 
      <div className="menu-red-curve absolute inset-x-0 bottom-0 h-[90%] bg-red-600 z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <h2 className="text-center mb-12">
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            View Our
          </span>
          <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
            MENU
          </span>
        </h2>

        {/* Menu Items Grid */}
        <div className="menu-grid grid grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item flex flex items-center p-4">
              <div className="menu-image-wrapper mr-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">{item.description}</p>
            <div className="flex flex-row  align-center items-center  justify-start gap-3">
                <div>
                <p className="text-white font-bold ">{item.price}</p>
                </div>
                <div>
                <button class="cart-btn">
  <span class="cart-content text-sm">Add to Cart  </span>
</button>

                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
