import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/logo_white.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Team', path: '/team' },
    { name: 'News', path: '/news' },
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="z-50">
            <img src={Logo} alt="Orbital Robotics" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${location.pathname === link.path ? 'text-primary' : 'text-text-secondary'} hover:text-primary transition-colors font-medium`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-full transition-all transform hover:scale-105 font-medium"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl z-50 focus:outline-none"
            onClick={toggleDropdown}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </header>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 pb-10 overflow-y-auto`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-2xl font-medium hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-full text-xl font-medium transition-all transform hover:scale-105"
          onClick={() => setIsOpen(false)}
        >
          Get in Touch
        </Link>
      </div>
    </>
  );
}

export default Header;