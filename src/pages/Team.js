import React from 'react';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import SEO from '../components/SEO';

// Import images
import AaronImg from '../assets/images/headshots/Aaron.png';
import SohilImg from '../assets/images/headshots/sohil.jpeg';
import RileyImg from '../assets/images/headshots/riley.jpg';
import DougImg from '../assets/images/headshots/Doug.jpg';
import TimImg from '../assets/images/headshots/Tim.jpg';
import EricFeltImg from '../assets/images/headshots/EricFelt.jpg';
import ChrisImg from '../assets/images/headshots/Christopher_Sembroski.jpg';
import TolgaImg from '../assets/images/headshots/Tolga_Ors.jpeg';

const TeamMember = ({ name, role, image, bio, linkedin, email }) => (
  <div className="bg-surface rounded-2xl p-6 border border-white/5 hover:border-primary/50 transition-all group text-center">
    <div className="w-32 h-32 mx-auto mb-6 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-md"></div>
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-full border-2 border-white/10 group-hover:border-primary transition-colors relative z-10"
      />
    </div>
    <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
    <p className="text-primary text-sm font-medium mb-4">{role}</p>
    <p className="text-text-secondary text-sm mb-6">{bio}</p>
    <div className="flex justify-center space-x-3">
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white text-text-secondary transition-all"
      >
        <FaLinkedinIn />
      </a>
      {email && (
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white text-text-secondary transition-all"
        >
          <FaEnvelope />
        </a>
      )}
    </div>
  </div>
);

const Team = () => {
  const team = [
    {
      name: "Aaron (Cyborg) Borger",
      role: "Co-Founder & CEO",
      image: AaronImg,
      bio: "Leads AI robotic systems for satellite servicing. Formerly Lead Software Engineer at Blue Origin (BE-7 engine) and deep learning pioneer. Expert in autonomous microgravity capture and reinforcement learning.",
      linkedin: "https://www.linkedin.com/in/aaron-borger/",
      email: "aborger@orbital-robots.com"
    },
    {
      name: "Doug Kohl",
      role: "Co-Founder & COO",
      image: DougImg,
      bio: "Aerospace operations veteran with 40+ years experience (Space Shuttle to lunar systems). Led mission-critical operations for NASA and Blue Origin, specializing in human-rated spacecraft recovery and readiness.",
      linkedin: "https://www.linkedin.com/in/doug-kohl-865553b/",
      email: "dkohl@orbital-robots.com"
    },
    {
      name: "Riley Mark",
      role: "Co-Founder & Engineer",
      image: RileyImg,
      bio: "Specializes in space-grade hardware and modular actuation. Leads design and fabrication of critical subsystems. Ensures design robustness and manufacturability for space environments.",
      linkedin: "https://www.linkedin.com/in/riley-mark/",
      email: "rmark@orbital-robots.com"
    },
    {
      name: "Sohil Pokharna",
      role: "Co-Founder & Engineer",
      image: SohilImg,
      bio: "Builds the autonomous software stack (ASTRA-P, NavIQ). Experience in AI navigation and embedded systems from Blue Origin and Google. Expert in flight-critical autonomy and real-time firmware.",
      linkedin: "https://www.linkedin.com/in/sohil-pokharna/",
      email: "spokharna@orbital-robots.com"
    }
  ];

  const advisors = [
    {
      name: "Tim Pickens",
      role: "Advisor",
      image: TimImg,
      bio: "Veteran aerospace entrepreneur and propulsion expert.",
      linkedin: "https://www.linkedin.com/in/timpickens/"
    },
    {
      name: "Eric Felt",
      role: "Advisor",
      image: EricFeltImg,
      bio: "Space systems architecture and government programs strategy.",
      linkedin: "https://www.linkedin.com/in/eric-felt/"
    },
    {
      name: "Christopher Sembroski",
      role: "Advisor",
      image: ChrisImg,
      bio: "Astronaut and aerospace industry leader.",
      linkedin: "https://www.linkedin.com/in/chris-sembroski/"
    },
    {
      name: "Tolga Ors",
      role: "Advisor",
      image: TolgaImg,
      bio: "Expert in satellite communications and RF systems.",
      linkedin: "https://www.linkedin.com/in/tolgaors/"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <SEO
        title="Team"
        description="Meet the Orbital Robotics team - engineers, scientists, and visionaries dedicated to building the future of space infrastructure."
      />
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Our Team</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A dedicated team of engineers and visionaries building the future of space.
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-24">
          <h2 className="text-3xl font-heading font-bold text-white mb-10 border-b border-white/10 pb-4">Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div>
          <h2 className="text-3xl font-heading font-bold text-white mb-10 border-b border-white/10 pb-4">Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <TeamMember key={index} {...advisor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
