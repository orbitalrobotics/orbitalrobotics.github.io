import React from 'react';
import './Solutions.css';

function Solutions() {
    return (
        <div className="solutions-container">
            <div className="solutions-background">
                <div className="solutions-content">
                    <h1 className="solutions-title">Solutions</h1>

                    <div className="solution-category">
                        <h2 className="solution-heading">Orbital Services</h2>

                        <div className="solution-item">
                            <h3>Spacecraft Refueling</h3>
                            <ul>
                                <li>On-orbit delivery of hydrazine propellant</li>
                                <li>Life extension and maneuvering without regret enabler</li>
                            </ul>
                        </div>

                        <div className="solution-item">
                            <h3>Satellite Inspection, Reconnaissance & Surveillance</h3>
                        </div>

                        <div className="solution-item">
                            <h3>Satellite Repair & Upgrade</h3>
                            <ul>
                                <li>Coming Soon</li>
                            </ul>
                        </div>

                        <div className="solution-item">
                            <h3>Orbital Station Assembly and Servicing</h3>
                        </div>

                        <div className="solution-item">
                            <h3>Space Debris Sentinel</h3>
                            <ul>
                                <li>Defense from space debris in orbit</li>
                                <li>Our spacecraft captures debris endangering our client’s satellites</li>
                                <li>Mitigates collision avoidance maneuvers while reducing space debris problem</li>
                            </ul>
                        </div>
                    </div>

                    <div className="solution-category">
                        <h2 className="solution-heading">Orbital Operation Toolkits</h2>

                        <div className="solution-item">
                            <h3>ASTRA-P</h3>
                            <ul>
                                <li>Autonomous Stable Trajectory Reinforcement Algorithm with Prediction</li>
                                <li>Autonomous guidance and control framework to enable robust trajectory planning for rendezvous, proximity operations, docking, robotic manipulation, and terrain relative guidance (lunar and asteroids).</li>
                            </ul>
                        </div>

                        <div className="solution-item">
                            <h3>NavIQ</h3>
                            <ul>
                                <li>Intelligent vision-based perception software for resident space object and lunar/asteroid relative navigation.</li>
                                <li>Working with Orbital Composites to develop a 3D printing defect detection variation</li>
                                <li>Working with Enduralock to develop a fastener pose estimation variation</li>
                            </ul>
                        </div>

                        <div className="solution-item">
                            <h3>Toolchanger</h3>
                            <ul>
                                <li>A standardized space qualified tool changer for ISAM companies.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="solution-category">
                        <h2 className="solution-heading">Ground Facilities</h2>

                        <div className="solution-item">
                            <h3>RPOD Hardware-in-the-Loop Verification Facility</h3>
                            <ul>
                                <li>State-of-the-art rendezvous, proximity operations and docking (RPOD) verification facility</li>
                                <li>Combines a digital twin of the system with robotic hardware capable of emulating relative motion between spacecraft</li>
                                <li>Leverages Nvidia GPUs and includes multi-manipulator dynamics, contact dynamics, and high-fidelity ray tracing</li>
                                <li>Enables full system verification including onboard cameras and perception systems in real time</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Solutions;
