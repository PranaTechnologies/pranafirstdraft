export const SITE_URL = "https://pranafirstdraft.vercel.app";

export const BRAND = {
  name: "Perception Labs",
  shortCode: "PL",
  tagline: "Intelligence for Autonomous Machines",
  concept: "The Perception Field",
  headline: "Machines that understand the world they move through.",
  heroSupporting:
    "Perception Labs develops visual-inertial navigation, spatial perception and onboard autonomy systems for UAVs and robotic platforms. We connect sensing, state estimation and embedded intelligence to help autonomous machines operate in complex real-world environments.",
  location: "Bhubaneswar, Odisha, India",
} as const;

export const CONTACT_INFO = {
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSda_XI8n_Why7Bb0ISG3kd0vG2EHEMOAcq1GkcoLdHicvT7TA/viewform",
  email: "connect@perceptionlab.in",
  phone: "+91-8280897228",
  phoneHref: "tel:+918280897228",
  location: "Bhubaneswar, Odisha, India",
} as const;

export const NAV_LINKS = [
  { label: "Technology", href: "/technology" },
  { label: "Systems", href: "/systems" },
  { label: "Applications", href: "/applications" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
] as const;

export const AUTOMATION_STAGES = [
  {
    index: "01",
    stage: "Scripted Automation",
    description:
      "Machines execute predefined tasks and handle limited variations in controlled environments.",
  },
  {
    index: "02",
    stage: "Perceptive Automation",
    description:
      "Machines perceive their surroundings, estimate their position, navigate dynamic environments, and adapt to changing conditions.",
  },
  {
    index: "03",
    stage: "Generalized Automation",
    description:
      "Machines generalize across tasks, handle unfamiliar environments, and perform complex physical actions in the real world.",
  },
] as const;

export const SPATIAL_GAPS = [
  {
    number: "01",
    label: "POSITION",
    question: "Where am I?",
    description:
      "Autonomous platforms require consistent local and global positioning in reference to their environment to operate reliably.",
  },
  {
    number: "02",
    label: "MOTION",
    question: "How am I moving?",
    description:
      "Machines must continuously estimate velocity, orientation, and trajectory despite sensor noise, drift, and changing operating conditions.",
  },
  {
    number: "03",
    label: "ENVIRONMENT",
    question: "What surrounds me?",
    description:
      "Raw sensor measurements must be transformed into a consistent spatial representation of obstacles, terrain, and structure.",
  },
] as const;

export const LEGACY_LIMITATIONS = [
  "GNSS-dependent positioning that fails under canopy, indoor structures, or interference",
  "Offline mapping workflows with heavy post-processing computation loads",
  "Limited onboard spatial understanding under tight size, weight, and power envelopes",
] as const;

export type TechnologySlug =
  | "sensing"
  | "perception"
  | "state-estimation"
  | "spatial-intelligence"
  | "embedded-autonomy";

export interface TechnologySpec {
  slug: TechnologySlug;
  layerNumber: string;
  shortTitle: string;
  stackSummary: string;
  summary: string;
  overview: string;
  feedbackNote: string;
  graphic: "sensing" | "perception" | "estimation" | "spatial" | "autonomy";
  focusAreas: Array<{
    label: string;
    detail: string;
  }>;
  inputs: string[];
  outputs: string[];
}

export const TECHNOLOGY_LAYERS: TechnologySpec[] = [
  {
    slug: "sensing",
    layerNumber: "01",
    shortTitle: "Sensing",
    stackSummary: "Cameras, IMUs, LiDAR and sensor synchronization",
    summary:
      "Cameras, inertial sensors, optional depth/LiDAR payloads, and hardware-aware synchronization.",
    overview:
      "Every downstream estimation and autonomy capability depends on reliable physical measurements. We integrate onboard camera feeds, inertial measurement units, and optional auxiliary sensors with explicit timestamping and calibration.",
    feedbackNote:
      "Receives exposure, frame-rate, and sensor health directives from Autonomy and Estimation.",
    graphic: "sensing",
    focusAreas: [
      {
        label: "Camera & IMU Acquisition",
        detail:
          "Synchronized image streams paired with high-rate angular velocity and linear acceleration measurements.",
      },
      {
        label: "Auxiliary Sensor Support",
        detail:
          "Optional integration of barometer, GNSS, LiDAR, and pre-recorded environmental reference maps when available.",
      },
      {
        label: "Intrinsic & Extrinsic Calibration",
        detail:
          "Modeling lens geometry, sensor biases, and rigid airframe mounting transforms across platforms.",
      },
    ],
    inputs: [
      "Optical Camera Streams",
      "High-Rate IMU Measurements",
      "Optional Barometer, LiDAR, GNSS",
    ],
    outputs: [
      "Timestamped Sensor Packets",
      "Calibrated Frame Geometry",
      "Exposure & Timing Metadata",
    ],
  },
  {
    slug: "perception",
    layerNumber: "02",
    shortTitle: "Perception",
    stackSummary: "Feature extraction, tracking and environmental observations",
    summary:
      "Feature extraction, visual tracking, and environmental observations across dynamic lighting and motion.",
    overview:
      "Perception extracts persistent geometric features and structural cues from onboard visual streams, enabling downstream estimators to track motion continuously across complex indoor and outdoor scenes.",
    feedbackNote:
      "Exchanges active keyframe priors with State Estimation and Spatial Intelligence.",
    graphic: "perception",
    focusAreas: [
      {
        label: "Feature Extraction & Tracking",
        detail:
          "Selecting and tracking stable visual landmarks across consecutive camera frames under agile UAV dynamics.",
      },
      {
        label: "Landscape & Map Correspondence",
        detail:
          "Matching live downward- or forward-looking imagery against reference site maps for global localization cues.",
      },
      {
        label: "Outlier & Quality Rejection",
        detail:
          "Filtering transient motion, reflections, and unreliable visual observations before state updates.",
      },
    ],
    inputs: [
      "Calibrated Image Frames",
      "State Prediction Priors",
      "Optional Reference Site Imagery",
    ],
    outputs: [
      "Tracked Visual Features",
      "Global Match Candidates",
      "Visual Tracking Confidence",
    ],
  },
  {
    slug: "state-estimation",
    layerNumber: "03",
    shortTitle: "State Estimation",
    stackSummary: "Visual-inertial odometry, sensor fusion and localization",
    summary:
      "Visual-inertial odometry, multi-sensor fusion, and consistent local or global localization.",
    overview:
      "State Estimation fuses high-rate inertial kinematics with visual feature tracks—and optional global visual map matches or auxiliary sensors—to produce smooth 6-DoF pose, velocity, attitude, and uncertainty estimates.",
    feedbackNote:
      "Supplies motion priors back to Perception tracking and triggers fallback modes in Autonomy.",
    graphic: "estimation",
    focusAreas: [
      {
        label: "Local Visual-Inertial Odometry (~30 Hz)",
        detail:
          "Continuous local pose and velocity estimation using onboard camera and IMU measurements without requiring prior maps.",
      },
      {
        label: "Global Visual Localization (~1 Hz)",
        detail:
          "Optional absolute position updates (WGS84) derived by matching camera observations against geo-referenced site maps.",
      },
      {
        label: "Health-Aware Multi-Source Fusion",
        detail:
          "Monitoring sensor signal quality, prioritizing reliable inputs, and rejecting degraded measurements.",
      },
    ],
    inputs: [
      "IMU Kinematics",
      "Tracked Visual Features",
      "Optional Global Visual Pose & Barometer",
    ],
    outputs: [
      "6-DoF Pose, Velocity & Heading",
      "Relative Height / AGL",
      "Localization Confidence & Health",
    ],
  },
  {
    slug: "spatial-intelligence",
    layerNumber: "04",
    shortTitle: "Spatial Intelligence",
    stackSummary: "Mapping, geometry and environmental representation",
    summary:
      "Local spatial mapping, 3D geometry reconstruction, and environmental understanding.",
    overview:
      "Spatial Intelligence converts pose histories and sensor observations into structured representations of the surrounding environment—supporting obstacle awareness, corridor traversal, and consistent local reference frames.",
    feedbackNote:
      "Provides geometric constraints to State Estimation and navigable space models to Autonomy.",
    graphic: "spatial",
    focusAreas: [
      {
        label: "Dynamic Local Mapping",
        detail:
          "Constructing and refining local geometric representations directly onboard without heavy offline post-processing.",
      },
      {
        label: "Coordinate Frame Coherence",
        detail:
          "Maintaining consistent transformations across body, sensor, local navigation, and WGS84 reference frames.",
      },
      {
        label: "Environmental Context",
        detail:
          "Interpreting surface structure, elevation contours, and structural corridors around the vehicle.",
      },
    ],
    inputs: [
      "Estimated 6-DoF Trajectories",
      "Triangulated Points & Depth Cues",
      "Pre-Recorded Reference Maps",
    ],
    outputs: [
      "Local 3D Spatial Maps",
      "Obstacle & Corridor Geometry",
      "Aligned Reference Frames",
    ],
  },
  {
    slug: "embedded-autonomy",
    layerNumber: "05",
    shortTitle: "Autonomy",
    stackSummary: "Navigation, planning and onboard execution",
    summary:
      "Onboard navigation integration, flight-stack interfaces, and deterministic edge execution.",
    overview:
      "Autonomy brings perception and state estimation directly onto the machine itself—interfacing cleanly with flight controllers and ground control stations within strict onboard compute budgets.",
    feedbackNote:
      "Closes the loop with Sensing and Estimation via mission state, flight dynamics, and health monitoring.",
    graphic: "autonomy",
    focusAreas: [
      {
        label: "Flight-Stack & Middleware Integration",
        detail:
          "Direct integration interfaces for PX4 and ROS 2 autopilot architectures used across multirotor UAS platforms.",
      },
      {
        label: "Resource-Constrained Edge Compute",
        detail:
          "Running onboard without ground infrastructure dependencies or continuous external compute links.",
      },
      {
        label: "Operator Telemetry & Health",
        detail:
          "Reporting real-time localization confidence, tracking status, and fallback readiness to ground control displays.",
      },
    ],
    inputs: [
      "Fused Pose & Velocity (~30 Hz)",
      "Local Spatial Representations",
      "Vehicle & Mission Objectives",
    ],
    outputs: [
      "PX4 / ROS 2 Navigation Streams",
      "GCS Tracking Health Telemetry",
      "Autonomous Control Readiness",
    ],
  },
];

export const SYSTEM_CATEGORIES = [
  {
    id: "pivo",
    code: "01 / CORE ENGINE",
    name: "PIVO",
    category: "Core Visual-Inertial Navigation Engine",
    maturity: "Core Estimation Engine",
    summary:
      "Single-machine parallel visual-inertial odometry engine transforming synchronized camera and IMU measurements into real-time 6-DoF motion estimation on onboard compute.",
    href: "/systems/pivo",
    ctaLabel: "Explore PIVO Architecture",
  },
  {
    id: "navigation-systems",
    code: "02 / INTEGRATED STACK",
    name: "Navigation Systems",
    category: "Integrated Localization & Navigation Stack",
    maturity: "Onboard Flight Integration",
    summary:
      "Integrated UAS navigation module combining local VIO (~30 Hz) with optional global visual map matching (~1 Hz WGS84) and health-monitored state fusion for PX4 and ROS 2 platforms.",
    href: "/systems#navigation-systems",
    ctaLabel: "View Navigation System",
  },
  {
    id: "perception-modules",
    code: "03 / MODULAR CAPABILITIES",
    name: "Perception Modules",
    category: "Sensing, Tracking & Spatial Understanding",
    maturity: "Active Development",
    summary:
      "Modular multi-sensor fusion, spatial mapping, and feature-tracking capabilities adaptable to multirotor UAVs and mobile robotics architectures.",
    href: "/systems#perception-modules",
    ctaLabel: "View Perception Modules",
  },
  {
    id: "engineering-services",
    code: "04 / PARTNER DELIVERY",
    name: "Engineering Services",
    category: "Custom Hardware, Software & OEM Integration",
    maturity: "Available for OEM Partnerships",
    summary:
      "Bespoke camera-IMU payload selection, onboard compute bring-up, flight-stack integration, and operator dashboard integration tailored to OEM airframes and robotic chassis.",
    href: "/systems#engineering-services",
    ctaLabel: "Discuss Integration",
  },
] as const;

export const PIVO_SPEC = {
  pipeline: [
    "Camera + IMU",
    "Feature Tracking",
    "State Estimation",
    "Pose / Velocity / Covariance",
    "PX4 / ROS 2 Integration",
  ],
  howItWorks: [
    {
      step: "01 / SENSE",
      title: "Synchronized Visual & Inertial Capture",
      detail:
        "Onboard camera captures environmental visual features while the IMU measures high-rate angular velocity and linear acceleration.",
    },
    {
      step: "02 / FUSE",
      title: "Visual-Inertial State Estimation",
      detail:
        "Visual and inertial observations are fused to estimate motion, monitor signal quality, and constrain accumulated inertial drift.",
    },
    {
      step: "03 / LOCALIZE",
      title: "Continuous 6-DoF Navigation Output",
      detail:
        "Outputs position, velocity, attitude/heading, relative height (AGL), and tracking confidence in the vehicle reference frame.",
    },
  ],
  modes: [
    {
      name: "Visual Simultaneous Localization & Mapping (VIO)",
      cadence: "Local pose ~30 Hz",
      detail:
        "Continuous high-frequency relative pose estimation and local dynamic mapping without requiring pre-recorded site maps.",
    },
    {
      name: "Visual Global Localization (System Extension)",
      cadence: "Global pose ~1 Hz",
      detail:
        "Matches live downward-looking camera imagery against geo-referenced site maps (WGS84) to provide absolute position corrections when reference maps exist.",
    },
    {
      name: "Fused State Estimation Output",
      cadence: "Fused output ~30 Hz",
      detail:
        "Combines VIO, optional global map matches, and auxiliary sensors (barometer, GNSS, LiDAR) while filtering unreliable inputs.",
    },
  ],
  verifiedSpecs: [
    {
      label: "Primary Inputs",
      value: "Onboard camera feed + IMU (optional barometer, GNSS, LiDAR, pre-recorded site map)",
    },
    {
      label: "Primary Outputs",
      value: "Position, velocity, attitude & heading, relative height (AGL), confidence & tracking health",
    },
    {
      label: "Estimation Cadence",
      value: "~30 Hz local VIO & fused state output; ~1 Hz optional global visual map localization",
    },
    {
      label: "Flight Stack Interfaces",
      value: "PX4 and ROS 2 compatible interfaces; Ground Control Station / operator health display",
    },
    {
      label: "Compute Architecture",
      value: "Onboard edge companion compute module mounted directly on the vehicle",
    },
    {
      label: "Sensor Mounting & Sync",
      value: "Compatible with mounted downward-looking or forward camera + IMU payloads; requires calibrated timing and extrinsics",
    },
    {
      label: "Hardware & Licensing Tiers",
      value: "OEM Hardware Module (₹35,000 / unit), Software Stack License (₹10,000 / drone), Custom OEM Integration",
    },
    {
      label: "Operating Limitations",
      value: "Standalone VIO estimates relative local motion (accumulates drift over distance without global map matching or GNSS); relies on sufficient visual texture and synchronized sensor timestamps",
    },
  ],
  maturityTiers: {
    implemented: [
      "Core visual-inertial odometry pipeline and multi-sensor state fusion architecture",
      "PX4 / ROS 2 integration interfaces and operator navigation-health telemetry outputs",
      "Simulation and controlled lab evaluation workflows",
    ],
    inDevelopment: [
      "Combined local VIO (~30 Hz) + global WGS84 visual localization (~1 Hz) field validation",
      "Embedded compute profiling across partner OEM airframes",
      "Flight-stack closed-loop integration with drone service partners",
    ],
    planned: [
      "Expanded multi-rotor and ground robotics OEM platform profiles",
      "Commercial fleet licensing and indoor logistics integration packages",
    ],
  },
} as const;

export const COMMERCIAL_TIERS = [
  {
    tier: "HARDWARE",
    price: "₹35,000",
    unit: "per unit · OEM Module",
    detail:
      "Pre-integrated onboard companion compute and calibrated camera-IMU hardware module for direct airframe mounting.",
  },
  {
    tier: "SOFTWARE",
    price: "₹10,000",
    unit: "per platform · Stack License",
    detail:
      "Onboard visual-inertial navigation and spatial perception software license for compatible OEM compute.",
  },
  {
    tier: "INTEGRATION",
    price: "Custom",
    unit: "per OEM · One-time Engineering",
    detail:
      "Custom payload integration, calibration workflows, PX4/ROS 2 bring-up, and flight-stack validation support.",
  },
] as const;

export const APPLICATION_MATRIX = [
  {
    id: "uav-aerial-autonomy",
    index: "01",
    badge: "Primary Beachhead Application",
    title: "UAV & Aerial Autonomy",
    environment: "Multirotor Inspection · Low-Altitude Flight · GNSS-Degraded Airspace",
    maturity: "Partner Flight-Stack Integration",
    summary:
      "Built initially for multirotor UAV inspection, mapping, and industrial drone operations where GNSS is obstructed near structures or degraded at low altitude.",
    rows: [
      {
        problem: "GNSS unavailable or degraded near structures",
        capability: "Visual-inertial state estimation (~30 Hz) + optional global map matching",
        system: "PIVO + Navigation Systems",
        outcome: "Continuous onboard pose, velocity, and AGL output during outages",
      },
      {
        problem: "Need for seamless autopilot & GCS compatibility",
        capability: "PX4 / ROS 2 interfaces and tracking health signals",
        system: "Navigation Systems",
        outcome: "Drop-in primary or fallback navigation source for flight stacks",
      },
      {
        problem: "Limited payload weight & onboard power budget",
        capability: "Embedded edge execution without ground compute links",
        system: "PIVO Core Engine",
        outcome: "Fully onboard localization under UAV SWaP constraints",
      },
    ],
    graphic: "uav" as const,
  },
  {
    id: "industrial-systems",
    index: "02",
    badge: "Beachhead Expansion",
    title: "Industrial Drones & Infrastructure",
    environment: "Silos · Bridges · Industrial Plants · Forests & Terrain",
    maturity: "Field Evaluation & OEM Integration",
    summary:
      "Reliable navigation for aerial and mobile platforms inspecting industrial complexes, metallic structures, bridges, and vegetated sites where multipath distorts GNSS.",
    rows: [
      {
        problem: "GNSS multipath near steel structures & towers",
        capability: "Health-monitored fusion prioritizing visual-inertial cues",
        system: "Navigation Systems",
        outcome: "Reduced sensitivity to degraded satellite fixes",
      },
      {
        problem: "Dynamic inspection corridors without ground beacons",
        capability: "Local spatial mapping & landscape feature tracking",
        system: "Perception Modules",
        outcome: "Infrastructure-independent trajectory consistency",
      },
    ],
    graphic: "industrial" as const,
  },
  {
    id: "autonomous-robotics",
    index: "03",
    badge: "Expansion Market",
    title: "Autonomous Robotics & Indoor Logistics",
    environment: "Warehouses · Indoor Facilities · Mixed Perimeter Sites",
    maturity: "Planned Platform Expansion",
    summary:
      "Extending onboard spatial intelligence from aerial vehicles to ground and mobile robotics operating in indoor logistics hubs and GPS-shielded facilities.",
    rows: [
      {
        problem: "No GNSS penetration inside logistics centers",
        capability: "Onboard camera-IMU odometry & local geometry mapping",
        system: "PIVO + Perception Modules",
        outcome: "Continuous local localization across indoor aisles",
      },
      {
        problem: "Custom chassis & sensor layouts per robotics OEM",
        capability: "Custom sensor calibration & middleware integration",
        system: "Engineering Services",
        outcome: "Tailored perception stack adapted to vehicle kinematics",
      },
    ],
    graphic: "robotics" as const,
  },
  {
    id: "defence-security",
    index: "04",
    badge: "Qualified Capability",
    title: "Defence & Contested Operations",
    environment: "GNSS-Denied Airspace · Independent Onboard Sensing",
    maturity: "Under Evaluation · Strict Scope Qualifications",
    summary:
      "Visual-inertial estimation provides an independent onboard motion-estimation source during GNSS outages without relying on external beacons or continuous ground links. Standalone VIO does not automatically detect RF spoofing or guarantee navigation across zero-visibility conditions without complementary sensors.",
    rows: [
      {
        problem: "Loss of reliable GNSS positioning in denied airspace",
        capability: "Onboard camera-IMU odometry independent of RF broadcasts",
        system: "PIVO + Navigation Systems",
        outcome: "Self-contained relative trajectory estimation when visual features are observable",
      },
      {
        problem: "Requirement for mission-specific payloads (thermal/LiDAR)",
        capability: "Multi-sensor state fusion & custom OEM engineering",
        system: "Engineering Services",
        outcome: "Evaluated per platform and operating visibility envelope",
      },
    ],
    graphic: "defence" as const,
  },
];

export const ENGINEERING_DISCIPLINES = [
  "Visual-Inertial Odometry",
  "Camera–IMU Synchronization",
  "Multi-Sensor Fusion",
  "Visual Global Localization",
  "Embedded Edge Compute",
  "PX4 / ROS 2 Integration",
] as const;

export interface BlogArticle {
  slug: string;
  code: string;
  status: "Placeholder Technical Blog — Draft Template" | "Planned Technical Article";
  publishedDate: string;
  readingTime: string;
  author: string;
  discipline: string;
  title: string;
  summary: string;
  sections: Array<{
    heading: string;
    body: string[];
    equation?: string;
  }>;
  limitations: string[];
  references: string[];
}

export const FEATURED_BLOG_POST: BlogArticle = {
  slug: "camera-imu-synchronization-visual-inertial-navigation",
  code: "BLOG / 01",
  status: "Placeholder Technical Blog — Draft Template",
  publishedDate: "2026-11-26",
  readingTime: "6 min read",
  author: "Ayushman Bansal · Perception Labs Engineering",
  discipline: "Sensor Fusion & Timing",
  title: "Why Camera–IMU Synchronization Governs Visual-Inertial Stability",
  summary:
    "Placeholder engineering blog post documenting the timing problem, sensor coupling equations, verification checklist, and open experimental placeholders for our ongoing VIO pipeline work.",
  sections: [
    {
      heading: "1. The Engineering Problem",
      body: [
        "Visual-inertial odometry fuses high-frequency inertial measurements (angular rates and linear acceleration) with lower-frequency optical camera frames. While the IMU captures fast rotational dynamics between frames, visual observations constrain long-term inertial integration drift.",
        "If image exposure timestamps and IMU sample clocks drift or carry an uncalibrated time offset δt, rotational motion occurring during that offset produces false linear velocity errors and degraded feature triangulation during agile UAV maneuvers.",
      ],
    },
    {
      heading: "2. Architecture & Temporal Coupling",
      body: [
        "Our sensing pipeline aligns camera frame midpoint timestamps against continuous IMU pre-integration windows before state updates enter the optimization or filter back-end. In hardware-triggered configurations, frame capture aligns to a shared clock reference; in loosely coupled payloads, online time-offset calibration estimates residual skew.",
        "This placeholder template outlines the structural analysis; quantitative latency histograms and multi-trial replay curves from our testbeds will be published here once outdoor multi-trial logs are finalized.",
      ],
      equation: "p_cam(t) = R_imu(t + δt) · p_ext + t_imu(t + δt)",
    },
    {
      heading: "3. Verification & Evaluation Protocol (Placeholder)",
      body: [
        "Placeholder slot for recorded multirotor flight logs, IMU Allan-variance characterization plots, and ground-truth trajectory comparison metrics across indoor and outdoor runs.",
        "Before publishing numbers, each evaluation entry requires strict dataset provenance (hardware rig, sensor rates, clock sync mode, and trajectory window) rather than synthetic approximations.",
      ],
    },
  ],
  limitations: [
    "Note: This article is currently a structured placeholder draft demonstrating our technical blog format.",
    "Measured benchmark figures and recorded trajectory plots will replace placeholder notes only after multi-trial validation.",
  ],
  references: [
    "PX4 & ROS 2 Navigation Integration Interfaces (/systems/pivo)",
    "Layer 01 Sensing & Layer 03 State Estimation Architecture (/technology/state-estimation)",
  ],
};

export const UPCOMING_BLOG_TOPICS = [
  {
    code: "UPCOMING / 02",
    discipline: "Navigation Architecture",
    title: "Coupling ~30 Hz Local VIO with ~1 Hz Global Visual Map Localization",
    summary:
      "Designing state fusion that preserves smooth high-rate local flight control while eliminating unbounded long-horizon drift when geo-referenced site maps are available.",
  },
  {
    code: "UPCOMING / 03",
    discipline: "Embedded Systems",
    title: "Profiling Onboard Spatial Intelligence on Companion Compute",
    summary:
      "Memory layout, deterministic execution bounds, and health-status reporting for PX4 and ROS 2 UAS flight stacks.",
  },
] as const;

export const FOUNDERS = [
  {
    name: "Ayushman Bansal",
    role: "Co-Founder",
    expertise: "Robotics, Sensor Fusion, and Autonomous Systems",
    focus:
      "Leads state estimation, visual-inertial odometry architecture, and onboard sensor fusion pipelines.",
  },
  {
    name: "Lakshya Agrawal",
    role: "Co-Founder",
    expertise: "Project Management, Avionics, and Product Strategy",
    focus:
      "Leads avionics integration, UAV OEM partnerships, flight deployments, and system productization.",
  },
] as const;
