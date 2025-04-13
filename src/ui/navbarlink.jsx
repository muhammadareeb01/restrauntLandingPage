import React from "react";

function NavLink({ href, children, onClick, isActive }) {
  return (
    <div className="navlink-container">
      <a
        href={href}
        className={`text-gray-300 hover:text-white transition-colors duration-300 ${
          isActive ? "text-red-600" : ""
        }`}
        onClick={onClick}
      >
        {children}
      </a>
      <div className={`navlink-underline ${isActive ? "active" : ""}`} />
    </div>
  );
}

export default NavLink;