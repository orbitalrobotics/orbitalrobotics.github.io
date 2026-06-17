import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import AnimatedSection from '../../components/motion/AnimatedSection';
import { Eyebrow } from '../../components/ui';

const ThankYou = () => (
  <div className="min-h-screen bg-background pt-[var(--header-height)] pb-20 flex items-center">
    <SEO
      title="Application Received"
      description="Thank you for applying to Orbital Robotics."
    />
    <div className="container mx-auto px-6 max-w-2xl">
      <AnimatedSection>
        <Eyebrow className="mb-4">Application Received</Eyebrow>
        <h1 className="text-h1 font-heading text-white mb-5">Thank you for applying.</h1>
        <p className="text-xl text-text-secondary mb-10">
          We've received your application and will review it as soon as possible. If your background is a strong fit, someone from our team will be in touch.
        </p>
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm"
        >
          ← Back to Careers
        </Link>
      </AnimatedSection>
    </div>
  </div>
);

export default ThankYou;
