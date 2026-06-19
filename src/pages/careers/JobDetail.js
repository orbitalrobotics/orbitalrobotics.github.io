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

  const { title, department, location, type, salary, overview, responsibilities, requirements, preferredQualifications, tallyEmbedSrc } = job;

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
        <AnimatedSection className="mb-10">
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

        {/* Preferred Qualifications */}
        {preferredQualifications && (
          <AnimatedSection className="mb-10">
            <h2 className="text-h3 font-heading text-white mb-4 pb-4 border-b border-white/10">Preferred Qualifications</h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              We are looking for candidates who have deep experience in one or more of the following areas:
            </p>
            <div className="space-y-8">
              {preferredQualifications.map((group) => (
                <div key={group.category}>
                  <h3 className="text-white font-heading font-semibold text-base mb-3">{group.category}</h3>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item.title} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                        <span className="text-primary mt-0.5 shrink-0">—</span>
                        <span><span className="text-white font-medium">{item.title}:</span> {item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Compensation */}
        <AnimatedSection className="mb-10">
          <h2 className="text-h3 font-heading text-white mb-4 pb-4 border-b border-white/10">Compensation</h2>
          {salary && <p className="text-text-secondary text-sm leading-relaxed mb-3">{salary}</p>}
          <p className="text-text-secondary text-sm leading-relaxed">
            Compensation includes equity in the form of company stock / stock options, benefits, and paid time off.
          </p>
        </AnimatedSection>

        {/* ITAR */}
        <AnimatedSection>
          <h2 className="text-h3 font-heading text-white mb-4 pb-4 border-b border-white/10">ITAR Requirements</h2>
          <p className="text-text-secondary text-sm leading-relaxed">
            To conform to U.S. Government export regulations, applicant must be a (i) U.S. citizen or national, (ii) U.S. lawful, permanent resident (aka green card holder), (iii) Refugee under 8 U.S.C. § 1157, or (iv) Asylee under 8 U.S.C. § 1158, or be eligible to obtain the required authorizations from the U.S. Department of State.
          </p>
        </AnimatedSection>

      </div>

      {/* Apply / Tally Form */}
      <div className="container mx-auto px-6 max-w-3xl pb-20">
        <AnimatedSection>
          <h2 className="text-h3 font-heading text-white mb-8 pb-4 border-b border-white/10">Apply for this role</h2>
          <iframe
            data-tally-src={tallyEmbedSrc}
            loading="lazy"
            width="100%"
            height="1175"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            title={title}
            style={{ display: 'block', overflow: 'hidden' }}
          />
        </AnimatedSection>
      </div>

    </div>
  );
};

export default JobDetail;
