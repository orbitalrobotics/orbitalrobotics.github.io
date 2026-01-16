import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import SaveHubblePreview from '../../assets/images/news/save_hubble_preview.png';
import SaveHubbleRoboticArm from '../../assets/images/news/save_hubble_robotic_arm.png';
import SaveHubbleServicing from '../../assets/images/news/save_hubble_servicing.png';

const SaveHubble = () => {
    return (
        <div className="min-h-screen bg-background pt-20 pb-20">
            <SEO
                title="Save Hubble Coalition"
                description="Join the Save Hubble Coalition - A collaborative effort to preserve one of humanity's greatest scientific achievements through innovative on-orbit servicing."
            />
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-12 text-center">
                    <img
                        src={SaveHubblePreview}
                        alt="Hubble Space Telescope"
                        className="w-full max-w-2xl mx-auto rounded-2xl mb-8 shadow-2xl"
                    />
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Save Hubble Coalition
                    </h1>
                    <p className="text-text-secondary">January 2026</p>
                </div>

                <div className="prose prose-lg prose-invert mx-auto">
                    <p className="lead text-xl text-white mb-8">
                        The Hubble Space Telescope has been humanity's eye on the universe for over three decades. Now, it needs our help to continue its groundbreaking mission.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Challenge</h2>
                    <p className="text-text-secondary mb-4">
                        An increase in solar activity has caused the Hubble Space Telescope to drift lower in orbit than previously expected. Without intervention, Hubble will re-enter the atmosphere, posing a significant risk. Previous studies determined there is a 1:240 chance of a fatal scenario during uncontrolled reentry, as many of the telescope's large components will not burn up completely.
                    </p>
                    <p className="text-text-secondary mb-4">
                        Current analysis shows Hubble's perigee could reach critical altitude (400 km) as early as December 2027 in worst-case scenarios, or November 2028 nominally. Urgent action is needed to capture and boost the telescope before this window closes.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Mission Approach</h2>
                    <p className="text-text-secondary mb-4">
                        Orbital Robotics is developing a low-cost, non-invasive servicing mission to save Hubble. Our approach involves softly docking with Hubble using autonomous robotic arms and the existing Soft Capture Mechanism (SCM), then boosting it to a higher, stable orbit. We also plan to mount star trackers to provide attitude determination, replacing the faulty gyroscopes.
                    </p>
                    <p className="text-text-secondary mb-4">
                        The mission utilizes a commercially available spacecraft bus combined with Orbital Robotics' proprietary 1-meter, 7-degree-of-freedom robotic arms and AI-powered guidance and control systems. Our patent-pending neural network approach provides safety-critical autonomous control while maintaining the verification standards required for space missions.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Technologies</h2>
                    <ul className="text-text-secondary mb-6 list-disc pl-6 space-y-2">
                        <li><strong className="text-white">ASTRA-P Guidance & Control:</strong> Patent-pending AI-powered system designed for highly dynamic scenarios including capturing tumbling spacecraft</li>
                        <li><strong className="text-white">NavIQ Perception:</strong> Vision-based navigation for six degree-of-freedom pose estimation with ±3 cm accuracy</li>
                        <li><strong className="text-white">Autonomous Robotic Arms:</strong> 1-meter, 7-DOF arms scheduled for on-orbit testing in 2026</li>
                        <li><strong className="text-white">Star Tracker Payload:</strong> Four star trackers with solar panels for independent attitude determination</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">Expert Advisory Team</h2>
                    <p className="text-text-secondary mb-4">
                        This mission concept has been developed with guidance from an exceptional team of advisors, including:
                    </p>
                    <ul className="text-text-secondary mb-6 list-disc pl-6 space-y-2">
                        <li><strong className="text-white">Dr. John Grunsfeld:</strong> NASA astronaut with five missions including three Hubble servicing missions</li>
                        <li><strong className="text-white">Michael Good:</strong> NASA astronaut with two missions including the final Hubble servicing mission (SM4)</li>
                        <li><strong className="text-white">Dr. Gordon Roesler:</strong> Program manager for DARPA's Robotic Servicing of Geosynchronous Satellites Program</li>
                        <li><strong className="text-white">Chris Sembroski:</strong> Commercial astronaut on the Inspiration4 mission</li>
                    </ul>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                        <img
                            src={SaveHubbleRoboticArm}
                            alt="Robotic arm servicing Hubble"
                            className="rounded-xl shadow-lg"
                        />
                        <img
                            src={SaveHubbleServicing}
                            alt="Hubble servicing mission"
                            className="rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Call to Action Section - at the bottom */}
                    <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8 mt-12 border border-primary/30">
                        <h3 className="text-2xl font-bold text-white mb-4">Join the Save Hubble Coalition</h3>
                        <p className="text-text-secondary mb-6">
                            Join our LinkedIn group to stay up to date on mission developments and connect with others passionate about preserving Hubble. If you have expertise, resources, or services that could support this mission, we'd love to hear from you.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://www.linkedin.com/groups/16897016/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-[#0077B5] hover:bg-[#005885] text-white font-bold rounded-lg transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                Stay Updated on LinkedIn
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-colors"
                            >
                                Offer Your Support
                                <span className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaveHubble;
