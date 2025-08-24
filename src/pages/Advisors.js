import React from 'react';
import Brice from '../assets/images/headshots/Brice_H.jpg';
import Gordon from '../assets/images/headshots/Gordon-dp.jpg';
import John from '../assets/images/headshots/John_Brendel.jpg';
import Tim from '../assets/images/headshots/Tim_Pickens.jpeg';
import Tolga from '../assets/images/headshots/Tolga_Ors.jpeg';
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
      "Brice is a seasoned executive and systems engineer with over 20 years of experience delivering mission-critical technologies across aerospace, robotics, and advanced engineering. As the former Co-Founder and President of Novium Ltd, he leads the development of in-space robotics and logistics solutions for next-generation satellite platforms, serving civil, defense, and commercial sectors. His career spans leadership roles at Nexus Technologies, Intuitive Machines, NASA, and Bigelow Aerospace where he architected autonomous systems, scaled high-performance teams, and delivered flight-rated hardware. Known for aligning deep technical fluency with strategic vision, Mr. Howard brings a rare ability to bridge innovation and execution across complex, cross-disciplinary domains."
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
    name: "Tim Pickens",
    image: Tim,
    bio: [
      "Tim Pickens is a pioneering force in space propulsion and private aerospace innovation, with over 25 years of experience shaping some of the most iconic space programs of the modern era. As Chief Propulsion Engineer for Burt Rutan’s SpaceShipOne, he led development of the hybrid rocket system that powered the first privately funded manned spaceflight—securing the $10M Ansari X-Prize and redefining commercial spaceflight.Tim has since contributed propulsion expertise to projects including Stratolaunch, Virgin Galactic’s SpaceShipTwo, and Virgin Orbit’s launch systems. Personally selected by Robert Bigelow, he led development of RCS thrusters for the BA330 space station and later served as Chief Propulsion Engineer for Bigelow Aerospace Huntsville. Through his current company, Pickens Scientific, he supports Blue Origin’s advanced propulsion R&D efforts.A serial entrepreneur, Tim founded Orion Propulsion—acquired by Dynetics in 2009—and Pickens Innovations, supporting Stratolaunch’s orbital systems. As an Associate Fellow of AIAA and recipient of numerous industry awards, he is also a passionate educator and community leader, known for promoting grassroots rocketry and inspiring the next generation of space pioneers. His work has been featured by the Discovery Channel, National Geographic, and Smithsonian Magazine."
    ],
  },
  {
    name: "Dr. Tolga Ors",
    image: Tolga,
    bio: [ "Dr. Tolga Ors is a space systems expert and strategic advisor with over 25 years of experience advancing satellite communications, AI, and robotics across industry and government. Holding an MSc and PhD in Satellite Communications from the University of Surrey, he has held leadership and technical roles at Intelsat, Inmarsat, OneWeb, AST SpaceMobile, CGI, the Alan Turing Institute, and the FAIR-Space hub.A recognized leader in space innovation strategy, Tolga has secured over £20 million in co-funding from the UK Space Agency and the European Space Agency to drive public-private partnerships that accelerate cutting-edge technologies. His work focuses on enabling startups to scale breakthrough ideas through sustainable implementation, with particular emphasis on AI-driven autonomy, robotics, and transformative mission architectures.As a frequent writer and thought leader, Tolga shares insights on emerging trends in the New Space ecosystem, spotlighting startup success stories and the future of space commercialization. He brings a unique blend of technical fluency, business acumen, and ecosystem foresight to help shape the next generation of space technologies."],
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
