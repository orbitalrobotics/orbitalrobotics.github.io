import React from 'react';
import './Partners.css';

import Nvidia from  "../assets/images/partners/nvidia.jpg";
import SpaceCopy from  "../assets/images/partners/SpaceCopy_2.avif";
import EnduraLock from  "../assets/images/partners/Enduralock.png";
import OrbitalComposites from  "../assets/images/partners/orbitalcomposites.png";
import Matrix from  "../assets/images/partners/Matrix.avif";

const partnersList = [
    Nvidia,
    SpaceCopy,
    EnduraLock,
    OrbitalComposites,
    Matrix
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
