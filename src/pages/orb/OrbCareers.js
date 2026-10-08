import React, { useCallback, useRef } from 'react';
import OrbPage from '../../components/orb/OrbPage';
import OrbButton from '../../components/orb/OrbButton';
import DividerGlow from '../../components/orb/DividerGlow';
import AshbyJobBoard, { useAshbyOpenJob } from '../../components/orb/AshbyJobBoard';
import LifeAtOrbital from '../../assets/orb/careers/life-at-orbital.jpg';

// Figma "Careers" (369:1234). Display headline, accent divider, two alternating
// copy/circular-image blocks, then Open Roles.
//
// The circular images are the design's own: node 369:1541 ("Ellipse 18", the
// mask sitting beside the "Our Hiring Philosophy" text frame 369:1297) and node
// 369:1542 ("Ellipse 19", beside "Life at Orbital Robotics" 369:1302) — a
// prior pass used generic Earth-limb/nebula stock photos here as stand-ins
// while the real assets were unconfirmed; these are the real ones.
//
// Open Roles is Ashby's hosted job board (AshbyJobBoard) rather than rows
// built from local data — listings, role pages, and applications are all
// managed in Ashby, so posting or closing a role needs no site change.

const CtaBlock = () => (
  <section className="relative overflow-hidden bg-orb-cta px-6 py-28 md:px-10 md:py-36">
    <div className="mx-auto flex max-w-[721px] flex-col items-center gap-6 text-center">
      <p className="font-plex text-orb-eyebrow uppercase text-orb-accent">THE PILOTS</p>
      <h2 className="font-sohne font-normal text-orb-h2 text-orb-text">
        Don&rsquo;t see your role?
      </h2>
      <p className="font-sohne text-orb-body text-orb-text opacity-70">
        We&rsquo;re growing fast and open roles change frequently. If you&rsquo;re passionate about
        space robotics and think you&rsquo;d be a strong fit, check back often or reach out directly.
        We&rsquo;d love to hear from you.
      </p>
      <div className="mt-2">
        <OrbButton to="/contact">CONTACT</OrbButton>
      </div>
    </div>
  </section>
);

const Block = ({ title, body, image, alt, flip = false }) => (
  <div
    className={`grid items-center gap-12 lg:grid-cols-2 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}
  >
    <div>
      <h2 className="font-sohne font-normal text-orb-h2 text-orb-text">{title}</h2>
      <p className="mt-7 max-w-[631px] font-sohne text-orb-body text-orb-text opacity-70">{body}</p>
    </div>
    {image && (
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="mx-auto aspect-square w-full max-w-[528px] rounded-full object-cover"
      />
    )}
  </div>
);

const OrbCareers = () => {
  // While a role is open inside the board, the "Open Roles" heading steps
  // aside so Ashby's own role title is the page's title. Every move inside the
  // board (open, back to all jobs, apply) brings the column back into view.
  const columnRef = useRef(null);
  const scrollToBoard = useCallback(() => {
    const el = columnRef.current;
    if (!el) return;
    // Lenis (SmoothScroll.js) owns window scrolling when it's running.
    if (window.lenis) window.lenis.scrollTo(el, { offset: -128, immediate: true });
    else el.scrollIntoView({ block: 'start' });
  }, []);
  const openJobId = useAshbyOpenJob(scrollToBoard);

  return (
    <OrbPage cta={<CtaBlock />}>
      <section className="px-6 pb-20 pt-44 md:px-10 md:pt-52">
        <div className="mx-auto max-w-[1362px]">
          <h1 className="max-w-[1140px] font-sohne font-normal text-orb-display text-orb-text">
            Build the Infrastructure of the Space Economy
          </h1>
        </div>
      </section>

      <DividerGlow />

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto flex max-w-[1362px] flex-col gap-28">
          <Block
            title="Our Hiring Philosophy"
            body="We believe a strong fit for Orbital Robotics is more than just your resume. We look for obsessive, low-ego candidates that work well in small teams and are deeply passionate about the space industry. Also, we don't make you type out your experience."
          />
          <Block
            title="Life at Orbital Robotics"
            body="We celebrate our wins and failures together as a team while ruthlessly pursuing the greater objective. We recognize the individual value of each team member and welcome the opportunity to celebrate you as well."
            image={LifeAtOrbital}
            alt=""
            flip
          />
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10">
        {/* A narrower centered column than the sections above: the board
            stretches its filters to the iframe's full width, which read too
            wide at 1362px. Heading and board share the column so they stay
            aligned. No frame of our own — Ashby's custom CSS styles the inside. */}
        <div ref={columnRef} className="mx-auto max-w-[1000px] scroll-mt-32">
          {!openJobId && (
            <h2 className="mb-12 font-sohne font-normal text-orb-h2 text-orb-text">Open Roles</h2>
          )}

          <AshbyJobBoard />
        </div>
      </section>
    </OrbPage>
  );
};

export default OrbCareers;
