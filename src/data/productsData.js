import RoboticArmImg from '../assets/images/robotic-arm.png';
import SatelliteOSImg from '../assets/images/satellite-os.png';
import AstroBotImg from '../assets/images/astrobot.png';
import SwarmImg from '../assets/images/swarm-software.png';
import ComingSoonImg from '../assets/images/coming_soon.png';
import RoboticArmBlackImg from '../assets/images/robotic-arm-black-fairings.png';
import NavIQImg from '../assets/images/point_control.gif';

// Import Videos
import Ar3CatchVideo from '../assets/video/ar3_catch.mp4';
import CVViewVideo from '../assets/video/ai_view_ar3_catch.mp4';
import HubbleCaptureVideo from '../assets/video/hubble_capture_compressed.mp4';
import PoseEstimationVideo from '../assets/video/pose_estimation_fast.mp4';
import TitansDeploymentVideo from '../assets/video/titans_module_deployment_compressed.mp4';
import SegmentationDemoVideo from '../assets/video/segmentation_demo2.mp4';
import InSpaceSegmentationVideo from '../assets/video/in_space_segmentation_compressed.mp4';
import SwarmGif from '../assets/images/multi-agent-inspection (1).gif';

export const services = [
    {
        id: 'rpoc-service',
        title: "RPOC as a Service",
        category: "Service (Available Q4 2026)",
        description: "Rendezvous, Proximity Operations, and Capture (RPOC) service leveraging advanced computer vision and autonomous robotic manipulation.",
        videos: [Ar3CatchVideo, CVViewVideo]
    },
    {
        id: 'de-orbit-service',
        title: "De-orbit Service",
        category: "Service (Available 2028)",
        description: "End-of-life disposal services for satellites and debris removal to ensure sustainable orbital operations.",
        image: ComingSoonImg
    },
    {
        id: 'satellite-upgrade',
        title: "Satellite Upgrade",
        category: "Service (Available 2028)",
        description: "Hardware upgrades and component replacement for operational satellites to extend mission life and capabilities.",
        image: ComingSoonImg
    },
    {
        id: 'refueling',
        title: "Refueling",
        category: "Service (Available 2028)",
        description: "On-orbit refueling services to extend the operational lifespan of maneuverable spacecraft.",
        image: ComingSoonImg
    },
    {
        id: 'orbital-maneuver',
        title: "Orbital Maneuver",
        category: "Service (Available 2028)",
        description: "Tugging and relocation services for orbit raising, inclination changes, and constellation phasing.",
        image: ComingSoonImg
    },
    {
        id: 'data-center-maintenance',
        title: "Data Center Maintenance",
        category: "Service (Available 2030)",
        description: "Autonomous maintenance and servicing for orbital data centers and compute infrastructure.",
        image: ComingSoonImg
    },
    {
        id: 'asset-protection',
        title: "Asset Protection",
        category: "Service (Available 2030)",
        description: "Security and monitoring services for high-value space assets against orbital threats.",
        image: ComingSoonImg
    }
];

export const hardwareProducts = [
    {
        id: 'robotic-arms',
        title: "Robotic Arms",
        category: "Hardware",
        description: "Space-rated robotic manipulators designed for on-orbit servicing, assembly, and manufacturing. Features modular end-effectors and radiation-hardened electronics for long-duration missions.",
        image: RoboticArmBlackImg,
        imageFit: "contain",
        imageBg: "bg-black"
    },
    {
        id: 'astrobot',
        title: "AstroBot",
        category: "Hardware",
        description: "Autonomous free-flying vehicle for inspection and light-duty servicing. Equipped with advanced sensors and thrusters for precise proximity operations around sensitive assets.",
        image: AstroBotImg,
    },
    {
        id: 'orbital-assembly',
        title: "Orbital Assembly",
        category: "Hardware",
        description: "Automated assembly of large space structures using cooperative robotic systems.",
        image: ComingSoonImg,
        video: TitansDeploymentVideo
    }
];

export const softwareProducts = [
    {
        id: 'satellite-os',
        title: "SatelliteOS",
        category: "Software",
        description: "The intelligent operating system for next-generation spacecraft. Enables autonomous navigation, constellation management, and real-time edge processing of payload data.",
        image: SatelliteOSImg
    },
    {
        id: 'swarm-software',
        title: "SwarmSoftware",
        category: "Software",
        description: "Distributed intelligence for satellite constellations. Allows multiple assets to coordinate actions, share resources, and optimize mission objectives in real-time without ground intervention.",
        image: SwarmGif
    },
    {
        id: 'naviq',
        title: "NavIQ",
        category: "Software",
        description: "Advanced orbital dynamics and trajectory planning suite. Provides high-accuracy state estimation and maneuver planning for complex rendezvous and proximity operations.",
        video: InSpaceSegmentationVideo,
        videoFit: "cover",
        videoPosition: "bottom",
    },
    {
        id: 'astrap',
        title: "AstraP",
        category: "Software",
        description: "Propulsion management and optimization system. Maximizes fuel efficiency and station-keeping life through AI-driven thruster control and maneuver scheduling.",
        image: NavIQImg
    }
];
