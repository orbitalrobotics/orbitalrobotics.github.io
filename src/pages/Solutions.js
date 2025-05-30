import React from 'react';
import './Solutions.css'; // CSS file for styling

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import catch_montage from "../assets/video/ai_catch_montage.mp4"
import ar3_ai_view_catch from "../assets/video/ai_view_ar3_catch.mp4"
import ar3_catch from "../assets/video/ar3_catch.mp4"
import dual_arm_ik from "../assets/video/dual_arm_ik_obj_grasp.mp4"
import free_float_grasp from "../assets/video/free-float-cube-grasp.mp4"
import pose_est from "../assets/video/pose_estimation_fast.mp4"
import single_arm_grasp from "../assets/video/single_arm_cube_catch.mp4"
import single_arm_planning from "../assets/video/single_arm_planning.mp4"
import single_arm_docking from "../assets/video/single_arm_docking.mp4"
import free_floating_image from "../assets/images/free_floating_static.png"

function Item(props)
{
    return (
        <div className='video-container'>
            <p>{props.item.name}</p>
            <div className='video-wrapper'><video src={props.item.video} autoPlay loop muted /></div>
        </div>
    )
}

function Solutions(props) {

    var items = [
        // {
        //     video: catch_montage,
        //     name: "Deep Reinforcement Learning",
        //     description: "Hello World!"
        // },
        {
            image: free_floating_image,
            name: "Free Floating Servicer",
            description: "Free Floating Servicer"

        },
        {
            video: ar3_ai_view_catch,
            name: "AI Powered Catching with Computer Vision",
            description: "AI Powered Catching with Computer Vision"
        },
        {
            video: ar3_catch,
            name: "Deep Reinforcement Learning Grasp with Hardware",
            description: "Deep Reinforcement Learning Grasp with Hardware"
        },
        {
            video: dual_arm_ik,
            name: "Physics Informed System Identification Based Inverse Kinematics",
            description: "Physics Informed System Identification Based Inverse Kinematics"
        },
        {
            video: free_float_grasp,
            name: "AI Powered Motion and Grasp Planning",
            description: "AI Powered Motion and Grasp Planning"
        },
        {
            video: pose_est,
            name: "Precise Pose Estimation",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            video: single_arm_grasp,
            name: "AI Powered Motion and Grasp Planning",
            description: "AI Powered Motion and Grasp Planning"
        },
        {
            video: single_arm_planning,
            name: "Real time Motion Planning",
            description: "Real time Motion Planning",
        },

        {
            video: single_arm_docking,
            name: "AI Powered Docking",
            description: "AI Powered Docking",
        }
    ]

    return (
        <div className="solutions-container">
            <div className="solutions-background">
                <div className="solutions-content">
                    <h1>Our Robotic Solutions</h1>
                    <p>
                        Cutting-edge robotic technologies tailored to solve complex challenges across industries.
                    </p>
    
                    {
                        items.map((item, i) => (
                            <div className='video-container' key={i}>
                                <p>{item.name}</p>
                                <div className='video-wrapper'>
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

export default Solutions;