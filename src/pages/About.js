import React from 'react';
import './About.css';

import free_floating_image from "../assets/images/free_floating_static.png";
import ar3_ai_view_catch from "../assets/video/ai_view_ar3_catch.mp4";
import ar3_catch from "../assets/video/ar3_catch.mp4";
import dual_arm_ik from "../assets/video/dual_arm_ik_obj_grasp.mp4";
import free_float_grasp from "../assets/video/free-float-cube-grasp.mp4";
import pose_est from "../assets/video/pose_estimation_fast.mp4";
import single_arm_grasp from "../assets/video/single_arm_cube_catch.mp4";
import single_arm_planning from "../assets/video/single_arm_planning.mp4";
import single_arm_docking from "../assets/video/single_arm_docking.mp4";
import hubble_capture_v1 from "../assets/video/hubble_capture_compressed.mp4";
import monte_carlo_satellite_control_img from "../assets/video/monte_carlo_satellite_control.gif";
import titans_module_deployment_v2 from "../assets/video/titans_module_deployment_compressed.mp4";
import segementaiton_demo_2 from "../assets/video/segmentation_demo2.mp4";

function About() {
    const items = [
        {
            image: free_floating_image,
            name: "Free Floating Servicer"
        },
        {
            video: ar3_ai_view_catch,
            name: "AI Powered Catching with Computer Vision"
        },
        {
            video: ar3_catch,
            name: "Deep Reinforcement Learning Grasp with Hardware"
        },
        {
            video: dual_arm_ik,
            name: "Physics Informed System Identification Based Inverse Kinematics"
        },
        {
            video: free_float_grasp,
            name: "AI Powered Motion and Grasp Planning"
        },
        {
            video: pose_est,
            name: "Precise Pose Estimation"
        },
        {
            video: single_arm_grasp,
            name: "AI Powered Motion and Grasp Planning"
        },
        {
            video: single_arm_planning,
            name: "Real time Motion Planning"
        },
        {
            video: single_arm_docking,
            name: "AI Powered Docking"
        },
        {
            video: hubble_capture_v1,
            name: "Hubble Capture With Model Predictive Reinforcement Learning"
        },
        {
            image: monte_carlo_satellite_control_img,
            name: "Monte Carlo Satellite Control Simulation"
        },
        {
            video: titans_module_deployment_v2,
            name: "Module Deployment"
        },
        {
            video: segementaiton_demo_2,
            name: "NavIQ few-shot semantic segmentation"
        }
    ];

    return (
        <div className="about-container">
            <div className="about-background">
                {/* <section className="vision-section">
                    <div className="vision-intro-card">
                        <h2 className="section-title">Our Vision</h2>
                        <p className="section-description">
                            The Future of In Space Satellite Spacecraft Servicing
                        </p>
                    </div>

                    <div className="vision-card">
                        <h3 className="card-heading">What is our product?</h3>
                        <p className="card-description">
                            Our autonomous spacecraft are equipped with robotic arms and can inspect, refuel, maintain, upgrade, transport, and repair satellites in orbit...
                        </p>
                    </div>

                    <div className="vision-card">
                        <h3 className="card-heading">The need for this type of product</h3>
                        <p className="card-description">
                            We currently discard billion-dollar satellites when they malfunction or run out of fuel...
                        </p>
                    </div>

                    <div className="vision-card">
                        <h3 className="card-heading">What technologies are we building?</h3>
                        <ul className="card-description">
                            <li>Multi-Arm Free-Flying Space Robots</li>
                            <li>Swarms of Free-Flying Space Robot Agents</li>
                            <li>Safety Critical Reinforcement and Imitation Learning</li>
                            <li>Semantic Simultaneous Localization and Mapping</li>
                            <li>Object Detection and Classification</li>
                            <li>Six Degree of Freedom Pose Estimation</li>
                            <li>Grasp Detection and Planning</li>
                        </ul>
                    </div>
                </section> */}

                {/* --- DEMOS SECTION --- */}
                <div className="solutions-content">
                    <h1>Our Robotic Demos</h1>
                    <p>
                        Cutting-edge robotic technologies tailored to solve complex challenges across industries.
                    </p>

                    {
                        items.map((item, i) => (
                            <div className="video-container" key={i}>
                                <p>{item.name}</p>
                                <div className="video-wrapper">
                                    {item.video ? (
                                        <video src={item.video} autoPlay loop muted />
                                    ) : (
                                        <img src={item.image} alt={item.name} />
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default About;
