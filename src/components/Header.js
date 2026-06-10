import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/logo_white.png';
import ProductDropdown from './ProductDropdown';
import Button from './ui/Button';
import { ease } from '../utils/motionTokens';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on route change.
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const simpleLinks = [
    { name: 'Team', path: '/team' },
    { name: 'News', path: '/news' },
  ];
  const mobileLinks = [{ name: 'Products', path: '/products' }, ...simpleLinks];
  const productsActive = location.pathname.startsWith('/products');

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: ease.standard }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-xl py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="z-50" aria-label="Orbital Robotics home">
            <img src={Logo} alt="Orbital Robotics" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ProductDropdown active={productsActive} />
            {simpleLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative ${
                  location.pathname === link.path ? 'text-primary' : 'text-text-secondary'
                } hover:text-primary transition-colors font-medium`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Button to="/contact" size="sm" className="px-6">
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 lg:hidden pt-24 pb-10 overflow-y-auto"
          >
            {mobileLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
              >
                <Link
                  to={link.path}
                  className={`text-2xl font-medium hover:text-primary transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + mobileLinks.length * 0.05, duration: 0.3 }}
            >
              <Button to="/contact" size="lg" onClick={() => setIsOpen(false)}>
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
