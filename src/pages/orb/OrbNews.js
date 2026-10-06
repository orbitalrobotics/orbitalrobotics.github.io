import React from 'react';
import { Link } from 'react-router-dom';
import OrbPage from '../../components/orb/OrbPage';
import DividerGlow from '../../components/orb/DividerGlow';
import { ARTICLES } from '../../data/brand';

// News has no frame in the Figma file — only Landing, Navigation, Arm Detail,
// Team, Careers, and Software exist. The landing teaser (MissionLogs.js) uses
// hairline rows, but thirteen of those read as a wall of text, so the full
// list is a 3-up grid of square cards: cover image on the top half, fading
// into the card so the title and blurb sit on it rather than under a hard
// edge. Long summaries are clamped — the full copy is one click away.
//
// Hero follows the shell every other rebuilt detail page uses (OrbArmDetail,
// OrbSoftware): eyebrow, display headline, lead paragraph, divider glow.

// Three articles route to this site's own write-ups; an href without a scheme
// is one of those. Everything else is external coverage and opens in a new tab
// — the same distinction the page this replaces made.
const isInternal = (href) => !/^https?:\/\//.test(href);

// Internal write-ups route in-app; external coverage opens in a new tab.
const ArticleLink = ({ item, className, children }) =>
  isInternal(item.href) ? (
    <Link to={item.href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );

const readLabel = (item) => (isInternal(item.href) ? 'READ MORE →' : 'READ ↗');

const cardClassName =
  'group flex h-full flex-col overflow-hidden rounded-sm border border-white/10 bg-[#0d0d0d] transition-colors hover:border-white/30';

// Most covers are photos and fill the frame; a logo (imageFit: 'contain') is
// shown whole on the card's own background instead of being cropped. The fade
// runs toward wherever the text sits, so the copy reads as part of the image.
const Cover = ({ item, className, fadeClassName }) => (
  <span className={`relative block shrink-0 overflow-hidden ${className}`}>
    <img
      src={item.image}
      alt=""
      loading="lazy"
      className={
        item.imageFit === 'contain'
          ? 'h-full w-full object-contain p-10'
          : 'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
      }
    />
    <span className={`pointer-events-none absolute inset-0 ${fadeClassName}`} />
    <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] truncate rounded-sm bg-black/70 px-2 font-plex text-orb-label uppercase text-orb-text backdrop-blur-sm">
      {item.source}
    </span>
  </span>
);

const ArticleCard = ({ item }) => (
  <li className="sm:aspect-square">
    <ArticleLink item={item} className={cardClassName}>
      <Cover
        item={item}
        className="h-56 sm:h-1/2"
        fadeClassName="bg-gradient-to-b from-transparent from-40% to-[#0d0d0d]"
      />

      <span className="relative -mt-10 flex flex-1 flex-col px-6 pb-6">
        <span className="line-clamp-3 font-sohne text-xl leading-snug text-orb-text transition-colors group-hover:text-orb-accent">
          {item.title}
        </span>
        <span className="mt-3 line-clamp-3 font-sohne text-base leading-relaxed text-orb-text opacity-70">
          {item.summary}
        </span>
        <span className="mt-auto pt-4 font-plex text-orb-label uppercase text-orb-text-4 transition-colors group-hover:text-orb-accent">
          {readLabel(item)}
        </span>
      </span>
    </ArticleLink>
  </li>
);

// The lead featured article. Side by side (cover left, copy right) from md up;
// when two more featured cards sit beside it on lg, it stacks instead and
// spans both of their rows, so the three read as one block.
const LEAD_SPAN = {
  1: 'sm:col-span-2 lg:col-span-3 md:h-[480px]',
  2: 'sm:col-span-2',
  3: 'sm:col-span-2 lg:row-span-2',
};

const LeadCard = ({ item, count }) => {
  const stacked = count === 3;
  return (
    <li className={LEAD_SPAN[count]}>
      <ArticleLink item={item} className={`${cardClassName} md:flex-row ${stacked ? 'lg:flex-col' : ''}`}>
        <Cover
          item={item}
          className={`h-64 md:h-auto md:w-3/5 ${stacked ? 'lg:h-[58%] lg:w-full' : ''}`}
          fadeClassName={`bg-gradient-to-b from-transparent from-40% to-[#0d0d0d] md:bg-gradient-to-r md:from-50% ${
            stacked ? 'lg:bg-gradient-to-b lg:from-40%' : ''
          }`}
        />
  
        <span
          className={`relative -mt-12 flex flex-1 flex-col px-6 pb-6 md:mt-0 md:-ml-16 md:justify-center md:py-10 md:pr-10 ${
            stacked ? 'lg:-mt-16 lg:ml-0 lg:justify-start lg:py-0 lg:pb-8 lg:pl-8' : ''
          }`}
        >
          <span className="font-plex text-orb-label uppercase text-orb-accent">FEATURED</span>
          <span className="mt-3 font-sohne text-orb-lg text-orb-text transition-colors group-hover:text-orb-accent">
            {item.title}
          </span>
          <span className="mt-4 line-clamp-5 font-sohne text-orb-body text-orb-text opacity-70">
            {item.summary}
          </span>
          <span className="mt-6 font-plex text-orb-label uppercase text-orb-text-4 transition-colors group-hover:text-orb-accent">
            {readLabel(item)}
          </span>
        </span>
      </ArticleLink>
    </li>
  );
};

// Up to three articles flagged `featured` (see ARTICLES in brand.js), lowest
// rank first. They are pulled out of the grid below.
const FEATURED = ARTICLES.filter((a) => a.featured)
  .sort((a, b) => a.featured - b.featured)
  .slice(0, 3);
const REST = ARTICLES.filter((a) => !FEATURED.includes(a));

const SectionLabel = ({ children }) => (
  <p className="mb-8 font-plex text-orb-eyebrow uppercase text-orb-accent">{children}</p>
);

const OrbNews = () => (
  <OrbPage>
    <section className="px-6 pb-16 pt-44 md:px-10 md:pt-52">
      <div className="mx-auto max-w-[1362px]">
        <p className="font-plex text-orb-eyebrow uppercase text-orb-accent">MISSION LOG</p>
        {/* Title and lead share a row from lg up, spanning the column. Both
            run 4px under the shared orb-display / orb-lead tokens on this page
            only, so the pair fits side by side. */}
        <div className="mt-6 flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <h1
            className="shrink-0 font-sohne font-normal text-orb-display text-orb-text"
            style={{ fontSize: 'calc(clamp(3rem, 7.91vw, 7.119rem) - 4px)' }}
          >
            News
          </h1>
          <p
            className="max-w-[720px] font-sohne text-orb-lead text-orb-text lg:max-w-none lg:flex-1 lg:text-right"
            style={{ fontSize: 'calc(clamp(1.5rem, 2.92vw, 2.625rem) - 4px)' }}
          >
            Milestones, partnerships, media coverage, and more.
          </p>
        </div>
      </div>
    </section>

    <DividerGlow />

    {FEATURED.length > 0 && (
      <section className="px-6 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-[1362px]">
          <SectionLabel>FEATURED</SectionLabel>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <LeadCard item={FEATURED[0]} count={FEATURED.length} />
            {FEATURED.slice(1).map((item) => (
              <ArticleCard key={item.index} item={item} />
            ))}
          </ul>
        </div>
      </section>
    )}

    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1362px]">
        {FEATURED.length > 0 && <SectionLabel>ALL ARTICLES</SectionLabel>}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REST.map((item) => (
            <ArticleCard key={item.index} item={item} />
          ))}
        </ul>
      </div>
    </section>
  </OrbPage>
);

export default OrbNews;
