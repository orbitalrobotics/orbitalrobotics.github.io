import React from 'react';
import './Partners.css';

import Nvidia from  "../assets/images/partners/nvidia.jpg";
import SpaceCopy from  "../assets/images/partners/space_copy_white.png";
import EnduraLock from  "../assets/images/partners/Enduralock.png";
import OrbitalComposites from  "../assets/images/partners/orbitalcomposites.png";
import Matrix from  "../assets/images/partners/Matrix.avif";
import Wilson from "../assets/images/partners/Wilson Sonsini.png";
import Sophia from "../assets/images/partners/Sophia_Space.png";
import SpaceOcean from "../assets/images/partners/Space_Ocean.jpeg";
import OrbitFab from "../assets/images/partners/OrbitFab.png";
import starCloud from "../assets/images/partners/Starcloud.png";

const partnersList = [
    Nvidia,
    SpaceCopy,
    EnduraLock,
    OrbitalComposites,
    Matrix,
    Wilson,
    Sophia,
    SpaceOcean,
    OrbitFab,
    starCloud
  // Add more logos to this list in the order you want them displayed
];

const Partners = () => {
  return (
    <div className="sponsor-container">
      <h1>Our Partners</h1>
      <div className="sponsor-grid">
        {partnersList.map((logo, index) => (
          <img key={index} src={logo} alt={`Partner ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
