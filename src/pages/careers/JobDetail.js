import React, { useEffect } from 'react';
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import AnimatedSection from '../../components/motion/AnimatedSection';
import { Eyebrow, Badge } from '../../components/ui';
import careersData from '../../data/careersData';

const JobDetail = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const job = careersData.find((j) => j.slug === role);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data?.event === 'Tally.FormSubmitted') {
        navigate('/careers/thankyou');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);

  useEffect(() => {
    if (!job) return;
    const TALLY_SCRIPT = 'https://tally.so/widgets/embed.js';
    const loadEmbeds = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((el) => {
          el.src = el.dataset.tallySrc;
        });
      }
    };
    if (typeof window.Tally !== 'undefined') {
      loadEmbeds();
    } else if (!document.querySelector(`script[src="${TALLY_SCRIPT}"]`)) {
      const s = document.createElement('script');
      s.src = TALLY_SCRIPT;
      s.onload = loadEmbeds;
      s.onerror = loadEmbeds;
      document.body.appendChild(s);
    } else {
      loadEmbeds();
    }
  }, [job]);

  if (!job) return <Navigate to="/careers" replace />;

  const { title, department, location, type, salary, overview, responsibilities, requirements, tallyEmbedSrc } = job;

  return (
    <div className="min-h-screen bg-background pt-[var(--header-height)]">
      <SEO
        title={title}
        description={`${title} at Orbital Robotics — ${location}, ${type}.`}
      />

      {/* Dark content section */}
      <div className="container mx-auto px-6 max-w-3xl pb-20">

        {/* Back link */}
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm mt-6 mb-8"
        >
          ← Back to Careers
        </Link>

        {/* Header */}
        <AnimatedSection className="mb-12">
          <Eyebrow className="mb-3">{department}</Eyebrow>
          <h1 className="text-h1 font-heading text-white mb-4">{title}</h1>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="ember">{type}</Badge>
            {salary && <span className="text-text-muted text-sm">{salary}</span>}
            <span className="text-text-muted text-sm">·</span>
            <span className="text-text-muted text-sm">{location}</span>
          </div>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection className="mb-10">
          <h2 className="text-h3 font-heading text-white mb-4 pb-4 border-b border-white/10">Overview</h2>
          <p className="text-text-secondary leading-relaxed">{overview}</p>
        </AnimatedSection>

        {/* Responsibilities */}
        <AnimatedSection className="mb-10">
          <h2 className="text-h3 font-heading text-white mb-4 pb-4 border-b border-white/10">Responsibilities</h2>
          <ul className="space-y-3">
            {responsibilities.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                <span className="text-primary mt-0.5 shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Requirements */}
        <AnimatedSection>
          <h2 className="text-h3 font-heading text-white mb-4 pb-4 border-b border-white/10">Requirements</h2>
          <ul className="space-y-3">
            {requirements.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                <span className="text-primary mt-0.5 shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </AnimatedSection>

      </div>

      {/* Gradient bridge from dark → light */}
      <div className="h-48 bg-gradient-to-b from-background to-neutral-200" />

      {/* Full-bleed light section for the Tally form */}
      <div className="bg-neutral-200">
        <AnimatedSection>
          <div className="container mx-auto px-6 max-w-3xl pt-32 pb-24">
            <h2 className="text-h3 font-heading text-gray-900 mb-2">Apply for this role</h2>
            <p className="text-gray-500 text-sm mb-8">{title} · {location} · {type}</p>
            <iframe
              data-tally-src={tallyEmbedSrc}
              loading="lazy"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              title={title}
              style={{ display: 'block', overflow: 'hidden' }}
            />
          </div>
        </AnimatedSection>
      </div>

    </div>
  );
};

export default JobDetail;
