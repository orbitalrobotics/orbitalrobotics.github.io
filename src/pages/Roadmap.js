import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const RoadmapItem = ({ year, quarter, title, description, status }) => (
    <div className="relative pl-8 md:pl-0 md:w-1/2 md:ml-auto md:odd:ml-0 md:odd:mr-auto md:odd:text-right md:odd:pr-12 md:pr-0 md:pl-12 pb-12 group">
        {/* Timeline Line */}
        <div className="absolute top-0 left-0 md:left-1/2 h-full w-px bg-white/10 transform md:-translate-x-1/2"></div>

        {/* Timeline Dot */}
        <div className={`absolute top-0 left-0 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 border-2 ${status === 'completed' ? 'bg-primary border-primary' : status === 'current' ? 'bg-white border-white animate-pulse' : 'bg-background border-white/30'} z-10`}></div>

        {/* Content */}
        <div className="relative">
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${status === 'completed' ? 'bg-primary/20 text-primary' : status === 'current' ? 'bg-white/10 text-white' : 'bg-white/5 text-text-muted'}`}>
                {year} {quarter}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-text-secondary">{description}</p>
        </div>
    </div>
);

const Roadmap = () => {
    const milestones = [
        {
            year: "2024",
            quarter: "Q4",
            title: "Company Founded",
            description: "Orbital Robotics established with a mission to build the infrastructure for the space economy.",
            status: "completed"
        },
        {
            year: "2025",
            quarter: "Aug",
            title: "Out of Stealth",
            description: "Public launch of Orbital Robotics, unveiling our vision for autonomous in-space servicing and assembly.",
            status: "completed"
        },
        {
            year: "2025",
            quarter: "Sep",
            title: "First Customer Secured",
            description: "Signed first commercial contract for in-orbit servicing mission.",
            status: "completed"
        },
        {
            year: "2025",
            quarter: "Q4",
            title: "Pre-Seed Funding",
            description: "Secured initial capital to accelerate R&D of core robotic arm technology and SatelliteOS.",
            status: "completed"
        },
        {
            year: "2026",
            quarter: "Q2",
            title: "Alpha Prototype",
            description: "Robotic arm prototype that is on Earth, fully controlled by our proprietary AI-powered software stack.",
            status: "upcoming"
        },
        {
            year: "2026",
            quarter: "Q3",
            title: "Satellite OS & First Mission",
            description: "First in-space mission using our robotic arm and AI-powered software to perform autonomous operations on a customer satellite.",
            status: "upcoming"
        },
        {
            year: "2026",
            quarter: "Q4",
            title: "Space Station Assembly Demo",
            description: "Demonstration of autonomous assembly capabilities for large-scale space structures.",
            status: "upcoming"
        },
        {
            year: "2027",
            quarter: "Q1",
            title: "RPOC Demo",
            description: "Dual-arm cooperation for Rendezvous, Proximity Operations, and Capture (RPOC).",
            status: "upcoming"
        },
        {
            year: "2027",
            quarter: "Q1",
            title: "RPO Swarm Demo",
            description: "Demonstration of coordinated swarm behavior for proximity operations.",
            status: "upcoming"
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-20 pb-20">
            <SEO
                title="Roadmap"
                description="Follow Orbital Robotics' journey and future milestones as we build the infrastructure for the space economy."
            />
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Strategic Roadmap</h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Our path to building the essential infrastructure for the orbital economy.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto mb-24">
                    {milestones.map((milestone, index) => (
                        <RoadmapItem key={index} {...milestone} />
                    ))}
                </div>

                {/* Investor CTA */}
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-surface to-background border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">For Investors</h2>
                        <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                            Interested in fueling the future of space infrastructure? Request our investor deck and detailed technical roadmap.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full text-lg font-medium transition-all transform hover:scale-105"
                        >
                            Request Investor Materials
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
