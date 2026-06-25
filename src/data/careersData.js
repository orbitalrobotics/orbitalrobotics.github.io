const careersData = [
  // {
  //   slug: 'hardware-engineer',
  //   title: 'Hardware Engineer',
  //   category: 'Engineering',
  //   department: 'Hardware',
  //   location: 'Huntsville, AL',
  //   type: 'Full-Time',
  //   salary: '$90,000 – $120,000 / year',
  //   tallyEmbedSrc: 'https://tally.so/embed/0QAZzZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1',
  //   overview:
  //     '[Placeholder] We are looking for a Hardware Engineer to join the Orbital Robotics team. In this role, you will design, build, and test flight hardware for our robotic arm and spacecraft systems — contributing directly to technology that will service satellites in orbit.',
  //   responsibilities: [
  //     '[Placeholder] Design and develop mechanical and electrical hardware for robotic systems and spacecraft payloads',
  //     '[Placeholder] Own the full hardware lifecycle from concept through fabrication, assembly, and test',
  //     '[Placeholder] Work cross-functionally with software and GNC teams to integrate hardware with flight software and control systems',
  //     '[Placeholder] Write and maintain engineering documentation including drawings, test procedures, and design review materials',
  //     '[Placeholder] Participate in environmental testing (vibration, thermal vacuum) and anomaly resolution',
  //   ],
  //   requirements: [
  //     '[Placeholder] B.S. or higher in Mechanical Engineering, Electrical Engineering, Aerospace Engineering, or related field',
  //     '[Placeholder] Experience designing hardware that has been built and tested (prior flight hardware experience a strong plus)',
  //     '[Placeholder] Proficiency with CAD tools (SolidWorks, CATIA, or similar) and/or PCB design tools',
  //     '[Placeholder] Strong first-principles engineering intuition and attention to detail',
  //     '[Placeholder] Ability to work in a fast-paced startup environment and wear many hats',
  //   ],
  // },
  {
    slug: 'gnc-engineer',
    title: 'Guidance, Navigation & Control Engineer',
    category: 'Engineering',
    department: 'GNC',
    location: 'Seattle, WA',
    type: 'Full-Time',
    salary: '$110,000 – $180,000 / year',
    tallyEmbedSrc: 'https://tally.so/embed/Gx7qE2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1',
    overview:
      'Orbital Robotics is looking for engineers who have developed software for robots and/or satellites with backgrounds in orbital mechanics, state estimation, control theory, robot motion planning, computer vision, deep learning, free-flying/free-floating space robot dynamics, and flight software development. You will join a team of world class engineers with experience deploying neural networks on real-world space robot systems.',
    responsibilities: [
      'Architect, implement, test, and deploy GNC and robotic control algorithms from whiteboard concepts to production flight software.',
      'Build high-fidelity simulations that accurately model vehicle and robot dynamics, sensor noise, and environmental perturbations.',
      'Train, optimize, and deploy control systems and neural networks for real-world systems for trajectory execution and computer vision tasks.',
      'Integrate and debug GNC and AI algorithms in simulation and on hardware.',
    ],
    requirements: [
      "Bachelor's Degree (or higher) in: Aerospace Engineering, Computer Science, Physics, Robotics, or a related engineering discipline.",
      'Software development experience in C, C++ and Python',
    ],
    preferredQualifications: [
      {
        category: 'Spacecraft Systems and GNC',
        items: [
          { title: 'Space Heritage', description: 'You have written code or built hardware that has flown and operated in space.' },
          { title: 'Orbital Mechanics', description: 'You have a deep understanding of Orbit Determination and Control, and Rendezvous and Proximity Operations (RPO).' },
          { title: 'Safety-Critical Software', description: 'Experience developing software under rigorous standards such as DO-178C or NPR-7150.2' },
        ],
      },
      {
        category: 'Robotics and Control',
        items: [
          { title: 'Robotic Manipulation', description: 'Experience leveraging robotic arm kinematics, dynamics, and motion planning to manipulate objects with robotic arms.' },
          { title: 'Advanced Control Methods', description: 'Practical implementation model predictive control and force-based control strategies including impedance and admittance control.' },
          { title: 'Optimization', description: 'Proficiency with sequential convex programming, Levenberg-Marquardt, Gauss-Newton, Newton-Raphson, and Gradient Descent algorithms.' },
        ],
      },
      {
        category: 'Autonomy, AI, and State Estimation',
        items: [
          { title: 'Estimation and Mapping', description: 'Experience deploying state estimation (EKF, UKF), visual odometry, simultaneous localization and mapping, structure from motion and 3D reconstruction algorithms on hardware systems.' },
          { title: 'Computer Vision', description: 'Experience deploying and verifying video object detection, segmentation, and pose estimation algorithms on hardware systems.' },
          { title: 'Deep Learning', description: 'Hands-on experience with Deep Reinforcement Learning using PyTorch or alternatives (e.g. Tensorflow) and a proven track record of deploying neural networks to real-world, edge-compute systems.' },
          { title: 'AI System Verification', description: 'Experience verifying AI controlled hardware systems such as robots or autonomous vehicles.' },
        ],
      },
    ],
  },
];

export default careersData;
