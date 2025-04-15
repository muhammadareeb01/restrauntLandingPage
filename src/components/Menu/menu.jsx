import React from "react";
import "../../styles/menu.css";

import menuImage1 from "../../assets/image.png";
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
          <span className="block text-7xl sm:text-6xl lg:text-9xl font-medium text-white">
            MENU
          </span>
          <span className="block text-2xl sm:text-2xl lg:text-2xl w-1/2 mx-auto font-light text-white">
            loremlsdhfksjdhk hksjdhfsjk,h nksdhfiljks nljksdbfils jjoisfuoi
            nkwdjfhbhj bsdhuflgwi jbwhldfblhuj bl\fh
          </span>
        </h2>

        <div className="menu-grid grid grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item flex items-center p-4">
              <div className="menu-image-wrapper mr-4">
                <div className="menu-image-inner"> </div>
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
                <div className="flex flex-row items-center justify-start gap-3">
                  <div>
                    <p className="text-white font-bold">{item.price}</p>
                  </div>
                  <div>
                    <button className="cart-btn">
                      <span className="cart-content text-sm">Add to Cart</span>
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
