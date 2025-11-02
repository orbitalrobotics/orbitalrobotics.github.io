import React from 'react';
import './News.css';

function News() {
  const newsItems = [
    {
      title: "Startup Radar: It's all about AI for early-stage Seattle companies",
      summary: "GeekWire highlights our work in AI for space robotics and how we're shaping the future of autonomous servicing in orbit.",
      link: "https://www.geekwire.com/2025/startup-radar-its-all-about-ai-for-early-stage-seattle-companies-in-space-storytelling-supply-chain/",
      source: "GeekWire"
    },
    {
      title: "Space Ocean and Orbital Robotics team up on in-space robotics",
      summary: "Space Ocean signs an LOI with Orbital Robotics to explore integration of robotic arms and autonomous docking systems for future orbital servicing and infrastructure missions.",
      link: "https://spaceoceancorp.com/news/space-ocean-orbital-robotics-loi-robotic-integration",
      source: "Space Ocean"
    },
    {
      title: "Beyond Max Q: AI and Space Robotics with Orbital Robotics",
      summary: "In this episode of Beyond Max Q, host Mollie Jahner and co-host Anne Bly interview Aaron Borger, CEO of Orbital Robotics. They discuss AI in space robotics, safety challenges, startup funding strategies, and the importance of demonstrating technology in orbit before securing customer contracts.",
      link: "https://www.youtube.com/watch?v=G3wcdS66wgU",
      source: "Beyond Max Q (YouTube)"
    },
       {
      title: "Space Dirt: Orbital Robotics builds the next generation of autonomous rendezvous tech",
      summary: "Space Dirt highlights Orbital Robotics for its work in developing autonomous rendezvous, proximity operations, and capture (RPOC) systems — key for on-orbit servicing, refueling, relocation, and debris removal. CEO Aaron Borger notes the company’s mission to enable high mobility and sustainable orbital operations.",
      link: "https://spacedirt.beehiiv.com/p/october-s-space-dirt-month-end",
      source: "Space Dirt Newsletter"
    },
    // Add more news items here
  ];

  return (
    <div className="news-container">
      <div className="news-background">
        <h1 className="news-header">News & Updates</h1>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="news-card"
            >
              <h2 className="news-title">{item.title}</h2>
              <p className="news-summary">{item.summary}</p>
              <p className="news-source">Source: {item.source}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
