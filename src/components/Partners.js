import React from 'react';

// Import Partner Logos
import Enduralock from '../assets/images/partners/Enduralock.png';
import Matrix from '../assets/images/partners/Matrix.avif';
import OrbitFab from '../assets/images/partners/OrbitFab_logo.png';
import SophiaSpace from '../assets/images/partners/Sophia_Space.png';
import SpaceCopy from '../assets/images/partners/space_copy_white.png'; // Using white version for dark theme
import SpaceOcean from '../assets/images/partners/Space_Ocean.jpeg';
import Starcloud from '../assets/images/partners/StarCloud_White.png';
import WilsonSonsini from '../assets/images/partners/Wilson Sonsini.png';
import Nvidia from '../assets/images/partners/nvidia.jpg';
import OrbitalComposites from '../assets/images/partners/orbitalcomposites.png';

const Partners = () => {
    const partners = [
        { name: "Nvidia", logo: Nvidia },
        { name: "Orbit Fab", logo: OrbitFab },
        { name: "Orbital Composites", logo: OrbitalComposites },
        { name: "Space Copy", logo: SpaceCopy },
        { name: "Enduralock", logo: Enduralock },
        { name: "Sophia Space", logo: SophiaSpace },
        { name: "Starcloud", logo: Starcloud },
        { name: "Wilson Sonsini", logo: WilsonSonsini },
        { name: "Matrix", logo: Matrix },
        { name: "Space Ocean", logo: SpaceOcean },
    ];

    return (
        <div className="py-12 bg-surface border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-text-secondary text-sm font-bold tracking-widest uppercase">Trusted by Industry Leaders</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center space-x-16">
                    {/* First set of logos */}
                    {partners.map((partner, index) => (
                        <div key={index} className="flex items-center justify-center w-48 h-24 mx-8">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className={`max-h-16 max-w-full object-contain ${partner.name === 'Sophia Space' ? 'scale-150' : ''}`}
                            />
                        </div>
                    ))}

                    {/* Duplicate set for seamless scrolling */}
                    {partners.map((partner, index) => (
                        <div key={`dup-${index}`} className="flex items-center justify-center w-48 h-24 mx-8">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className={`max-h-16 max-w-full object-contain ${partner.name === 'Sophia Space' ? 'scale-150' : ''}`}
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-16">
                    {/* Second duplicate set for seamless scrolling logic if needed, but usually one duplicate set in the flex container is enough if the animation handles it. 
              However, standard tailwind marquee usually requires two identical containers animating. 
              Let's stick to the single container with double content approach if using a custom 'marquee' animation that translates -50%.
          */}
                </div>
            </div>
        </div>
    );
};

export default Partners;
