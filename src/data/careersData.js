const careersData = [
  {
    slug: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    category: 'Engineering',
    department: 'Hardware',
    location: 'Huntsville, AL',
    type: 'Full-Time',
    salary: '$95,000 – $145,000 / year',
    tallyEmbedSrc: 'https://tally.so/embed/0QAZzZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1',
    overview:
      'Orbital Robotics is seeking a Founding Mechanical Engineer to help pioneer the future of in-orbit infrastructure. You’ll join a team of world-class engineers building the robotic systems necessary to transition the satellite industry from an expendable paradigm into a sustainable, reusable ecosystem. The ideal candidate will bring hands-on experience in the design, development, and integration of complex hardware systems for space, robotics, or high-reliability applications, with a passion to build the infrastructure enabling satellite servicing, refueling, and debris mitigation in support of human expansion into the solar system.',
    responsibilities: [
      'Drive the “cradle-to-grave” hardware development lifecycles for mechanical systems, from early prototyping to flight-ready integration to real-world deployment etc.',
      'Design and integrate complex robotic hardware systems for on-orbit applications, specifically focusing on multi-DOF robotic arms and end effectors.',
      'Perform comprehensive structural & thermal analysis using FEA to ensure compliance with extreme on-orbit environments.',
      'Take complete ownership of translating CAD models into physical reality by assembling, integrating, and troubleshooting hardware.',
      'Support a range of qualification testing (TVAC, shock, vibration, etc.).',
    ],
    requirements: [
      'Bachelors degree in Mechanical Engineering, Aerospace Engineering, or a related discipline from an ABET accredited university.',
      '2+ years of hands-on hardware development experience, with a focus on mechanical design, robotics, or satellite systems.',
      'Strong design and integration skills using 3D CAD software (Solidworks preferred).',
      'Experience with mechanical analysis (FEA) and design for manufacturing strategies.',
      'Hands on experience with prototyping tools including CNC machining and 3D printing.',
      'General familiarity with Linux and Python.',
      'A proactive, self-starter mentality with the ability to effectively collaborate in a multi-disciplinary team and provide technical guidance.',
      'Willing to work on-site in Madison, AL, with occasional travel to Seattle.',
    ],
    preferredQualifications: [
      {
        category: 'Education & Experience',
        items: [
          { title: 'Advanced Degree', description: 'Masters Degree/PhD in Mechanical Engineering, Aerospace Engineering, or a related discipline from an ABET accredited university.' },
          { title: 'Robotic Arms', description: 'Experience with designing and operating robotic arms.' },
        ],
      },
      {
        category: 'Testing & Qualification',
        items: [
          { title: 'Qualification Testing', description: 'Experience conducting or supporting qualification testing for space-grade or high-reliability hardware.' },
          { title: 'Radiation Hardening', description: 'Experience with radiation hardening and shielding techniques for SEE/TID mitigation.' },
          { title: 'Test Benches', description: 'Experience building and operating complex test benches that simulate flight environments to validate sensor/actuator interactions.' },
        ],
      },
    ],
  },
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
      'Orbital Robotics is looking for a founding GNC Engineer who has developed software for robots and/or satellites with backgrounds in orbital mechanics, state estimation, control theory, robot motion planning, computer vision, deep learning, free-flying/free-floating space robot dynamics, and flight software development. You will join a team of world class engineers with experience deploying neural networks on real-world space robot systems.',
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
  {
    slug: 'embedded-software-engineer',
    title: 'Embedded Software Engineer',
    category: 'Engineering',
    department: 'Software',
    location: 'Seattle, WA or Huntsville, AL · Hybrid',
    type: 'Full-Time',
    salary: '$110,000 – $140,000 / year',
    tallyEmbedSrc: 'https://tally.so/embed/5BDDQE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1',
    overview:
      'Orbital Robotics is looking for engineers who have deployed embedded software for safety critical systems at scale. While we are deploying spacecraft with robotic arms to space, any engineer experienced with robotic systems, autonomous vehicles, or avionics will be a great fit.',
    responsibilities: [
      'Architect, implement, test, and deploy real-time embedded C/C++ software from bare-metal bring-up to production hardware.',
      'Develop device drivers and high-speed communication protocols to tightly integrate actuators, motor controllers, and complex sensor payloads.',
      'Optimize low-level firmware and RTOS to guarantee the strict timing and latencies required for high-bandwidth robotic control, dynamic movement, and manipulation.',
      'Design fault-tolerant software architectures and safety systems that gracefully handle hardware degradation, thermal limits, and unexpected physical disturbances.',
      'Integrate and debug embedded systems directly on full-scale robots and hardware-in-the-loop test frameworks.',
    ],
    requirements: [
      'Bachelor’s degree in electrical engineering, computer science, physics, robotics, or related engineering discipline.',
      'Software development experience in C, C++ and Linux',
    ],
    preferredQualifications: [
      {
        category: 'Firmware & Embedded Systems',
        items: [
          { title: 'Bare-Metal & RTOS', description: 'Experience implementing low-level software on bare-metal systems and RTOS.' },
          { title: 'Motor Control', description: 'Experience with brushless motor controllers and FOC algorithm implementation.' },
        ],
      },
      {
        category: 'Safety-Critical & Real-Time Systems',
        items: [
          { title: 'Safety-Critical Software', description: 'Experience deploying for safety critical systems including aircraft avionics or autonomous vehicles.' },
          { title: 'Real-Time Processors', description: 'Experience targeting high-reliability, real-time processors used in automotive powertrain, aerospace avionics, or robotic actuation.' },
        ],
      },
    ],
  },
];

export default careersData;
