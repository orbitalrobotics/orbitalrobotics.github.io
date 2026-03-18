import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import AnimatedSection from './motion/AnimatedSection';
import Logo from '../assets/images/logo_white.png';

const Footer = () => {
  return (
    <footer className="bg-surface relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <img src={Logo} alt="Orbital Robotics" className="h-10 mb-4" />
              <p className="text-text-secondary text-sm leading-relaxed">
                Expanding humanity's presence beyond Earth with autonomous robotics and AI.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Products</h4>
              <ul className="space-y-3">
                <li><Link to="/products" className="text-text-secondary hover:text-primary transition-colors text-sm">Robotic Arms</Link></li>
                <li><Link to="/products" className="text-text-secondary hover:text-primary transition-colors text-sm">SatelliteOS</Link></li>
                <li><Link to="/products" className="text-text-secondary hover:text-primary transition-colors text-sm">NavIQ</Link></li>
                <li><Link to="/products" className="text-text-secondary hover:text-primary transition-colors text-sm">AstroBot</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/team" className="text-text-secondary hover:text-primary transition-colors text-sm">Team</Link></li>
                <li><Link to="/roadmap" className="text-text-secondary hover:text-primary transition-colors text-sm">Roadmap</Link></li>
                <li><Link to="/news" className="text-text-secondary hover:text-primary transition-colors text-sm">News</Link></li>
                <li><Link to="/contact" className="text-text-secondary hover:text-primary transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Get in Touch</h4>
              <p className="text-text-secondary text-sm mb-2">info@orbital-robots.com</p>
              <p className="text-text-secondary text-sm mb-6">Puyallup, Washington</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/orbital-robotics-corp/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="pt-8 border-t border-white/5 text-center text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Orbital Robotics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
