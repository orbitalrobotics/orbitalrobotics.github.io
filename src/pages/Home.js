import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaSatellite, FaRobot } from 'react-icons/fa';
import SEO from '../components/SEO';
import Partners from '../components/Partners';
import HeroVideo from '../assets/video/Home_Page.mp4';
import ComingSoonImg from '../assets/images/coming_soon.png';
import SatelliteOSImg from '../assets/images/satellite-os.png';
import RoboticArmBlackImg from '../assets/images/robotic-arm-black-fairings.png';

const Home = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Home"
        description="Orbital Robotics is building the intelligent robotic infrastructure to expand humanity’s presence beyond Earth. Autonomous robotics and advanced software for the space economy."
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            src={HeroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Building the intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">robotic infrastructure</span> <br />
            to expand humanity’s presence beyond Earth.
          </h1>
          <p className="text-xl md:text-2xl text-text-primary max-w-3xl mx-auto mb-10 font-light">
            Enabling the next generation of space operations with autonomous robotics and artificial intelligence.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Link
              to="/products"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/50"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full text-lg font-medium transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>



      {/* About Us Section */}
      <section className="py-20 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Who We Are</h2>
            <p className="text-xl text-text-primary max-w-3xl mx-auto mb-4">
              Orbital Robotics: Seattle based company producing AI and robots for aerospace.
            </p>
            <p className="text-lg text-secondary font-medium max-w-3xl mx-auto">
              Backed by former Blue Origin and SpaceX engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {/* Experience */}
            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                Former Blue Origin leaders with experience from BE-7 Lunar Lander Engine, New Glenn, Orbital Reef, Blue Ring and 100+ space shuttle missions.
              </p>
            </div>

            {/* Technology */}
            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Technology</h3>
              <p className="text-text-secondary leading-relaxed">
                Six flight demonstrations of AI-controlled robotic arms through NASA and U.S. universities. TRL-4 patent pending system for autonomous spacecraft with robotic arms that uses vision-based navigation, neural network planning, and control.
              </p>
            </div>

            {/* What We Do */}
            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">What We Do</h3>
              <p className="text-text-secondary leading-relaxed">
                Valuable satellites at end-of-life become space trash. We extend their life by refueling, repairing, and upgrading. We provide robotic arms, vision systems and AI powered GNC software so any spacecraft can perform RPOC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Capabilities</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              We provide the essential infrastructure for the new space economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">
                <FaSatellite />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">In-Space Servicing</h3>
              <p className="text-text-secondary">
                Autonomous robotic systems for satellite repair, refueling, and life extension.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">
                <FaRobot />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Orbital Assembly</h3>
              <p className="text-text-secondary">
                Building large-scale structures in space with precision robotics and AI.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">
                <FaRocket />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Mission Autonomy</h3>
              <p className="text-text-secondary">
                Advanced software for autonomous mission planning and execution.
              </p>
            </div>
          </div>
        </div>
      </section>





      {/* Partners Section */}
      <Partners />



      {/* Product Highlights Section */}
      <section className="py-20 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-50 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Our Products</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Hardware and software designed for the harshest environment.
            </p>
          </div>

          {/* Product 1: Hardware */}
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <img
                src={RoboticArmBlackImg}
                alt="Robotic Arm"
                className="rounded-2xl shadow-2xl border border-white/10 hover:shadow-primary/20 transition-shadow duration-500"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h3 className="text-3xl font-bold text-white mb-4">Robotic Arms</h3>
              <p className="text-text-secondary text-lg mb-6">
                Space-rated robotic manipulators designed for on-orbit servicing and assembly.
                Featuring modular end-effectors and radiation-hardened electronics.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  7 Degrees of Freedom
                </li>
                <li className="flex items-center text-text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Autonomous Grappling
                </li>
                <li className="flex items-center text-text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Modular Interface
                </li>
              </ul>
              <Link
                to="/products"
                className="text-primary font-medium hover:text-primary-hover flex items-center group"
              >
                Learn more about Hardware
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Product 2: Software */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
              <img
                src={SatelliteOSImg}
                alt="SatelliteOS"
                className="rounded-2xl shadow-2xl border border-white/10 hover:shadow-secondary/20 transition-shadow duration-500"
              />
            </div>
            <div className="md:w-1/2 md:pr-10">
              <h3 className="text-3xl font-bold text-white mb-4">SatelliteOS</h3>
              <p className="text-text-secondary text-lg mb-6">
                The intelligent operating system for next-generation spacecraft.
                Enabling autonomous navigation, constellation management, and real-time data processing.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-text-primary">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Real-time Telemetry
                </li>
                <li className="flex items-center text-text-primary">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  AI-driven Navigation
                </li>
                <li className="flex items-center text-text-primary">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Secure Communications
                </li>
              </ul>
              <Link
                to="/products"
                className="text-secondary font-medium hover:text-secondary-glow flex items-center group"
              >
                Learn more about Software
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home;
