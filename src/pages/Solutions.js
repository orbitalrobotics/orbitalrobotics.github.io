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
                                <li>We provide on-orbit delivery of hydrazine propellant to extend satellite life and enable maneuvering without regret.</li>
                                {/* <li>Life extension and maneuvering without regret enabler</li> */}
                            </ul>
                        </div>

                        <div className="solution-item">
                            <h3>Satellite Inspection, Reconnaissance & Surveillance</h3>
                            <ul>
                                <li>Our spacecraft conduct close-range, high-fidelity inspections and surveillance of resident space objects to support both commercial and defense applications</li>
                            </ul>
                        </div>

                        <div className="solution-item">
                            <h3>Satellite Repair & Upgrade</h3>
                            <ul>
                                <li>Coming Soon: We are developing capabilities for in-space satellite repair and modular hardware upgrades, minimizing the need for replacements and extending asset utility.</li>
                            </ul>
                        </div>

                        <div className="solution-item">
                            <h3>Orbital Station Assembly and Servicing</h3>
                            <ul>
                                <li>Coming Soon: We are building toward full-service support for the assembly, maintenance, and logistics of orbital stations to enable scalable infrastructure in space.</li>
                            </ul>
                        </div>

                        <div className="solution-item">
                            <h3>Space Debris Sentinel</h3>
                            <ul>
                                <li>Our spacecraft are designed to actively defend client assets from space debris.</li>
                                <li>We capture hazardous debris that threatens satellite operations, helping to mitigate the need for collision avoidance maneuvers while contributing to the broader effort to reduce space debris in orbit.</li>
                                {/* <li>Mitigates collision avoidance maneuvers while reducing space debris problem</li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="solution-category">
                        <h2 className="solution-heading">Orbital Operation Toolkits</h2>

                        <div className="solution-item">
                            <h3>ASTRA-P (Patent Pending)</h3>
                            <ul>
                                <li>Autonomous Stable Trajectory Reinforcement Algorithm with Prediction</li>
                                <li>Autonomous guidance and control framework to enable robust trajectory planning for rendezvous, proximity operations, docking, robotic manipulation, and terrain relative guidance (lunar and asteroids).</li>
                            </ul>
                        </div>

                        <div className="solution-item">
                            <h3>NavIQ (Patent Pending)</h3>
                            <ul>
                                <li>Intelligent vision-based perception software for resident space object and lunar/asteroid relative navigation.</li>
                                {/* <li>Working with Orbital Composites to develop a 3D printing defect detection variation</li>
                                <li>Working with Enduralock to develop a fastener pose estimation variation</li> */}
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
                                <li>Our state-of-the-art hardware-in-the-loop (HIL) facility emulates relative dynamics and contact dynamics in real-time by moving the client spacecraft relative to our free-flyer with a robotic arm mounted on perpendicular linear actuators. The HIL incorporates a high-fidelity digital twin that simulates spacecraft-arm dynamic coupling, contact dynamics, and visual input via ray-traced rendering.</li>
                                {/* <li>Combines a digital twin of the system with robotic hardware capable of emulating relative motion between spacecraft</li>
                                <li>Leverages Nvidia GPUs and includes multi-manipulator dynamics, contact dynamics, and high-fidelity ray tracing</li>
                                <li>Enables full system verification including onboard cameras and perception systems in real time</li> */}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Solutions;
