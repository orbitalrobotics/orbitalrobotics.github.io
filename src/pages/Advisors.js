import React from 'react';
import Brice from '../assets/images/headshots/Brice_H.jpg';
import Gordon from '../assets/images/headshots/Gordon-dp.jpg';
import John from '../assets/images/headshots/John_Brendel.jpg';
import './Team.css';

const advisors = [
  {
    name: "Dr. Gordon Roesler",
    image: Gordon,
    bio: [
      "Dr. Roesler is a leading expert in space robotics and infrastructure, with over two decades of experience advancing space systems through government, academia, and industry. As former Program Manager at DARPA, he led the Robotic Servicing of Geosynchronous Satellites (RSGS) program, shaping the future of in-orbit servicing and autonomy. He is the founder and President of Robots in Space LLC, where he advocates for expanding the space economy through new capabilities in robotics, infrastructure, and mission architecture. Dr. Roesler has held senior technical and leadership roles at the University of New South Wales, USC’s Information Sciences Institute, Booz Allen Hamilton, and SAIC, bringing expertise in satellite systems, ocean robotics, unmanned energy distribution, and defense technology. His work bridges science, policy, and innovation, with a long-standing focus on enabling sustainable and scalable operations in space."
    ],
  },
  {
    name: "Brice Howard",
    image: Brice,
    bio: [
      "Brice is a seasoned executive and systems engineer with over 20 years of experience delivering mission-critical technologies across aerospace, robotics, and advanced engineering. As Co-Founder and President of Novium Ltd, he leads the development of in-space robotics and logistics solutions for next-generation satellite platforms, serving civil, defense, and commercial sectors. His career spans leadership roles at Nexus Technologies, Intuitive Machines, NASA, and Bigelow Aerospace where he architected autonomous systems, scaled high-performance teams, and delivered flight-rated hardware. Known for aligning deep technical fluency with strategic vision, Mr. Howard brings a rare ability to bridge innovation and execution across complex, cross-disciplinary domains."
    ],
  },
  {
    name: "John Brendel",
    image: John,
    bio: [
      "Former Blue Origin Principal Structures Engineer",
      "Former Propulsion at Virgin Galactic, SpaceX, and NASA",
    ],
  },
  {
    name: "Tim Pickens - Chief Propulsion Advisor",
    image: null,
    bio: ["Coming soon"],
  },
];

function Advisor() {
  return (
    <div className="team-background">
      <section className="team-section">
        <div className="team-content">
          <h1>Advisors & Consultants</h1>
        </div>
        <div className="advisor-section">
          {advisors.map((advisor, index) => (
            <div key={index} className="member-row advisor-row align-top">
              <div className="team-member advisor align-left">
                {advisor.image ? (
                  <img src={advisor.image} alt={advisor.name} />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '200px',
                      backgroundColor: '#333',
                      borderRadius: '8px',
                      marginBottom: '10px',
                    }}
                  />
                )}
                <h3>{advisor.name}</h3>
              </div>
              <div className="member-bio">
                <ul>
                  {advisor.bio.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Advisor;
