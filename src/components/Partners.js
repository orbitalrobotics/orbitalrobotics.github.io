import React from 'react';
import AnimatedSection from './motion/AnimatedSection';

// Import Partner Logos
import Enduralock from '../assets/images/partners/Enduralock.png';
import Matrix from '../assets/images/partners/Matrix.avif';
import OrbitFab from '../assets/images/partners/OrbitFab_logo.png';
import SophiaSpace from '../assets/images/partners/Sophia_Space.png';
import SpaceCopy from '../assets/images/partners/space_copy_white.png';
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
            <AnimatedSection className="container mx-auto px-6 mb-8 text-center">
                <p className="text-text-secondary text-sm font-bold tracking-widest uppercase">Trusted by Industry Leaders</p>
            </AnimatedSection>

            <div className="relative flex overflow-x-hidden group">
                {/* Left fade edge */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
                {/* Right fade edge */}
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

                <div className="animate-marquee whitespace-nowrap flex items-center space-x-16">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex items-center justify-center w-48 h-24 mx-8">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className={`max-h-16 max-w-full object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 ${partner.name === 'Sophia Space' ? 'scale-150' : ''}`}
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless scrolling */}
                    {partners.map((partner, index) => (
                        <div key={`dup-${index}`} className="flex items-center justify-center w-48 h-24 mx-8">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className={`max-h-16 max-w-full object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 ${partner.name === 'Sophia Space' ? 'scale-150' : ''}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
