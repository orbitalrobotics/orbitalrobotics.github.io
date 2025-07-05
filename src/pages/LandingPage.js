import React, { useState } from 'react';
import { Rocket, Globe, Settings } from 'lucide-react';
import Solutions from './Solutions';
import Team from './Team';
import About from './About';
import Contact from './Contact';
import News from './News'
import Splash from "../assets/images/logo_white.png"
import videoBg from "../assets/video/single_arm_cube_catch.mp4"
import cube_grasp from "../assets/video/free-float-cube-grasp.mp4"
import { Link } from 'react-router-dom';
import "./LandingPage.css"

function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: <Rocket className="w-12 h-12 text-blue-500" />,
      title: "Advanced Robotics",
      description: "Cutting-edge robotic solutions for complex spatial challenges."
    },
    {
      icon: <Globe className="w-12 h-12 text-green-500" />,
      title: "Global Deployment",
      description: "Scalable technologies deployable across diverse environments."
    },
    {
      icon: <Settings className="w-12 h-12 text-purple-500" />,
      title: "Intelligent Systems",
      description: "AI-powered robotics with adaptive learning capabilities."
    }
  ];

  return (


    <div className="master-page-container">


      <div className='video-main'>
        <div className="overlay">
          <video className='video-main-video' src={cube_grasp} autoPlay loop muted />
        </div>
        <div className='content'>
            <div className="home-content">
              <div><img className='main-logo' src={Splash} alt="Logo" /></div>
              <h1>Servicing, assembling, and manufacturing spacecraft in orbit with AI powered robots</h1>
              {/* <p>
                Welcome to <g><b><i>Orbital Robitics</i></b></g>, where innovation meets foresight.
              </p> */}

              <div className='button-wrapper'>
                <Link to="/solutions">
                  <button className="read-more-button">Explore Solutions</button>
                </Link>
              </div>


              {/* <div className="logo-container">
                            <img src={Splash} alt="Logo" class="styled-logo"/>
                        </div> */}
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div>
        <section id='solutions' >
          <Solutions />
        </section>
        <div className="divider"></div>

        <div id='about'>
          <About />
        </div>
        <div className="divider"></div>

        <section id='team'>
          <Team />
        </section>

        <div className="divider"></div>

        <section id='News'>
          <News />
        </section>

        <div className="divider"></div>

        <section id='team'>
          <Contact />
        </section>

      </div>
    </div>

  );
}

export default LandingPage;