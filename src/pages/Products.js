import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigationType } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import AnimatedSection from '../components/motion/AnimatedSection';
import StaggerContainer, { itemVariants } from '../components/motion/StaggerContainer';
import { Eyebrow, Badge, Button } from '../components/ui';
import { services, hardwareProducts, softwareProducts } from '../data/productsData';

const ProductCard = ({ product, onSaveScroll }) => {
  const { id, title, description, image, video, videos, category, availability } = product;
  const { imageFit = 'cover', imageBg = '', videoFit = 'cover', videoBg = '', videoPosition = 'center' } = product;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    if (videos && videos.length > 1) {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }
  };

  useEffect(() => {
    if (videoRef.current && videos && videos.length > 0) {
      videoRef.current.load();
      videoRef.current.play().catch((e) => console.log('Autoplay prevented', e));
    }
  }, [currentVideoIndex, videos]);

  const activeVideo = videos ? videos[currentVideoIndex] : video;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-surface border border-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
    >
      <Link to={`/products/${id}`} onClick={onSaveScroll} className="block flex-1 flex flex-col">
        <div className="overflow-hidden relative">
          {activeVideo ? (
            <video
              ref={videoRef}
              src={activeVideo}
              autoPlay
              loop={!videos}
              muted
              playsInline
              onEnded={handleVideoEnded}
              className={`w-full h-64 object-${videoFit} ${videoBg} transform group-hover:scale-105 transition-transform duration-700`}
              style={{ objectPosition: videoPosition }}
            />
          ) : (
            <img
              src={image}
              alt={title}
              loading="lazy"
              className={`w-full h-64 object-${imageFit} ${imageBg} transform group-hover:scale-105 transition-transform duration-700`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          {availability && (
            <div className="absolute top-4 right-4">
              <Badge variant="ember">Available {availability}</Badge>
            </div>
          )}
        </div>
        <div className="p-8 relative z-10 flex flex-col flex-1">
          <Eyebrow className="mb-2">{category}</Eyebrow>
          <h3 className="text-2xl font-heading font-bold text-white mb-3">{title}</h3>
          <p className="text-text-secondary mb-6 line-clamp-3 flex-1">{description}</p>
          <span className="inline-flex items-center gap-2 text-white font-medium group-hover:text-primary transition-colors mt-auto">
            Learn More
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const ProductSection = ({ heading, products, gridClassName, onSaveScroll }) => (
  <div className="mb-24">
    <AnimatedSection>
      <h2 className="text-3xl font-heading font-bold text-white mb-10 border-b border-white/10 pb-4">{heading}</h2>
    </AnimatedSection>
    <StaggerContainer className={`grid grid-cols-1 gap-8 ${gridClassName}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSaveScroll={onSaveScroll} />
      ))}
    </StaggerContainer>
  </div>
);

const Products = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === 'POP' || location.state?.keepScroll) {
      const savedPosition = sessionStorage.getItem('productsScrollPosition');
      if (savedPosition) {
        setTimeout(() => window.scrollTo(0, parseInt(savedPosition, 10)), 0);
      }
    }
  }, [navigationType, location]);

  const saveScrollPosition = () => {
    sessionStorage.setItem('productsScrollPosition', window.scrollY.toString());
  };

  return (
    <div className="min-h-screen bg-background pt-[var(--header-height)] pb-20">
      <SEO
        title="Products"
        description="Explore Orbital Robotics' hardware and software: the ORA robotic arm family, AstroBot refueling vehicle, ASTRA-P autonomous GNC, NavIQ computer vision, and OrbitOS flight software."
      />
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-20 pt-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Our Products &amp; Services</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Advanced robotics and software infrastructure enabling the future of space operations.
          </p>
        </AnimatedSection>

        <ProductSection
          heading="Hardware"
          products={hardwareProducts}
          gridClassName="md:grid-cols-2"
          onSaveScroll={saveScrollPosition}
        />

        <ProductSection
          heading="Software"
          products={softwareProducts}
          gridClassName="md:grid-cols-2 lg:grid-cols-3"
          onSaveScroll={saveScrollPosition}
        />

        <ProductSection
          heading="Services"
          products={services}
          gridClassName="md:grid-cols-2"
          onSaveScroll={saveScrollPosition}
        />

        {/* CTA Section */}
        <AnimatedSection>
          <div className="mt-24 text-center bg-surface rounded-3xl p-12 border border-white/5">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">Ready to upgrade your mission?</h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Contact our engineering team to discuss how Orbital Robotics can support your specific mission
              requirements.
            </p>
            <Button to="/contact" size="lg">
              Get in Touch
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Products;
