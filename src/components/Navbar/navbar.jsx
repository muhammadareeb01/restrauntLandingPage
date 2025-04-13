import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "../../ui/navbarlink";
import logo from "../../assets/logo.jpg";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeLink, setActiveLink] = useState("#home");
  const [isVisible, setIsVisible] = useState(true); // State to control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (href) => {
    setActiveLink(href);
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  // Scroll handler to show/hide navbar based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        // Scrolling down and past the navbar height
        setIsVisible(false);
      } else {
        // Scrolling up or at the top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navLinksLeft = [
    { href: "#home", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#order", label: "Order" },
  ];

  const navLinksRight = [
    { href: "#story", label: "Story" },
    { href: "#location", label: "Location" },
    { href: "#contact", label: "Contact Us" },
  ];

  // Framer Motion variants for the navbar-links animation
  const linkVariants = {
    open: {
      scaleX: 1,
      originX: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      scaleX: 0,
      originX: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <nav className={`navbar bg-slate-500 w-full ${isVisible ? "visible" : "hidden"}`}>
      <div className="navbar-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`navbar-hamburger-wrapper ${isOpen ? "links-open" : "links-closed"}`}>
          <div className={`navbar-hamburger ${isOpen ? "open" : "closed"}`} onClick={toggleMenu}>
            <span className="hamburger-line top"></span>
            <span className="hamburger-line middle"></span>
            <span className="hamburger-line bottom"></span>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="navbar-links"
              initial="closed"
              animate="open"
              exit="closed"
              variants={linkVariants}
            >
              <div className="navbar-links-left">
                {navLinksLeft.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    isActive={activeLink === link.href}
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <a href="#home" className="navbar-logo">
                <img
                  src={logo}
                  alt="Digital Solutions Logo"
                  className="h-6 w-auto object-contain"
                />
              </a>
              <div className="navbar-links-right">
                {navLinksRight.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    isActive={activeLink === link.href}
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={`navbar-mobile-menu ${isOpen ? "open" : "closed"}`}>
          {[...navLinksLeft, ...navLinksRight].map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              isActive={activeLink === link.href}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;