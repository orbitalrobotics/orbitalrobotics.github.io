import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import RoboticArmImg from '../assets/images/robotic-arm.png';
import SatelliteOSImg from '../assets/images/satellite-os.png';
import AstroBotImg from '../assets/images/astrobot.png';
import SwarmImg from '../assets/images/swarm-software.png';
import ComingSoonImg from '../assets/images/coming_soon.png';
import RoboticArmBlackImg from '../assets/images/robotic-arm-black.png';
import NavIQImg from '../assets/images/point_control.gif';

// Import Videos
import Ar3CatchVideo from '../assets/video/ar3_catch.mp4';
import HubbleCaptureVideo from '../assets/video/hubble_capture_compressed.mp4';
import PoseEstimationVideo from '../assets/video/pose_estimation_fast.mp4';
import TitansDeploymentVideo from '../assets/video/titans_module_deployment_compressed.mp4';

const ProductCard = ({ title, description, image, video, category, link }) => (
    <div className="group relative overflow-hidden rounded-2xl bg-surface border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
            {video && image !== ComingSoonImg && image !== RoboticArmBlackImg ? (
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            ) : (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
        </div>
        <div className="p-8 relative z-10">
            <div className="text-xs font-bold tracking-wider text-primary uppercase mb-2">{category}</div>
            <h3 className="text-2xl font-heading font-bold text-white mb-3">{title}</h3>
            <p className="text-text-secondary mb-6 line-clamp-3">{description}</p>
            <Link
                to="/contact"
                className="inline-flex items-center text-white font-medium hover:text-primary transition-colors"
            >
                Request Info <span className="ml-2">→</span>
            </Link>
        </div>
    </div>
);

const Products = () => {
    const services = [
        {
            title: "De-orbit Service",
            category: "Service (Available 2028)",
            description: "End-of-life disposal services for satellites and debris removal to ensure sustainable orbital operations.",
            image: ComingSoonImg
        },
        {
            title: "Satellite Upgrade",
            category: "Service (Available 2028)",
            description: "Hardware upgrades and component replacement for operational satellites to extend mission life and capabilities.",
            image: ComingSoonImg
        },
        {
            title: "Refueling",
            category: "Service (Available 2028)",
            description: "On-orbit refueling services to extend the operational lifespan of maneuverable spacecraft.",
            image: ComingSoonImg
        },
        {
            title: "Orbital Maneuver",
            category: "Service (Available 2028)",
            description: "Tugging and relocation services for orbit raising, inclination changes, and constellation phasing.",
            image: ComingSoonImg
        },
        {
            title: "Data Center Maintenance",
            category: "Service (Available 2030)",
            description: "Autonomous maintenance and servicing for orbital data centers and compute infrastructure.",
            image: ComingSoonImg
        },
        {
            title: "Asset Protection",
            category: "Service (Available 2030)",
            description: "Security and monitoring services for high-value space assets against orbital threats.",
            image: ComingSoonImg
        }
    ];

    const hardwareProducts = [
        {
            title: "Robotic Arms",
            category: "Hardware",
            description: "High-precision robotic manipulators designed for on-orbit servicing, assembly, and manufacturing. Features modular end-effectors and radiation-hardened electronics for long-duration missions.",
            image: RoboticArmBlackImg,
            video: Ar3CatchVideo
        },
        {
            title: "AstroBot",
            category: "Hardware",
            description: "Autonomous free-flying vehicle for inspection and light-duty servicing. Equipped with advanced sensors and thrusters for precise proximity operations around sensitive assets.",
            image: ComingSoonImg,
            video: HubbleCaptureVideo
        },
        {
            title: "Orbital Assembly",
            category: "Hardware",
            description: "Automated assembly of large space structures using cooperative robotic systems.",
            image: ComingSoonImg,
            video: TitansDeploymentVideo
        }
    ];

    const softwareProducts = [
        {
            title: "SatelliteOS",
            category: "Software",
            description: "The intelligent operating system for next-generation spacecraft. Enables autonomous navigation, constellation management, and real-time edge processing of payload data.",
            image: SatelliteOSImg
        },
        {
            title: "SwarmSoftware",
            category: "Software",
            description: "Distributed intelligence for satellite constellations. Allows multiple assets to coordinate actions, share resources, and optimize mission objectives in real-time without ground intervention.",
            image: SwarmImg
        },
        {
            title: "NavIQ",
            category: "Software",
            description: "Advanced orbital dynamics and trajectory planning suite. Provides high-accuracy state estimation and maneuver planning for complex rendezvous and proximity operations.",
            image: NavIQImg
        },
        {
            title: "AstraP",
            category: "Software",
            description: "Propulsion management and optimization system. Maximizes fuel efficiency and station-keeping life through AI-driven thruster control and maneuver scheduling.",
            image: ComingSoonImg
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-20 pb-20">
            <SEO
                title="Products"
                description="Explore our advanced space hardware and software products, including robotic arms, AstroBot free-flyers, and SatelliteOS."
            />
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Our Products & Services</h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Advanced robotics and software infrastructure enabling the future of space operations.
                    </p>
                </div>

                {/* Services Section */}
                <div className="mb-24">
                    <h2 className="text-3xl font-heading font-bold text-white mb-10 border-b border-white/10 pb-4">Future Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ProductCard key={index} {...service} />
                        ))}
                    </div>
                </div>

                {/* Hardware Section */}
                <div className="mb-24">
                    <h2 className="text-3xl font-heading font-bold text-white mb-10 border-b border-white/10 pb-4">Hardware</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hardwareProducts.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>

                {/* Software Section */}
                <div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-10 border-b border-white/10 pb-4">Software</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {softwareProducts.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-24 text-center bg-surface rounded-3xl p-12 border border-white/5">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to upgrade your mission?</h2>
                    <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                        Contact our engineering team to discuss how Orbital Robotics can support your specific mission requirements.
                    </p>
                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-primary/50"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Products;
