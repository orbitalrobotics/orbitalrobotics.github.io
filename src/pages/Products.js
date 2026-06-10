import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigationType } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, Rocket } from 'lucide-react';
import SEO from '../components/SEO';
import AnimatedSection from '../components/motion/AnimatedSection';
import StaggerContainer, { itemVariants } from '../components/motion/StaggerContainer';
import { Eyebrow, Badge, Button } from '../components/ui';
import { services, hardwareProducts, softwareProducts } from '../data/productsData';

const typeHoverBorder = {
  hardware: 'hover:border-primary/50',
  software: 'hover:border-secondary/50',
  service: 'hover:border-ember/40',
};

const ProductCard = ({ product, type, featured = false, onSaveScroll }) => {
  const { id, title, tagline, description, image, video, videos, category, availability, highlights } = product;
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
  const mediaHeight = featured ? 'h-64 md:h-80' : 'h-56';

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden rounded-xl bg-surface border border-white/[0.08] ${typeHoverBorder[type]} hover:shadow-elev-2 flex flex-col h-full`}
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
              className={`w-full ${mediaHeight} object-${videoFit} ${videoBg} transform group-hover:scale-105 transition-transform duration-700`}
              style={{ objectPosition: videoPosition }}
            />
          ) : (
            <img
              src={image}
              alt={title}
              loading="lazy"
              className={`w-full ${mediaHeight} object-${imageFit} ${imageBg} transform group-hover:scale-105 transition-transform duration-700`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          {availability && (
            <div className="absolute top-4 right-4">
              <Badge variant="ember">Available {availability}</Badge>
            </div>
          )}
        </div>
        <div className="p-7 relative z-10 flex flex-col flex-1">
          <Eyebrow className="mb-2">{category}</Eyebrow>
          <h3 className="text-2xl font-heading font-bold text-white mb-3">{title}</h3>
          <p className="text-text-secondary mb-5 flex-1">{tagline || description}</p>
          {highlights && (
            <div className="flex flex-wrap gap-2 mb-5">
              {highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs font-medium text-text-secondary bg-white/[0.04] border border-white/10 rounded-md px-2 py-1"
                >
                  {h}
                </span>
              ))}
            </div>
          )}
          <span className="inline-flex items-center gap-2 text-white font-medium group-hover:text-primary transition-colors mt-auto">
            View details
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'hardware', label: 'Hardware' },
  { key: 'software', label: 'Software' },
  { key: 'service', label: 'Services' },
];

const credibility = [
  { icon: ShieldCheck, stat: '6 flight demos', label: 'AI-controlled arms flown via NASA & U.S. universities' },
  { icon: Cpu, stat: 'TRL 6 → 9', label: 'Maturity progression on our autonomy stack' },
  { icon: Rocket, stat: 'Lyapunov-verified', label: 'Control validated across thousands of Monte Carlo runs' },
];

const Products = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [filter, setFilter] = useState('all');

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

  // Tag every product with its type, flagship-first.
  const all = [
    ...hardwareProducts.map((p) => ({ product: p, type: 'hardware' })),
    ...softwareProducts.map((p) => ({ product: p, type: 'software' })),
    ...services.map((p) => ({ product: p, type: 'service' })),
  ].sort((a, b) => (b.product.featured ? 1 : 0) - (a.product.featured ? 1 : 0));

  const visible = filter === 'all' ? all : all.filter((x) => x.type === filter);

  return (
    <div className="min-h-screen bg-background pt-[var(--header-height)] pb-20">
      <SEO
        title="Products"
        description="Explore Orbital Robotics' hardware and software: the Astrosfera robotic arm family, AstroBot refueling vehicle, ASTRA-P autonomous GNC, NavIQ computer vision, and OrbitOS flight software."
      />
      <div className="container mx-auto px-6">
        <AnimatedSection className="max-w-3xl mb-12 pt-10">
          <Eyebrow className="mb-4">Products &amp; Services</Eyebrow>
          <h1 className="text-h1 font-heading text-white mb-5">
            The autonomous capture and servicing stack
          </h1>
          <p className="text-xl text-text-secondary">
            Advanced robotics and software infrastructure enabling the future of space operations — hardware, software,
            and turnkey services that work as one closed-loop system.
          </p>
        </AnimatedSection>

        {/* Sticky filter tabs */}
        <div className="sticky top-20 z-30 -mx-6 px-6 py-3 mb-10 bg-background/80 backdrop-blur-md border-y border-white/5">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === f.key
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-text-secondary hover:text-white hover:bg-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento product grid */}
        <AnimatePresence mode="wait">
          <StaggerContainer
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {visible.map(({ product, type }) => (
              <div
                key={product.id}
                className={product.featured && filter !== 'service' ? 'md:col-span-2' : ''}
              >
                <ProductCard
                  product={product}
                  type={type}
                  featured={product.featured}
                  onSaveScroll={saveScrollPosition}
                />
              </div>
            ))}
          </StaggerContainer>
        </AnimatePresence>

        {/* Credibility band */}
        <AnimatedSection className="mt-24">
          <div className="rounded-2xl border border-white/10 bg-surface/50 p-10">
            <Eyebrow className="mb-8 text-center">Proven heritage</Eyebrow>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {credibility.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.stat} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-ember-subtle border border-ember/30 flex items-center justify-center text-ember">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <div className="text-xl font-heading font-bold text-white mb-1">{c.stat}</div>
                    <p className="text-text-muted text-sm max-w-xs mx-auto">{c.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="mt-16 text-center bg-surface rounded-2xl p-12 border border-white/[0.06]">
            <h2 className="text-h3 font-heading text-white mb-4">Ready to upgrade your mission?</h2>
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
