import React from 'react';
import './Team.css';

import Riley from '../assets/images/headshots/riley.jpg';
import Adeel from '../assets/images/headshots/adeel.jpg';
import Sohil from '../assets/images/headshots/sohil.jpeg';
import Aaron from '../assets/images/headshots/aaron.png';
import Doug from '../assets/images/headshots/Doug.jpg';
import Don from '../assets/images/headshots/Don.jpeg';

const teamMembers = [
  {
    name: "Aaron Borger",
    title: "Founder & CEO",
    image: Aaron,
    bio: [
      "Aaron is the CEO of Orbital Robotics, where he leads the development of AI-powered robotic systems for satellite servicing and in-orbit spacecraft assembly. Prior to founding Orbital Robotics, he served as Lead Software Engineer for Blue Origin’s BE-7 lunar lander engine and established a prognostics team that pioneered deep learning algorithms to predict rocket engine degradation. His work in space robotics began during his undergraduate years, launching suborbital AI-powered robotic arms that autonomously captured tumbling objects in microgravity using computer vision and reinforcement learning."
    ],
  },
  {
    name: "Doug Kohl",
    title: "Founder & COO",
    image: Doug,
    bio: [
      "Doug is a veteran aerospace operations leader with over 40 years of experience in reusable spacecraft systems from Space Shuttle recovery and refurbishment to next-generation lunar systems He has led mission-critical operations for NASA and Blue Origin, specializing in the recovery refurbishment, and flight readiness of human-rated spacecraft with a focus on advancing sustainable lunar exploration."
    ],
  },
  {
    name: "Don Feeney",
    title: "Technical Writer",
    image: Don,
    bio: [
      "Don is a strategic business and technology professional specializing in commercial partnerships, licensing agreements,and SBIR/STTR proposal development. With a strong focus on securing funding and driving commercialization efforts, Don bridges the gap between innovative technology development and market application. His expertise includes crafting compelling proposals, fostering collaborative relationships, and advancing projects from concept to scalable solutions."
    ]
  },
  // {
  //   name: "Sohil Pokharna",
  //   title: "Founding Engineer",
  //   image: Sohil,
  //   bio: [
  //     "Sohil is a highly skilled software engineer currently working at Blue Origin where he contributes to flight-critical autonomous systems He brings extensive experience in AI-driven navigation, embedded systems, an control software from roles at Google, MaxLinear, and Lawrence Berkeley National Laboratory At Google, he developed thermal and electrical analysis frameworks for hardware optimization at MaxLinear, he automated power estimation workflows for digital IC design. He has also supported robotics startups with real-time firmware integration and worked on experimental energy systems at national labs Sohil leads the development of Orbital Robotics’ ASTRA-P and NavIQ platforms enabling perception,autonomy, and adaptive control for in-orbit robotics."
  //   ],
  // },

  // {
  //   name: "Riley Mark",
  //   title: "Founding Engineer",
  //   image: Riley,
  //   bio: [
  //     "Riley is a systems-oriented engineer with specialized expertise in space-grade hardware development and modular robotic actuation systems. As a key contributor to Orbital Robotics’ mechanical and electrical subsystems, Riley leads the detailed design and fabrication of critical components for on-orbit robotic assemblies. His work includes end-to-end CAD modeling, finite element analysis (FEA) for structural and thermal resilience, and coordination of prototype builds using aerospace-grade composites, including components fabricated by Orbital Composites. A proven problem solver with a background in rigorous applied research, Riley integrates academic precision with hands-on execution, ensuring design robustness and manufacturability under the extreme constraints of space environments. His leadership has directly advanced the technical maturity of our core hardware systems."
  //   ],
  // },
  // {
  //   name: "Adeel Qureshi",
  //   title: "Founding Engineer",
  //   image: Adeel,
  //   bio: [
  //     "Lead Software Engineer for Blue Origin’s BE-4 Engine",
  //     "Software Engineer on Blue Origin Prognostics and Health Management Team",
  //     "Computer Engineering Bachelors",
  //   ],
  // },
];


function Team() {
  return (
    <div className="team-container">
      <div className="team-background">
        <div className="team-content">
          <h1>
            Meet the <span className="highlight">Orbital Robotics</span> Team
          </h1>
          <p>Bringing you top engineering talent from the Space Industry</p>
          <section className="team-section">
            {teamMembers.map((member, index) => (
              <div key={index} className="member-row align-top">
                <div className="team-member align-left">
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.title}</p>
                </div>
                <div className="member-bio">
                  <ul>
                    {member.bio.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Team;
