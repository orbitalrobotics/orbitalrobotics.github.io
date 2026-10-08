// Single source of truth for product names, people, roles, and site IA.
//
// Copy and spellings here are taken from the live site
// (orbitalrobotics.github.io @ 529e5ed), NOT from the Figma redesign file — the
// Figma has several naming errors. Layout/visuals come from Figma; wording comes
// from here. See tasks/figma-design-spec.md §7 for the full reconciliation.
//
// Casing matters: Flight Software Suite and NavIQ are mixed-case product names. Where the
// design shows them shouting, that must be a CSS text-transform on the element,
// never uppercase baked into these strings.

import AaronImg from '../assets/headshots/Aaron_Borger_2026.jpg';
import RileyImg from '../assets/headshots/Riley_Mark_2026.jpg';
import SohilImg from '../assets/headshots/Sohil_Pokharna_2026.jpg';
import WillImg from '../assets/headshots/William_Liu_2026.jpg';
import GordonImg from '../assets/headshots/Gordon-dp.jpg';
import DougImg from '../assets/headshots/Doug.jpg';
import EricFeltImg from '../assets/headshots/EricFelt.jpg';
import ChrisImg from '../assets/headshots/Christopher_Sembroski.jpg';
import TolgaImg from '../assets/headshots/Tolga_Ors.jpeg';
import TaylorImg from '../assets/headshots/TaylorBanks.jpeg';
import AstrosferaArm from '../assets/orb/arms/ora-astrosfera.webp';
import MiniArm from '../assets/orb/arms/ora-mini.webp';
import GigaArm from '../assets/orb/arms/ora-giga.webp';
import GeekWireISSPreview from '../assets/images/news/geekwire_iss_preview.jpg';
import BlackFlag100Preview from '../assets/images/news/blackflag_100_preview.jpg';
import SophiaSpacePreview from '../assets/images/news/sophia_orbital_robotics_announcement.png';
import UWTalkPreview from '../assets/images/news/uw_talk_preview.png';
import SaveHubblePreview from '../assets/images/news/save_hubble_preview.png';
import GeekWire2026Preview from '../assets/images/news/geekwire_2026_preview.png';
import AerospaceCorpPreview from '../assets/images/news/aerospace_corp_preview.png';
import CompanyLaunchTrackerPreview from '../assets/images/news/company_launch_tracker_preview.png';
import StarcloudPreview from '../assets/images/partners/StarCloud_White.png';
import TechCrunchPreview from '../assets/images/news/techcrunch_original.jpg';
import GeekWirePreview from '../assets/images/news/geekwire_preview.png';
import SpaceOceanPreview from '../assets/images/news/space_ocean_preview.png';
import BeyondMaxQPreview from '../assets/images/news/youtube_preview.png';
import SpaceDirtPreview from '../assets/images/news/space_dirt_preview.png';

// --- Company -----------------------------------------------------------------

export const COMPANY = {
  name: 'Orbital Robotics',
  tagline: 'Autonomous robotic arms for in-space capture, servicing, and assembly.',
  email: 'info@orbital-robots.com',
  linkedin: 'https://www.linkedin.com/company/orbital-robotics-corp/',
  hq: 'Seattle, Washington',
  // Footer sets this as "SEATTLE — 47.6062 N, 122.3321W" with the coords in accent.
  hqShort: 'SEATTLE',
  hqCoords: '47.6062 N, 122.3321W',
};

// --- Products ----------------------------------------------------------------
// The three arms share one architecture, control software, and perception stack.

export const ARMS = [
  {
    id: 'ora-astrosfera',
    name: 'ORA-Astrosfera',
    image: AstrosferaArm,
    eyebrow: 'FLAGSHIP',
    blurb: 'The 7-DOF flight arm. Radiation-tolerant and mission-customizable.',
  },
  {
    id: 'ora-mini',
    name: 'ORA-Mini',
    image: MiniArm,
    eyebrow: 'COMPACT',
    blurb:
      'Sized for CubeSat-class missions. Dual-arm configuration designed to fit a 12U CubeSat; single-arm configuration designed to fit a 6U CubeSat.',
  },
  {
    id: 'ora-giga',
    name: 'ORA-Giga',
    image: GigaArm,
    eyebrow: 'HEAVY-LIFT',
    blurb:
      'Sized for large-structure assembly, station servicing, and high-mass capture operations. Inherits the ORA-Astrosfera architecture and control software.',
  },
];

export const SOFTWARE = [
  {
    id: 'Flight Software',
    name: 'Flight Software Suite',
    blurb: 'Complete system for flight and arm control in space',
    long:
      'Our Flight Software Suite runs NavIQ (perception) and ASTRA-P (autonomous guidance and control) as native modules, letting any spacecraft bus run the full Orbital Robotics autonomous stack with minimal integration.',
  },
  {
    id: 'naviq',
    name: 'NavIQ',
    blurb: 'Vision and perception',
    long:
      'NavIQ is our perception layer. It generates real-time position, orientation, and velocity estimates of non-cooperative space objects, with no CAD models, fiducial markers, or prior imagery required. Feeds its state estimate into ASTRA-P for autonomous capture.',
  },
  {
    id: 'astrap',
    name: 'ASTRA-P',
    blurb: 'Autonomous movement + control',
    long:
      'ASTRA-P is our guidance and control layer. Given a state estimate from NavIQ, it plans and executes precise approach and capture maneuvers against unprepared satellites and debris. Stability is mathematically verified via Lyapunov analysis and validated across thousands of randomized Monte Carlo scenarios.',
  },
];

// Ships on the live site with its own product page, but appears nowhere in the
// Figma nav or footer. Kept here so it is a deliberate product decision to drop
// it rather than an oversight in the redesign.
export const ASTROBOT = {
  id: 'astrobot',
  name: 'AstroBot',
  blurb: 'Autonomous free-flying vehicle for in-space refueling.',
};

// --- Stats -------------------------------------------------------------------
// Live site animates these counters. The Figma omits the first value entirely
// and labels it two different ways ("Arms Tested" / "Arms Flight Tested").

export const STATS = [
  { value: 6, label: 'Arms Launched to Space' },
  { value: 10, suffix: '+', label: 'Industry Partners' },
];

// --- People ------------------------------------------------------------------
// Figma errors corrected here: "Aaron Borgor" -> "Aaron (Cyborg) Borger";
// Roesler mis-tagged "Ex-Blue Origin" -> "Ex–DARPA". The design's duplicated
// second "Christopher Sembroski" row stands in for Tolga Ors, who sits in that
// slot on the live site; the duplicate is a Figma error, Ors is a real advisor.

export const CREW = [
  {
    name: 'Aaron (Cyborg) Borger',
    role: 'Co-Founder & CEO',
    image: AaronImg,
    photoScale: 1.22,
    credentials: ['Ex–Blue Origin', 'BE-7 Lead'],
    bio:
      "Leads AI and robotics for autonomous satellite servicing. Formerly lead software engineer for Blue Origin's BE-7 lunar lander engine, where he led 25 engineers. PhD researcher in aerospace dynamics & controls for the Space Force's SSTI-2 satellite servicing program, with a provisional patent in autonomous satellite servicing.",
    linkedin: 'https://www.linkedin.com/in/aaron-borger/',
    email: 'aborger@orbital-robots.com',
  },
  {
    name: 'Riley Mark',
    role: 'Co-Founder & Lead Hardware Engineer',
    image: RileyImg,
    photoScale: 1.15,
    credentials: ['NASA Payloads', 'MDA'],
    bio:
      'Riley leads hardware development efforts including robotic arms, flight electronics, and sensor payloads for on-orbit servicing. He has previously led the full electrical design and integration of a flight-qualified optical detection satellite for Missile Defense Agency test missions and designed embedded biomedical devices at Nou Systems.\n\nHe has additionally flown multiple NASA sub-orbital payloads demonstrating robotic capture with dual 7-axis arms and holds an active U.S. Secret Clearance.',
    linkedin: 'https://www.linkedin.com/in/riley-mark/',
    email: 'rmark@orbital-robots.com',
  },
  {
    name: 'Sohil Pokharna',
    role: 'Co-Founder & Lead Software Engineer',
    image: SohilImg,
    photoScale: 1.15,
    credentials: ['Ex–Blue Origin', 'AI Lead'],
    bio:
      "Leads flight software, robotic arm control, and the AI/ML systems behind Orbital Robotics' autonomous in-space operations. Previously the single-threaded leader for AI within Engine Avionics Software at Blue Origin, building diagnostics, test automation, and data analysis across rocket engine programs.",
    linkedin: 'https://www.linkedin.com/in/sohil-pokharna/',
    email: 'spokharna@orbital-robots.com',
  },
  {
    name: 'William Liu',
    role: 'Chief of Staff',
    image: WillImg,
    photoScale: 1.22,
    credentials: ['Operations', 'Strategy'],
    bio:
      'William holds a combination background in finance, software, aerospace, and small-team startups. He manages all administrative verticals for Orbital Robotics including finance, strategy, and business development.',
    linkedin: 'https://www.linkedin.com/in/liu-william/',
    email: 'wliu@orbital-robots.com',
  },
];

export const ADVISORS = [
  {
    name: 'Christopher Sembroski',
    role: 'Advisor',
    image: ChrisImg,
    credentials: ['Astronaut', 'Inspiration4'],
    bio:
      "Commercial astronaut and mission specialist on SpaceX's Inspiration4, the first all-civilian orbital mission. Former Blue Origin avionics engineer and adjunct faculty at Embry-Riddle Aeronautical University.",
    linkedin: 'https://www.linkedin.com/in/chris-sembroski/',
  },
  {
    name: 'Eric Felt',
    role: 'Advisor',
    image: EricFeltImg,
    credentials: ['Ex–AFRL Director'],
    bio:
      'Former Director of the U.S. Air Force Research Laboratory (AFRL), where he led R&D advancing national security and space technology into mission-ready capabilities.',
    linkedin: 'https://www.linkedin.com/in/eric-felt/',
  },
  {
    name: 'Dr. Gordon Roesler',
    role: 'Advisor',
    image: GordonImg,
    credentials: ['Ex–DARPA', 'RSGS PM'],
    bio:
      'Former DARPA Program Manager for the Robotic Servicing of Geosynchronous Satellites (RSGS) program and founder of Robots in Space LLC. Two decades advancing in-orbit servicing and autonomy across government, academia, and industry.',
    linkedin: 'https://www.linkedin.com/in/gordon-roesler-8b0a646/',
  },
  {
    name: 'Tolga Ors',
    role: 'Advisor',
    image: TolgaImg,
    credentials: ['Satcom', 'PhD'],
    bio:
      'Space systems strategist with 25+ years in satellite communications, AI, and robotics across Intelsat, Inmarsat, OneWeb, and AST SpaceMobile. PhD in Satellite Communications, University of Surrey.',
    linkedin: 'https://www.linkedin.com/in/tolgaors/',
  },
  {
    name: 'Taylor Banks',
    role: 'Advisor',
    image: TaylorImg,
    credentials: ['Ex–Blue Origin', 'CFO'],
    bio:
      'Aerospace finance and accounting executive. Former CFO of Systima, leading its acquisition by Karman Space & Defense. Former Blue Origin finance and financial advisor for Relativity Space.',
    linkedin: 'https://www.linkedin.com/in/taylor-banks/',
  },
  {
    name: 'Doug Kohl',
    role: 'Advisor',
    image: DougImg,
    credentials: ['NASA', 'Blue Origin', '40+ yrs'],
    bio:
      'Aerospace operations veteran with 40+ years of experience (Space Shuttle to lunar systems). Led mission-critical operations for NASA and Blue Origin, specializing in human-rated spacecraft recovery and readiness.',
    linkedin: 'https://www.linkedin.com/in/doug-kohl-865553b/',
  },
];

// --- Navigation --------------------------------------------------------------
// The Figma mega-menu is a new IA; the live site's top nav is flat
// (Products / Team / Careers / News). Routes below point at the routes that
// exist today in App.js so the new chrome is wired, not decorative.

export const NAV_COLUMNS = [
  {
    heading: 'SOFTWARE',
    items: [
      { label: 'Flight Suite', href: '/products/satellite-os', blurb: SOFTWARE[0].blurb },
    ],
  },
  {
    heading: 'HARDWARE',
    // The arms — the Figma footer wrongly lists ASTRA-P and NavIQ here.
    // ORA itself is the parent link (top of the page); each variant is its own
    // in-page anchor (OrbArmDetail.js gives each ArmBlock's copy an id={a.id}),
    // so picking "ORA-Mini" from the nav lands directly on that section instead
    // of just the top of the page.
    parent: { label: 'ORA', href: '/products/robotic-arms' },
    items: ARMS.map((a) => ({ label: a.name, href: `/products/robotic-arms#${a.id}` })),
  },
  {
    heading: 'COMPANY',
    items: [
      { label: 'News', href: '/news' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
    ],
  },
];

// Footer columns, with the HARDWARE/SOFTWARE split corrected.
// SOFTWARE and HARDWARE mirror the nav's own groupings exactly — sourced from
// NAV_COLUMNS rather than redefined, so the two can't drift again. They already
// had: footer SOFTWARE listed all three of Flight Suite/ASTRA-P/NavIQ where the nav
// links only the Flight Suite hub page, and footer HARDWARE carried an AstroBot row
// the nav never had. COMPANY is the one column the footer legitimately extends
// past the nav, with Contact — present on the live site, absent from Figma's nav.
export const FOOTER_COLUMNS = [
  NAV_COLUMNS[0],
  NAV_COLUMNS[1],
  {
    heading: 'COMPANY',
    items: [...NAV_COLUMNS[2].items, { label: 'Contact', href: '/contact' }],
  },
];

// --- Mission log -------------------------------------------------------------
// The landing page's three "latest mission logs". Titles and outlets come from
// the live News page. The Figma renders "AI" as "Al" in two of these and drops
// the space in "Black Flag 100(2026)".

export const MISSION_LOG = [
  {
    index: '01',
    title: 'Orbital Robotics named to the Black Flag 100 (2026)',
    source: 'BLACK FLAG',
    href: 'https://www.blackflag.vc/100-2#company-orbital-robotics',
  },
  {
    index: '02',
    title: 'Exploratory collaboration on on-orbit AI compute and robotic manufacturing',
    source: 'SOPHIA SPACE',
    href: 'https://sophia.space/news/sophia-space-and-orbital-robotics-announce-exploratory-collaboration-on-on-orbit-ai-compute-and-robotic-manufacturing-concepts',
  },
  {
    index: '03',
    title: 'Orbital Robotics reaches out with a plan for robotic arms that use AI',
    source: 'GEEKWIRE',
    href: 'https://www.geekwire.com/2026/orbital-robotics-space-robotic-arms-ai/',
  },
];

// Full mission log — the News page. MISSION_LOG above is a 3-item teaser with
// its own shortened titles (landing page copy, already verified against Figma);
// this is the complete list, titles and summaries taken from the pre-redesign
// News page rather than shortened. Three entries route to this site's own
// write-ups (still pre-redesign pages at /news/*); the rest are external
// coverage and open in a new tab — OrbNews tells them apart the same way the
// page it replaces did, by whether href starts with a scheme.
//
// featured: 1-3 pins an article to the Featured block at the top of the News
// page, in that order (lowest first). Only the top three are shown; featured
// articles are left out of the grid below so nothing appears twice.
export const ARTICLES = [
  {
    index: '01',
    title: "Orbital Robotics gets set to send up a pair of arms for International Space Station's robots",
    summary:
      "A free-flying NASA Astrobee aboard the ISS will demonstrate satellite capture and servicing using a pair of autonomous robotic arms built by Orbital Robotics. Astronauts will install the arms in orbit, and the equipped Astrobee will capture a second Astrobee and swap out its compute module — three demonstrations, about a month apart, targeted for Q3 2027.",
    source: 'GEEKWIRE',
    href: 'https://www.geekwire.com/2026/orbital-robotics-arms-international-space-station/',
    image: GeekWireISSPreview,
    featured: 1,
  },
  {
    index: '02',
    title: 'Orbital Robotics named to the Black Flag 100 (2026)',
    summary:
      'Black Flag\'s annual ranking of the 100 early-stage deep tech companies founders are most excited about: "Orbital Robotics builds AI-powered robotic arms that autonomously capture and service spacecraft in orbit. Its deep reinforcement learning engine solves the dynamic coupling problem, positioning it at the intersection of commercial satellite growth and rising government demand for autonomous on-orbit servicing." Compiled from over 500 founder nominations across 1,500+ companies.',
    source: 'BLACK FLAG VC',
    href: 'https://www.blackflag.vc/100-2#company-orbital-robotics',
    image: BlackFlag100Preview,
  },
  {
    index: '03',
    title:
      'Sophia Space and Orbital Robotics announce exploratory collaboration on on-orbit AI compute and robotic manufacturing concepts',
    summary:
      'Sophia Space and Orbital Robotics announce an exploratory collaboration to combine on-orbit AI compute capabilities with robotic manufacturing, advancing the future of autonomous space infrastructure.',
    source: 'SOPHIA SPACE',
    href: 'https://sophia.space/news/sophia-space-and-orbital-robotics-announce-exploratory-collaboration-on-on-orbit-ai-compute-and-robotic-manufacturing-concepts',
    image: SophiaSpacePreview,
  },
  {
    index: '04',
    title: '2026 Winter Robotics Colloquium: Aaron Borger (Orbital Robotics)',
    summary:
      "Aaron Borger presents 'Orbital Robotics: AI, Robotics, and Autonomy for Orbital Logistics' at the UW Paul G. Allen School of Computer Science & Engineering's Winter 2026 Robotics Colloquium.",
    source: 'UW ALLEN SCHOOL (YOUTUBE)',
    href: 'https://www.youtube.com/watch?v=6QD3XKtB4xE',
    image: UWTalkPreview,
  },
  {
    index: '05',
    title: 'Save Hubble Coalition',
    summary:
      "Join the Save Hubble Coalition — a collaborative effort to preserve one of humanity's greatest scientific achievements through innovative on-orbit servicing technology.",
    source: 'ORBITAL ROBOTICS',
    href: '/news/save-hubble',
    image: SaveHubblePreview,
  },
  {
    index: '06',
    title: 'Orbital Robotics reaches out with a plan for robotic arms that use AI',
    summary:
      "GeekWire covers Orbital Robotics' mission to develop AI-powered robotic arms for space. CEO Aaron Borger discusses partnerships with the U.S. Space Force and plans to service the Hubble Space Telescope.",
    source: 'GEEKWIRE',
    href: 'https://www.geekwire.com/2026/orbital-robotics-space-robotic-arms-ai/',
    image: GeekWire2026Preview,
  },
  {
    index: '07',
    title: 'Startup Showcase: Orbital Robotics',
    summary:
      "The Aerospace Corporation features Orbital Robotics in their startup showcase, highlighting the company's autonomous robotic arm and perception system for on-orbit refueling and repair, powered by their deep reinforcement learning algorithm.",
    source: 'THE AEROSPACE CORPORATION',
    href: 'https://aerospace.org/kickstage/startup-showcase-orbital-robotics',
    image: AerospaceCorpPreview,
  },
  {
    index: '08',
    title: 'Company Launch Tracker: Orbital Robotics',
    summary:
      'Company Launch Tracker profiles Orbital Robotics, featuring CEO Aaron Borger and our mission to build AI-controlled space robots for national security, space construction, and off-world resource gathering.',
    source: 'COMPANY LAUNCH TRACKER',
    href: 'https://companylaunchtracker.substack.com/p/company-launch-tracker-37',
    image: CompanyLaunchTrackerPreview,
  },
  {
    index: '09',
    title: 'Orbital Robotics partners with Starcloud on space-based AI',
    summary:
      'Orbital Robotics signs an LOI with Starcloud to partner on space-based AI. The partnership aims to provide AI-controlled robotic arms to aid with assembling, docking, maintaining, and upgrading datacenter modules.',
    source: 'ORBITAL ROBOTICS',
    href: '/news/starcloud-partnership',
    image: StarcloudPreview,
    imageFit: 'contain',
  },
  {
    index: '10',
    title: 'Orbital Robotics at TechCrunch Disrupt 2025',
    summary:
      'Orbital Robotics pitches at TechCrunch Disrupt 2025, showcasing AI solutions for space infrastructure. Watch the full pitch and learn more about our vision for the future of space.',
    source: 'ORBITAL ROBOTICS',
    href: '/news/techcrunch-disrupt',
    image: TechCrunchPreview,
  },
  {
    index: '11',
    title: "Startup Radar: it's all about AI for early-stage Seattle companies",
    summary:
      "GeekWire highlights our work in AI for space robotics and how we're shaping the future of autonomous servicing in orbit.",
    source: 'GEEKWIRE',
    href: 'https://www.geekwire.com/2025/startup-radar-its-all-about-ai-for-early-stage-seattle-companies-in-space-storytelling-supply-chain/',
    image: GeekWirePreview,
  },
  {
    index: '12',
    title: 'Space Ocean and Orbital Robotics team up on in-space robotics',
    summary:
      'Space Ocean signs an LOI with Orbital Robotics to explore integration of robotic arms and autonomous docking systems for future orbital servicing and infrastructure missions.',
    source: 'SPACE OCEAN',
    href: 'https://spaceoceancorp.com/news/space-ocean-orbital-robotics-loi-robotic-integration',
    image: SpaceOceanPreview,
  },
  {
    index: '13',
    title: 'Beyond Max Q: AI and space robotics with Orbital Robotics',
    summary:
      'Host Mollie Jahner and co-host Anne Bly interview Aaron Borger, CEO of Orbital Robotics, on AI in space robotics, safety challenges, startup funding strategies, and demonstrating technology in orbit before securing customer contracts.',
    source: 'BEYOND MAX Q (YOUTUBE)',
    href: 'https://www.youtube.com/watch?v=G3wcdS66wgU',
    image: BeyondMaxQPreview,
  },
  {
    index: '14',
    title: 'Space Dirt: Orbital Robotics builds the next generation of autonomous rendezvous tech',
    summary:
      "Space Dirt highlights Orbital Robotics for its work in developing autonomous rendezvous, proximity operations, and capture (RPOC) systems, key for on-orbit servicing, refueling, relocation, and debris removal. CEO Aaron Borger notes the company's mission to enable high mobility and sustainable orbital operations.",
    source: 'SPACE DIRT NEWSLETTER',
    href: 'https://spacedirt.beehiiv.com/p/october-s-space-dirt-month-end',
    image: SpaceDirtPreview,
  },
];

// --- Shared calls to action --------------------------------------------------

export const CTA = {
  eyebrow: 'FIRST CONTACT',
  headline: 'Have a target in orbit?',
  button: 'BOOK A CAPTURE DEMO',
  href: '/contact',
};
