import React from 'react';
import SEO from '../components/SEO';
import GeekWirePreview from '../assets/images/news/geekwire_preview.png';
import GeekWire2026Preview from '../assets/images/news/geekwire_2026_preview.png';
import SpaceOceanPreview from '../assets/images/news/space_ocean_preview.png';
import YoutubePreview from '../assets/images/news/youtube_preview.png';
import SpaceDirtPreview from '../assets/images/news/space_dirt_preview.png';
import StarcloudPreview from '../assets/images/partners/StarCloud_White.png';
import TechCrunchPreview from '../assets/images/news/techcrunch_original.jpg';
import AerospaceCorpPreview from '../assets/images/news/aerospace_corp_preview.png';
import CompanyLaunchTrackerPreview from '../assets/images/news/company_launch_tracker_preview.png';
import SaveHubblePreview from '../assets/images/news/save_hubble_preview.png';

const News = () => {
  const newsItems = [
    {
      title: "Save Hubble Coalition",
      summary: "Join the Save Hubble Coalition - A collaborative effort to preserve one of humanity's greatest scientific achievements through innovative on-orbit servicing technology.",
      link: "/#/news/save-hubble",
      source: "Orbital Robotics",
      image: SaveHubblePreview
    },
    {
      title: "Orbital Robotics reaches out with a plan for robotic arms that use AI",
      summary: "GeekWire covers Orbital Robotics' mission to develop AI-powered robotic arms for space. CEO Aaron Borger discusses partnerships with the U.S. Space Force and plans to service the Hubble Space Telescope.",
      link: "https://www.geekwire.com/2026/orbital-robotics-space-robotic-arms-ai/",
      source: "GeekWire",
      image: GeekWire2026Preview
    },
    {
      title: "Startup Showcase: Orbital Robotics",
      summary: "The Aerospace Corporation features Orbital Robotics in their startup showcase, highlighting the company's autonomous robotic arm and perception system for on-orbit refueling and repair, powered by their deep reinforcement learning algorithm.",
      link: "https://aerospace.org/kickstage/startup-showcase-orbital-robotics",
      source: "The Aerospace Corporation",
      image: AerospaceCorpPreview
    },
    {
      title: "Company Launch Tracker: Orbital Robotics",
      summary: "Company Launch Tracker profiles Orbital Robotics, featuring CEO Aaron Borger and our mission to build AI-controlled space robots for national security, space construction, and off-world resource gathering.",
      link: "https://companylaunchtracker.substack.com/p/company-launch-tracker-37",
      source: "Company Launch Tracker",
      image: CompanyLaunchTrackerPreview
    },
    {
      title: "Orbital Robotics Partners with Starcloud on Space-Based AI",
      summary: "Orbital Robotics signs an LOI with Starcloud to partner on space-based AI. The partnership aims to provide AI controlled robotic arms to aid with assembling, docking, maintaining and upgrading datacenter modules.",
      link: "/#/news/starcloud-partnership",
      source: "Orbital Robotics Blog",
      image: StarcloudPreview
    },
    {
      title: "Orbital Robotics at TechCrunch Disrupt 2025",
      summary: "Orbital Robotics pitches at TechCrunch Disrupt 2025, showcasing AI solutions for space infrastructure. Watch the full pitch and learn more about our vision for the future of space.",
      link: "/#/news/techcrunch-disrupt",
      source: "TechCrunch Disrupt",
      image: TechCrunchPreview
    },
    {
      title: "Startup Radar: It's all about AI for early-stage Seattle companies",
      summary: "GeekWire highlights our work in AI for space robotics and how we're shaping the future of autonomous servicing in orbit.",
      link: "https://www.geekwire.com/2025/startup-radar-its-all-about-ai-for-early-stage-seattle-companies-in-space-storytelling-supply-chain/",
      source: "GeekWire",
      image: GeekWirePreview
    },
    {
      title: "Space Ocean and Orbital Robotics team up on in-space robotics",
      summary: "Space Ocean signs an LOI with Orbital Robotics to explore integration of robotic arms and autonomous docking systems for future orbital servicing and infrastructure missions.",
      link: "https://spaceoceancorp.com/news/space-ocean-orbital-robotics-loi-robotic-integration",
      source: "Space Ocean",
      image: SpaceOceanPreview
    },
    {
      title: "Beyond Max Q: AI and Space Robotics with Orbital Robotics",
      summary: "In this episode of Beyond Max Q, host Mollie Jahner and co-host Anne Bly interview Aaron Borger, CEO of Orbital Robotics. They discuss AI in space robotics, safety challenges, startup funding strategies, and the importance of demonstrating technology in orbit before securing customer contracts.",
      link: "https://www.youtube.com/watch?v=G3wcdS66wgU",
      source: "Beyond Max Q (YouTube)",
      image: YoutubePreview
    },
    {
      title: "Space Dirt: Orbital Robotics builds the next generation of autonomous rendezvous tech",
      summary: "Space Dirt highlights Orbital Robotics for its work in developing autonomous rendezvous, proximity operations, and capture (RPOC) systems — key for on-orbit servicing, refueling, relocation, and debris removal. CEO Aaron Borger notes the company’s mission to enable high mobility and sustainable orbital operations.",
      link: "https://spacedirt.beehiiv.com/p/october-s-space-dirt-month-end",
      source: "Space Dirt Newsletter",
      image: SpaceDirtPreview
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <SEO
        title="News"
        description="Latest updates, press releases, and media coverage for Orbital Robotics."
      />
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">News & Updates</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Stay up to date with our latest milestones and media appearances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold tracking-wider text-primary uppercase mb-2">{item.source}</div>
                <h2 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h2>
                <p className="text-text-secondary mb-6 flex-1">{item.summary}</p>
                <span className="text-white font-medium group-hover:text-primary transition-colors flex items-center">
                  Read Article <span className="ml-2">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
