import React from 'react';
import SEO from '../../components/SEO';
import StarcloudLogo from '../../assets/images/partners/Starcloud-Black-Logo-Transparent-Background-NAME_LOGO.webp';

const StarcloudAnnouncement = () => {
    return (
        <div className="min-h-screen bg-background pt-20 pb-20">
            <SEO
                title="Orbital Robotics Partners with Starcloud"
                description="Orbital Robotics signs LOI with Starcloud to partner on space-based AI and robotic infrastructure."
            />
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-12 text-center">
                    <div className="flex justify-center items-center space-x-8 mb-8">
                        <img src={StarcloudLogo} alt="Starcloud" className="h-16 object-contain" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Orbital Robotics Partners with Starcloud on Space-Based AI
                    </h1>
                    <p className="text-text-secondary">November 24, 2025</p>
                </div>

                <div className="prose prose-lg prose-invert mx-auto">
                    <p className="lead text-xl text-white mb-8">
                        I'm thrilled to announce Orbital Robotics has signed an LOI with Starcloud to partner on space-based AI.
                    </p>

                    <p>
                        Orbital Robotics aims to provide AI controlled robotic arms to aid with assembling, docking, maintaining and upgrading datacenter modules.
                    </p>

                    <p>
                        Orbital Robotics and Starcloud’s partnership solves a major problem for AI space robots: training. While Orbital Robotics uses simulation to train AI for their robots, data needs to be collected on-orbit to improve simulation and computer vision accuracy. There is not enough bandwidth for Orbital Robotics to downlink this data and train on terrestrial datacenters. Starcloud datacenters enables simulating and training directly in orbit without downlinking data.
                    </p>

                    <p>
                        One problem with large scale 4 km x 4 km solar arrays Starcloud intends to deploy in space is the end-of-life disposal. While Orbital Robotics is developing de-orbit as a service capability, we see recycling the datacenters as a gold mine, literally! Starcloud’s datacenters contain many metals and materials which could be recycled and manufactured into new spacecraft. Since the material is already in-orbit, the new satellites could be manufactured without a launch cost while providing salvage value for Starcloud. This is a long-term goal Orbital Robotics intends to work towards turning into a reality.
                    </p>

                    <p>
                        Orbital Robotics is looking forward to building the future of AI in space with Starcloud.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-4">About Starcloud</h3>
                    <p>
                        Starcloud is building data centers in space to address energy constraints for AI data centers on Earth. Starcloud recently launched the first high powered GPU to space which is 100x more powerful AI compute than has been in space before.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-4">About Orbital Robotics</h3>
                    <p>
                        Orbital Robotics develops robotic systems with mission-critical AI for on-orbit servicing, assembly, and manufacturing. Orbital Robotics’ patent-pending technologies enable autonomous spacecraft GNC and robotic manipulation with a verification approach enabling the safe use of AI in space for mission-critical tasks. Orbital Robotics was founded by former Blue Origin leaders with expertise in AI for aerospace, flight software, space robotics, and reusable spacecraft.
                    </p>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="font-bold text-white">Philip Johnston</p>
                        <p className="text-primary text-sm mb-4">#datacentersinspace #spaceAI #spacerobotics #orbitalrobotics</p>
                        <a
                            href="https://www.linkedin.com/posts/activity-7394083181618118656-9X1K?utm_source=share&utm_medium=member_desktop&rcm=ACoAACCiqBABdq5qelsYHClxZvg-WDGUuEGP31E"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
                        >
                            View on LinkedIn <span className="ml-2">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarcloudAnnouncement;
