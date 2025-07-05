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
