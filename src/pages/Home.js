import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import useInView from '../components/motion/useInView';
import { FaRocket, FaSatellite, FaRobot } from 'react-icons/fa';
import SEO from '../components/SEO';
import Partners from '../components/Partners';
import AnimatedSection from '../components/motion/AnimatedSection';
import StaggerContainer, { itemVariants } from '../components/motion/StaggerContainer';
import HeroVideo from '../assets/video/Home_Page.mp4';
import SatelliteOSImg from '../assets/images/satellite-os.png';
import RoboticArmBlackImg from '../assets/images/robotic-arm-black-fairings.png';

// Animated counter for stats
const AnimatedStat = ({ value, suffix = '', label, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const rounded = useTransform(springValue, (v) => Math.round(v));

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center px-6 py-4"
    >
      <div className="text-5xl md:text-7xl font-heading font-bold text-gradient mb-2">
        <motion.span>{rounded}</motion.span>{suffix}
      </div>
      <p className="text-text-secondary text-sm uppercase tracking-widest">{label}</p>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Home"
        description="Orbital Robotics is building the intelligent robotic infrastructure to expand humanity's presence beyond Earth. Autonomous robotics and advanced software for the space economy."
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src={HeroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.1)_0%,_transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            <span className="text-gradient">AI, Robotics and Autonomy</span>
            <br />
            for Orbital Logistics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xl md:text-2xl text-text-primary max-w-3xl mx-auto mb-10 font-light"
          >
            Enabling the next generation of space operations with autonomous robotics and artificial intelligence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          >
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
          </motion.div>
        </div>

      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background relative">
        <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-3 gap-4 md:gap-0 md:divide-x divide-white/10 max-w-3xl mx-auto">
            <AnimatedStat value={6} label="Arms Launched to Space" delay={0} />
            <AnimatedStat value={1} label="Patent Pending" delay={0.15} />
            <AnimatedStat value={10} label="Industry Partners" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* About Us Section */}
      <section className="py-20 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">About Us</h2>
            <p className="text-xl text-text-primary max-w-3xl mx-auto mb-4">
              Orbital Robotics: Seattle based company producing AI and robots for aerospace.
            </p>
            <p className="text-lg text-secondary font-medium max-w-3xl mx-auto">
              Backed by former Blue Origin and SpaceX engineers.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <motion.div variants={itemVariants} className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-colors">Experience</h3>
              <p className="text-text-secondary leading-relaxed">
                Former Blue Origin leaders with experience from BE-7 Lunar Lander Engine, New Glenn, Orbital Reef, Blue Ring and 100+ space shuttle missions.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-colors">Technology</h3>
              <p className="text-text-secondary leading-relaxed">
                Six flight demonstrations of AI-controlled robotic arms through NASA and U.S. universities. TRL-4 patent pending system for autonomous spacecraft with robotic arms that uses vision-based navigation, neural network planning, and control.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-colors">What We Do</h3>
              <p className="text-text-secondary leading-relaxed">
                Valuable satellites at end-of-life become space trash. We extend their life by refueling, repairing, and upgrading. We provide robotic arms, vision systems and AI powered GNC software so any spacecraft can perform RPOC.
              </p>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Capabilities</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              We provide the essential infrastructure for the new space economy.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div variants={itemVariants} className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-3xl mb-6"
              >
                <FaSatellite />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">In-Space Servicing</h3>
              <p className="text-text-secondary">
                Autonomous robotic systems for satellite repair, refueling, and life extension.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-3xl mb-6"
              >
                <FaRobot />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">Orbital Assembly</h3>
              <p className="text-text-secondary">
                Building large-scale structures in space with precision robotics and AI.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-3xl mb-6"
              >
                <FaRocket />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">Mission Autonomy</h3>
              <p className="text-text-secondary">
                Advanced software for autonomous mission planning and execution.
              </p>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Product Highlights Section */}
      <section className="py-20 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-50 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Our Products</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Hardware and software designed for the harshest environment.
            </p>
          </AnimatedSection>

          {/* Product 1: Hardware */}
          <AnimatedSection direction="left" className="flex flex-col md:flex-row items-center mb-20">
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
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  7 Degrees of Freedom
                </li>
                <li className="flex items-center text-text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Autonomous Grappling
                </li>
                <li className="flex items-center text-text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
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
          </AnimatedSection>

          {/* Product 2: Software */}
          <AnimatedSection direction="right" className="flex flex-col md:flex-row-reverse items-center">
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
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  Real-time Telemetry
                </li>
                <li className="flex items-center text-text-primary">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                  AI-driven Navigation
                </li>
                <li className="flex items-center text-text-primary">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
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
          </AnimatedSection>

          {/* View All Products CTA */}
          <AnimatedSection className="mt-20 text-center">
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Discover our complete range of hardware, software, and services designed for the future of space exploration.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full text-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/50"
            >
              View Full Product Catalog
              <span className="ml-2">→</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
