import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import AnimatedSection from '../components/motion/AnimatedSection';
import StaggerContainer, { itemVariants } from '../components/motion/StaggerContainer';
import { Eyebrow, Badge } from '../components/ui';
import careersData from '../data/careersData';

const RoleCard = ({ slug, title, department, location, type }) => (
  <motion.div variants={itemVariants} whileHover={{ y: -4 }}>
    <Link
      to={`/careers/${slug}`}
      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface rounded-xl border border-white/[0.06] hover:border-primary/40 hover:shadow-elev-2 transition-all p-6"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-heading font-bold text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="ember">{department}</Badge>
          <span className="text-text-muted text-xs">{location}</span>
          <span className="text-text-muted text-xs">·</span>
          <span className="text-text-muted text-xs">{type}</span>
        </div>
      </div>
      <span className="text-text-secondary group-hover:text-primary transition-colors text-sm font-medium inline-flex items-center gap-2 shrink-0">
        View Role <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  </motion.div>
);

const CATEGORY_ORDER = ['Engineering', 'Business & Operations'];

const groupByCategory = (roles) => {
  const map = {};
  roles.forEach((role) => {
    const cat = role.category || 'Other';
    if (!map[cat]) map[cat] = [];
    map[cat].push(role);
  });
  return CATEGORY_ORDER.map((c) => ({ category: c, roles: map[c] || [] }));
};

const Careers = () => (
  <div className="min-h-screen bg-background pt-[var(--header-height)] pb-20">
    <SEO
      title="Careers"
      description="Join the Orbital Robotics team. We're hiring engineers to build autonomous robotic systems for in-space servicing."
    />
    <div className="container mx-auto px-6">

      {/* Hero */}
      <AnimatedSection className="max-w-3xl mb-16 pt-10">
        <Eyebrow className="mb-4">Careers</Eyebrow>
        <h1 className="text-h1 font-heading text-white mb-5">Build the Infrastructure of the Space Economy</h1>
        <p className="text-xl text-text-secondary">
          We're a small team building the foundation of space robotics with a strong belief that robots will lead humanity's expansion into the solar system.
        </p>
      </AnimatedSection>

      {/* Hiring Philosophy */}
      <AnimatedSection className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-surface rounded-xl border border-white/[0.06] p-8">
            <h2 className="text-h3 font-heading text-white mb-4">Our hiring philosophy</h2>
            <p className="text-text-secondary leading-relaxed">
              We believe a strong fit for Orbital Robotics is more than just your resume. We look for candidates that are low-ego, work well in small teams, and obsessively passionate about the space industry. Also, we don't make you type out your experience.
            </p>
          </div>
          <div className="bg-surface rounded-xl border border-white/[0.06] p-8">
            <h2 className="text-h3 font-heading text-white mb-4">Life at Orbital Robotics</h2>
            <p className="text-text-secondary leading-relaxed">
              We celebrate our wins and failures together as a team while ruthlessly pursuing the greater objective. We recognize the value of each team member and welcome the opportunity to celebrate you as well.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Open Roles */}
      <div className="mb-24">
        <AnimatedSection>
          <h2 className="text-h3 font-heading text-white mb-8 pb-4 border-b border-white/10">Open roles</h2>
        </AnimatedSection>
        {groupByCategory(careersData).map(({ category, roles }) => (
          <div key={category} className="mb-12">
            <AnimatedSection>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-4">{category}</h3>
            </AnimatedSection>
            {roles.length > 0 ? (
              <StaggerContainer className="flex flex-col gap-4">
                {roles.map((role) => (
                  <RoleCard key={role.slug} {...role} />
                ))}
              </StaggerContainer>
            ) : (
              <AnimatedSection>
                <p className="text-text-muted text-sm">No open roles at this time.</p>
              </AnimatedSection>
            )}
          </div>
        ))}

        {/* Don't see your role */}
        <AnimatedSection>
          <h2 className="text-h3 font-heading text-white mb-4 pb-4 border-b border-white/10">Don't see your role?</h2>
          <p className="text-text-secondary text-sm leading-relaxed">
            We're growing fast and open roles change frequently. If you're passionate about space robotics and think you'd be a strong fit, check back often or reach out directly. We'd love to hear from you.
          </p>
        </AnimatedSection>
      </div>


</div>
  </div>
);

export default Careers;
