import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-surface py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">Orbital Robotics</h3>
            <p className="text-text-secondary">Expanding humanity's presence beyond Earth.</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link to="/products" className="text-text-secondary hover:text-primary transition-colors">Products</Link>
            <Link to="/roadmap" className="text-text-secondary hover:text-primary transition-colors">Roadmap</Link>
            <Link to="/team" className="text-text-secondary hover:text-primary transition-colors">Team</Link>
            <Link to="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/orbital-robotics-corp/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Orbital Robotics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;