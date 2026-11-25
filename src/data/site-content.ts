export const SITE_URL = "https://pranafirstdraft.vercel.app";

export const BRAND = {
  name: "Perception Labs",
  shortCode: "PL",
  tagline: "Perception & Autonomy for Autonomous Machines",
  concept: "The Perception Field",
  headline: "Machines that understand the world they move through.",
  heroSupporting:
    "Perception Labs builds onboard perception, spatial understanding, state estimation, and autonomous navigation software for aerial and robotic platforms. We turn multi-sensor measurements into real-time situational awareness at the edge.",
  location: "Bhubaneswar, Odisha, India",
} as const;

export const CONTACT_INFO = {
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSda_XI8n_Why7Bb0ISG3kd0vG2EHEMOAcq1GkcoLdHicvT7TA/viewform",
  email: "connect@perceptionlab.in",
  phone: "+91-8280897228",
  phoneHref: "tel:+918280897228",
  location: "Bhubaneswar, Odisha, India",
  companyLinkedin: "https://www.linkedin.com/company/perception-labs-auto/",
} as const;

export const NAV_LINKS = [
  { label: "Technology", href: "/technology" },
  { label: "Solutions", href: "/solutions" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
] as const;

export const SPATIAL_GAPS = [
  {
    number: "01",
    label: "PERCEIVE",
    question: "What surrounds the machine?",
    description:
      "Multi-sensor perception transforms camera feeds, inertial streams, and depth cues into structured spatial geometry of obstacles, terrain, and dynamic scenes.",
  },
  {
    number: "02",
    label: "UNDERSTAND",
    question: "Where is it and how is it moving?",
    description:
      "Cortex couples visual-inertial state estimation, multi-sensor fusion, and spatial mapping to maintain consistent pose and uncertainty estimates—even in degraded RF or GNSS environments.",
  },
  {
    number: "03",
    label: "ACT",
    question: "How does it operate onboard?",
    description:
      "Real-time spatial understanding feeds directly into flight stacks and vehicle controllers within strict edge compute, weight, and power envelopes.",
  },
] as const;

export const TECH_SYNTHESIS_PILLARS = [
  {
    index: "01",
    title: "Real-Time Machine Perception",
    description:
      "Extracts persistent visual features, depth structure, environmental context, and spatial geometry directly from synchronized onboard sensor suites without ground infrastructure.",
  },
  {
    index: "02",
    title: "Unified Field Autonomy",
    description:
      "Connects state estimation, spatial mapping, and health-monitored decision making directly into PX4 and ROS 2 vehicle control loops across unstructured environments.",
  },
] as const;

export const TECH_PRINCIPLES = [
  {
    number: "01",
    label: "PHYSICS-GROUNDED & HEALTH-AWARE",
    title: "Safe, verifiable, and signal-aware.",
    summary:
      "Every sensor source is monitored continuously for consistency, outlier contamination, and timing skew—prioritizing trustworthy cues and bounding estimation confidence before commands reach actuators.",
    highlights: [
      "Continuous localization confidence and tracking health telemetry",
      "Explicit separation between relative local estimates and global geo-referenced corrections",
    ],
  },
  {
    number: "02",
    label: "EDGE-FIRST COMPUTATION",
    title: "Built for onboard size, weight, and power limits.",
    summary:
      "Autonomy cannot depend on continuous cloud links or fragile ground workstations. Cortex executes its perception, estimation, and spatial mapping pipeline directly on compact onboard companion compute.",
    highlights: [
      "Deterministic real-time execution on aerial and mobile robot edge hardware",
      "Synchronized hardware and timestamp-calibrated multi-sensor capture",
    ],
  },
  {
    number: "03",
    label: "BEYOND NARROW ODOMETRY",
    title: "Unified perception and navigation on real missions.",
    summary:
      "Reliable machines need more than raw motion tracking. Coupling feature observation, local 3D scene representation, and guidance allows vehicles to navigate indoor structures, industrial sites, and contested airspace.",
    highlights: [
      "Bi-directional priors shared across Perception, State Estimation, and Autonomy",
      "Modular sensor adapters spanning optical, inertial, barometer, depth, and LiDAR",
    ],
  },
] as const;

export const TECH_SCALABILITY_MATRIX = [
  {
    title: "Multi-Sensor.",
    detail:
      "Synchronized optical cameras, high-rate IMUs, optional depth, LiDAR, barometer, and geo-referenced map cues.",
  },
  {
    title: "Multi-Layer.",
    detail:
      "Coupled five-layer architecture feeding estimation priors, map alignment, and health diagnostics across modules.",
  },
  {
    title: "Multi-Environment.",
    detail:
      "Engineered for industrial interiors, structural steel multipath, canopies, and GNSS-denied airspace.",
  },
  {
    title: "Multi-Platform.",
    detail:
      "Clean PX4 and ROS 2 interfaces adaptable across rotorcraft UAVs and autonomous ground platforms.",
  },
] as const;

export const TECH_ENGINE_TRIAD = [
  {
    code: "ENGINE 01",
    title: "Perception & Sensing Core",
    layers: "Layers 01–02",
    description:
      "Hardware-timed multi-sensor ingestion, intrinsic/extrinsic calibration, visual feature tracking, and scene-level outlier rejection.",
  },
  {
    code: "ENGINE 02",
    title: "Cortex Spatial & State Engine",
    layers: "Layers 03–04",
    description:
      "Unified ~30 Hz local state estimation, dynamic 3D local mapping, optional ~1 Hz geo-referenced alignment, and multi-source fusion.",
  },
  {
    code: "ENGINE 03",
    title: "Embedded Autonomy Interface",
    layers: "Layer 05",
    description:
      "Real-time trajectory guidance, obstacle awareness integration, and GCS operator telemetry for PX4 and ROS 2 vehicles.",
  },
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
    stackSummary: "Cameras, IMUs, depth, LiDAR, and sensor synchronization",
    summary:
      "Multi-modal cameras, inertial sensors, optional depth/LiDAR payloads, and hardware-aware synchronization.",
    overview:
      "Every perception and autonomy capability starts with reliable physical measurement. We integrate onboard optical streams, inertial measurement units, and optional depth or LiDAR sensors with deterministic timestamping and calibration.",
    feedbackNote:
      "Receives exposure, frame-rate, and sensor health directives from Autonomy and Estimation.",
    graphic: "sensing",
    focusAreas: [
      {
        label: "Multi-Sensor Capture & Timing",
        detail:
          "Synchronized image streams paired with high-rate angular velocity and linear acceleration measurements.",
      },
      {
        label: "Auxiliary Payload Fusion",
        detail:
          "Optional integration of barometer, GNSS, LiDAR, depth, and pre-recorded environmental reference maps.",
      },
      {
        label: "Intrinsic & Extrinsic Calibration",
        detail:
          "Modeling lens geometry, sensor biases, and rigid airframe mounting transforms across heterogeneous platforms.",
      },
    ],
    inputs: [
      "Optical & Depth Camera Streams",
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
    stackSummary: "Feature extraction, tracking, and scene understanding",
    summary:
      "Feature extraction, visual tracking, obstacle cues, and environmental observations across dynamic lighting and motion.",
    overview:
      "Perception extracts persistent geometric features, structural edges, and environmental observations from onboard visual and depth streams—turning raw imagery into machine-usable observations across complex indoor and outdoor environments.",
    feedbackNote:
      "Exchanges active keyframe and motion priors with State Estimation and Spatial Intelligence.",
    graphic: "perception",
    focusAreas: [
      {
        label: "Feature Extraction & Tracking",
        detail:
          "Selecting and tracking stable visual landmarks across consecutive camera frames under agile platform dynamics.",
      },
      {
        label: "Landscape & Map Correspondence",
        detail:
          "Matching live onboard imagery against reference site maps for global localization updates when maps exist.",
      },
      {
        label: "Outlier & Anomaly Rejection",
        detail:
          "Filtering transient dynamic motion, glare, reflections, and unreliable observations before fusion updates.",
      },
    ],
    inputs: [
      "Calibrated Image & Depth Frames",
      "State Prediction Priors",
      "Optional Reference Site Imagery",
    ],
    outputs: [
      "Tracked Visual & Structural Features",
      "Global Match Candidates",
      "Per-Observation Confidence",
    ],
  },
  {
    slug: "state-estimation",
    layerNumber: "03",
    shortTitle: "State Estimation",
    stackSummary: "Coupled visual-inertial fusion and multi-source localization",
    summary:
      "Multi-sensor state fusion, visual-inertial odometry, and consistent local or global localization inside Cortex.",
    overview:
      "State Estimation fuses high-rate inertial kinematics with visual feature tracks, optional global visual map matches, and auxiliary sensors to produce smooth 6-DoF pose, velocity, attitude, and calibrated uncertainty.",
    feedbackNote:
      "Supplies motion priors back to Perception tracking and triggers fallback modes in Autonomy.",
    graphic: "estimation",
    focusAreas: [
      {
        label: "Local State Estimation (~30 Hz)",
        detail:
          "Continuous high-rate local pose and velocity estimation using onboard camera and IMU measurements without external infrastructure.",
      },
      {
        label: "Global Visual Alignment (~1 Hz)",
        detail:
          "Optional absolute WGS84 position updates derived by aligning live observations with geo-referenced maps.",
      },
      {
        label: "Health-Monitored Multi-Source Fusion",
        detail:
          "Monitoring sensor signal integrity, prioritizing consistent cues, and isolating degraded inputs.",
      },
    ],
    inputs: [
      "IMU Kinematics",
      "Tracked Perception Features",
      "Optional Global Map Matches & Barometer",
    ],
    outputs: [
      "6-DoF Pose, Velocity & Heading",
      "Relative Height / AGL",
      "State Covariance & Health Status",
    ],
  },
  {
    slug: "spatial-intelligence",
    layerNumber: "04",
    shortTitle: "Spatial Intelligence",
    stackSummary: "Local 3D mapping, geometry, and environmental understanding",
    summary:
      "Onboard spatial mapping, 3D geometry reconstruction, and structured environmental representation.",
    overview:
      "Spatial Intelligence converts state estimates and perception cues into coherent local models of the surrounding environment—supporting obstacle awareness, navigable volume estimation, and consistent reference frame transformations.",
    feedbackNote:
      "Provides geometric constraints to State Estimation and navigable space representations to Autonomy.",
    graphic: "spatial",
    focusAreas: [
      {
        label: "Dynamic Local Mapping",
        detail:
          "Building and updating local geometric scene representations onboard without heavy offline post-processing.",
      },
      {
        label: "Coordinate Frame Coherence",
        detail:
          "Maintaining exact transforms across sensor, vehicle body, local navigation, and global reference frames.",
      },
      {
        label: "Terrain & Obstacle Geometry",
        detail:
          "Capturing structural surfaces, clearances, elevation contours, and corridor geometry around the machine.",
      },
    ],
    inputs: [
      "Estimated 6-DoF Trajectories",
      "Triangulated Landmarks & Depth Cues",
      "Pre-Recorded Site Geometry",
    ],
    outputs: [
      "Local 3D Spatial Maps",
      "Obstacle & Corridor Clearances",
      "Aligned Reference Frames",
    ],
  },
  {
    slug: "embedded-autonomy",
    layerNumber: "05",
    shortTitle: "Autonomy",
    stackSummary: "Navigation, guidance, and onboard vehicle execution",
    summary:
      "Onboard navigation integration, autonomous guidance readiness, and deterministic flight/robot middleware execution.",
    overview:
      "Autonomy brings perception, estimation, and spatial mapping directly onto the machine—interfacing cleanly with flight controllers, robotic middleware, and operator stations inside tight onboard compute budgets.",
    feedbackNote:
      "Closes the loop with Sensing and Estimation via vehicle dynamics, mission state, and system health.",
    graphic: "autonomy",
    focusAreas: [
      {
        label: "Autopilot & Middleware Integration",
        detail:
          "Native compatibility with PX4 and ROS 2 stacks across aerial multirotors and mobile robotics platforms.",
      },
      {
        label: "Infrastructure-Free Edge Execution",
        detail:
          "Operates autonomously onboard without external positioning beacons or persistent ground links.",
      },
      {
        label: "Operator Health Telemetry",
        detail:
          "Streams tracking quality, estimation confidence, and fallback readiness directly to operator stations.",
      },
    ],
    inputs: [
      "Fused 6-DoF State (~30 Hz)",
      "Local Spatial Maps & Clearances",
      "Vehicle & Mission Objectives",
    ],
    outputs: [
      "PX4 / ROS 2 Autonomy Streams",
      "GCS Tracking Health Telemetry",
      "Safe Fallback & Control Readiness",
    ],
  },
];

export const SYSTEM_CATEGORIES = [
  {
    id: "cortex",
    code: "01 / CORE ENGINE",
    name: "Cortex",
    category: "Unified Perception & Navigation Engine",
    maturity: "Core Autonomy Engine",
    summary:
      "Unified onboard perception and navigation engine transforming synchronized camera, inertial, and auxiliary sensor streams into real-time situational awareness, spatial mapping, and 6-DoF state estimation.",
    href: "/solutions/cortex",
    ctaLabel: "Explore Cortex Engine",
  },
  {
    id: "perception-suite",
    code: "02 / SPATIAL MODULES",
    name: "Perception & Mapping Modules",
    category: "Scene Understanding & Local Geometry",
    maturity: "Modular Edge Capabilities",
    summary:
      "Feature tracking, dynamic local mapping, obstacle clearance modeling, and visual map correspondence configurable for diverse aerial and mobile robotics payloads.",
    href: "/solutions#capabilities",
    ctaLabel: "View Capabilities",
  },
  {
    id: "navigation-stack",
    code: "03 / INTEGRATED AUTONOMY",
    name: "Onboard Autonomy Stack",
    category: "Perception-to-Flight Execution",
    maturity: "PX4 & ROS 2 Ready",
    summary:
      "End-to-end vehicle navigation combining ~30 Hz local state estimation, optional ~1 Hz geo-referenced visual matching, and health-monitored autopilot integration.",
    href: "/solutions#capabilities",
    ctaLabel: "View Autonomy Stack",
  },
  {
    id: "oem-engineering",
    code: "04 / PARTNER INTEGRATION",
    name: "Custom OEM Engineering",
    category: "Hardware, Calibration & Airframe Integration",
    maturity: "Partner Collaboration",
    summary:
      "Sensor payload selection, hardware time synchronization, edge companion bring-up, flight-stack integration, and operator telemetry tailored to partner vehicles.",
    href: "/contact",
    ctaLabel: "Discuss Integration",
  },
] as const;

export const CORTEX_SPEC = {
  pipeline: [
    "Multi-Sensor Input",
    "Perception & Features",
    "Spatial Mapping",
    "State Estimation",
    "Autonomy Execution",
  ],
  howItWorks: [
    {
      step: "01 / PERCEIVE",
      title: "Synchronized Sensing & Feature Observation",
      detail:
        "Synchronized cameras, IMUs, and optional depth/LiDAR payloads capture dense scene geometry, visual landmarks, and inertial dynamics at deterministic timestamps.",
    },
    {
      step: "02 / FUSE & MAP",
      title: "Unified State Estimation & Spatial Mapping",
      detail:
        "Cortex couples visual-inertial state estimation, multi-sensor signal health monitoring, and local 3D mapping to constrain drift and model surroundings in real time.",
    },
    {
      step: "03 / NAVIGATE & ACT",
      title: "Onboard Navigation & Flight-Stack Control",
      detail:
        "Delivers continuous ~30 Hz pose, velocity, relative altitude (AGL), spatial clearances, and optional ~1 Hz global map alignment straight into PX4 and ROS 2 stacks.",
    },
  ],
  modes: [
    {
      name: "Perception & Local Spatial SLAM",
      cadence: "Local output ~30 Hz",
      detail:
        "Real-time onboard feature tracking, 6-DoF state estimation, and local spatial geometry construction without requiring pre-recorded maps or ground infrastructure.",
    },
    {
      name: "Visual Global Alignment (Optional Map Layer)",
      cadence: "Global alignment ~1 Hz",
      detail:
        "Matches live onboard observations against geo-referenced reference imagery (WGS84) to anchor absolute position when pre-mapped site data is available.",
    },
    {
      name: "Unified Autonomy Fusion",
      cadence: "Fused output ~30 Hz",
      detail:
        "Combines local perception and estimation, optional global alignment, barometer, LiDAR, and GNSS while rejecting unreliable or degraded sensor inputs.",
    },
  ],
  verifiedSpecs: [
    {
      label: "Engine Scope",
      value: "Unified perception, spatial understanding, state estimation, and navigation engine",
    },
    {
      label: "Sensor Inputs",
      value: "Synchronized optical cameras + IMU (optional depth/LiDAR, barometer, GNSS, pre-recorded site maps)",
    },
    {
      label: "Primary Outputs",
      value: "6-DoF pose, velocity, attitude & heading, local spatial representation, relative height (AGL), health & confidence",
    },
    {
      label: "Operating Cadence",
      value: "~30 Hz local perception & state output; ~1 Hz optional global visual alignment",
    },
    {
      label: "Middleware & Autopilot",
      value: "PX4 and ROS 2 compatible interfaces with GCS operator health telemetry",
    },
    {
      label: "Compute Footprint",
      value: "Executes directly on onboard companion compute modules with strict SWaP budgets",
    },
    {
      label: "Sensor Sync & Calibration",
      value: "Supports downward- or forward-facing camera-IMU rigs with calibrated extrinsics and synchronized timestamps",
    },
    {
      label: "Operating Boundaries",
      value: "Without global map matching or GNSS, local visual-inertial estimation tracks relative motion and accumulates gradual drift over long distances; performance depends on visual texture, lighting, and clock sync.",
    },
  ],
  maturityTiers: {
    implemented: [
      "Core Cortex multi-sensor perception and state estimation pipeline",
      "PX4 / ROS 2 middleware interfaces and health-monitoring telemetry",
      "Deterministic simulation and hardware-in-the-loop verification workflows",
    ],
    inDevelopment: [
      "Coupled ~30 Hz local estimation + ~1 Hz global WGS84 alignment field trials",
      "Dense onboard spatial mapping modules across companion compute targets",
      "Partner airframe calibration and flight evaluation campaigns",
    ],
    planned: [
      "Expanded ground mobile robotics and indoor warehouse perception profiles",
      "Multi-vehicle and multi-camera semantic hazard awareness modules",
    ],
  },
} as const;

export const SOLUTION_DOMAINS = [
  {
    code: "01",
    title: "Aerial Inspection",
    summary:
      "Close-range perception and obstacle-aware navigation around industrial plants, towers, and bridges.",
  },
  {
    code: "02",
    title: "GNSS-Denied Flight",
    summary:
      "Continuous onboard localization under canopy, indoors, or in RF-degraded airspace using Cortex.",
  },
  {
    code: "03",
    title: "Industrial & Utilities",
    summary:
      "Signal-aware state estimation unaffected by magnetic interference or metallic multipath distortion.",
  },
  {
    code: "04",
    title: "Indoor & Logistics Robotics",
    summary:
      "Real-time 3D scene understanding and corridor navigation inside warehouses and shielded facilities.",
  },
  {
    code: "05",
    title: "Defense & Contested Ops",
    summary:
      "Infrastructure-free onboard sensing independent of ground beacons or continuous satellite links.",
  },
  {
    code: "06",
    title: "Environmental & Terrain Mapping",
    summary:
      "Onboard local geometry reconstruction and altitude tracking across complex unstructured terrain.",
  },
  {
    code: "07",
    title: "Custom OEM Platforms",
    summary:
      "Sensor synchronization, calibration, and Cortex compute bring-up integrated directly onto partner hardware.",
  },
  {
    code: "+",
    title: "Many More Missions",
    summary:
      "Collaborate with our engineering team on bespoke perception and onboard autonomy workflows.",
    cta: true,
  },
] as const;

export const APPLICATION_MATRIX = [
  {
    id: "uav-aerial-autonomy",
    index: "01",
    badge: "Primary Aerial Scope",
    title: "UAV & Aerial Autonomy",
    environment: "Multirotor Inspection · Low-Altitude Flight · GNSS-Degraded Airspace",
    maturity: "Partner Flight-Stack Integration",
    summary:
      "Built initially for multirotor UAV inspection, close-proximity monitoring, and aerial autonomy where structures obstruct GNSS and machines require immediate environmental awareness.",
    rows: [
      {
        problem: "Loss or multipath distortion of GNSS near structures",
        capability: "Onboard Cortex perception (~30 Hz) + optional global visual alignment",
        system: "Cortex Unified Engine",
        outcome: "Continuous pose, velocity, and AGL output during satellite outages",
      },
      {
        problem: "Tight size, weight, and power envelopes",
        capability: "Compute-efficient onboard execution without ground compute links",
        system: "Cortex Companion Stack",
        outcome: "Self-contained autonomy integrated with PX4 / ROS 2 flight stacks",
      },
    ],
    graphic: "uav" as const,
  },
  {
    id: "industrial-systems",
    index: "02",
    badge: "Infrastructure & Industrial",
    title: "Industrial Sites & Corridor Inspection",
    environment: "Plants · Silos · Bridges · Substations · Vegetated Corridors",
    maturity: "Field Evaluation & OEM Integration",
    summary:
      "Reliable perception and spatial intelligence around high-voltage plants, metallic structures, and tree canopies where traditional navigation sensors drift or fail.",
    rows: [
      {
        problem: "Magnetic & GNSS interference near industrial steelwork",
        capability: "Health-monitored multi-sensor fusion prioritizing consistent visual cues",
        system: "Cortex + Spatial Modules",
        outcome: "Resilient onboard awareness unaffected by structural interference",
      },
      {
        problem: "Inspection corridors lacking permanent positioning beacons",
        capability: "Real-time local 3D mapping & terrain/corridor representation",
        system: "Perception Modules",
        outcome: "Infrastructure-independent trajectory and clearance tracking",
      },
    ],
    graphic: "industrial" as const,
  },
  {
    id: "autonomous-robotics",
    index: "03",
    badge: "Ground & Mobile Expansion",
    title: "Mobile Robotics & Indoor Operations",
    environment: "Warehouses · Tunnels · Industrial Floors · Mixed Perimeters",
    maturity: "Platform Expansion",
    summary:
      "Extending Cortex spatial understanding from aerial platforms to wheeled and legged robots operating across GPS-shielded interiors and dynamic logistics aisles.",
    rows: [
      {
        problem: "Zero satellite visibility inside enclosed facilities",
        capability: "Synchronized camera-IMU-depth perception & dynamic local mapping",
        system: "Cortex Unified Engine",
        outcome: "Continuous local positioning and obstacle geometry indoors",
      },
      {
        problem: "Diverse OEM sensor mounts and vehicle kinematics",
        capability: "Bespoke calibration & ROS 2 hardware abstraction",
        system: "Custom OEM Engineering",
        outcome: "Reproducible perception pipeline tailored per chassis",
      },
    ],
    graphic: "robotics" as const,
  },
  {
    id: "defence-security",
    index: "04",
    badge: "Qualified Autonomy Scope",
    title: "Defense & Contested Environments",
    environment: "GNSS-Denied Airspace · Independent Onboard Sensing",
    maturity: "Evaluated Per Mission Envelope",
    summary:
      "Cortex provides infrastructure-independent onboard perception and state estimation when GNSS is unavailable. Standalone optical pipelines do not guarantee navigation in zero-visibility obscurants without complementary thermal/LiDAR sensing.",
    rows: [
      {
        problem: "Denial or unreliability of external RF navigation signals",
        capability: "Onboard passive visual-inertial perception without ground emitters",
        system: "Cortex Unified Engine",
        outcome: "Autonomous local state estimation while scene features remain observable",
      },
      {
        problem: "Degraded visibility or multi-spectral mission requirements",
        capability: "Modular multi-sensor fusion supporting thermal or LiDAR integration",
        system: "Custom OEM Engineering",
        outcome: "Qualified system configuration scoped to environmental visibility limits",
      },
    ],
    graphic: "defence" as const,
  },
];

export const ENGINEERING_DISCIPLINES = [
  "Onboard Perception",
  "Spatial Intelligence",
  "Camera–IMU Synchronization",
  "Multi-Sensor State Estimation",
  "Embedded Edge Autonomy",
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
  discipline: "Perception & Sensor Timing",
  title: "Why Camera–IMU Synchronization Governs Onboard Perception Stability",
  summary:
    "Placeholder engineering blog post documenting sensor timing misalignment, temporal coupling equations inside Cortex, verification checklists, and open experimental slots for multi-trial evaluation.",
  sections: [
    {
      heading: "1. The Engineering Problem",
      body: [
        "Onboard perception engines like Cortex fuse high-frequency inertial measurements (angular rates and linear acceleration) with optical camera and depth streams. While the IMU captures rapid rotational dynamics between exposures, visual observations anchor long-term estimation and spatial mapping.",
        "If image midpoint timestamps and IMU sample clocks drift or carry an uncalibrated offset δt, aggressive maneuvers create apparent velocity errors, corrupted feature triangulation, and destabilized obstacle geometry.",
      ],
    },
    {
      heading: "2. Architecture & Temporal Coupling",
      body: [
        "Cortex aligns optical exposure midpoint timestamps with continuous IMU pre-integration windows before states enter sensor fusion and spatial mapping. Hardware-triggered rigs lock clocks directly; loosely coupled OEM payloads estimate residual time skew online.",
        "This placeholder draft outlines the engineering framework; quantitative latency distributions and recorded multi-trial trajectories will be added once outdoor validation logs are finalized.",
      ],
      equation: "p_cam(t) = R_imu(t + δt) · p_ext + t_imu(t + δt)",
    },
    {
      heading: "3. Verification & Evaluation Protocol (Placeholder)",
      body: [
        "Placeholder slot for recorded multirotor and ground-robot logs, IMU Allan-variance plots, and spatial reconstruction checks across indoor and outdoor test sequences.",
        "Before publishing metrics, each entry enforces dataset provenance (sensor rig, sample rates, clock synchronization mode, and operating window) rather than synthetic approximations.",
      ],
    },
  ],
  limitations: [
    "Note: This article is currently a structured placeholder draft demonstrating our technical blog format.",
    "Measured benchmark figures and recorded evaluation curves will replace placeholder notes only after multi-trial validation.",
  ],
  references: [
    "Cortex Unified Perception & Navigation Engine (/solutions/cortex)",
    "Layer 01 Sensing & Layer 03 State Estimation Architecture (/technology/state-estimation)",
  ],
};

export const UPCOMING_BLOG_TOPICS = [
  {
    code: "UPCOMING / 02",
    discipline: "Spatial Understanding",
    title: "Coupling ~30 Hz Local Perception with ~1 Hz Global Map Alignment in Cortex",
    summary:
      "Designing state fusion that preserves responsive onboard flight control while bounding long-horizon drift when geo-referenced maps exist.",
  },
  {
    code: "UPCOMING / 03",
    discipline: "Embedded Systems",
    title: "Running Real-Time Spatial Intelligence Inside Edge Companion Budgets",
    summary:
      "Memory layout, deterministic execution bounds, and health-monitoring diagnostics for PX4 and ROS 2 autonomous vehicles.",
  },
] as const;

export const FOUNDERS = [
  {
    name: "Ayushman Bansal",
    role: "Co-Founder",
    email: "ayushman@perceptionlab.com",
    linkedin: "https://www.linkedin.com/in/ayushmanbansal/",
    expertise: "Robotics, Sensor Fusion, and Autonomous Systems",
    focus:
      "Leads perception algorithms, multi-sensor state estimation architecture, and Cortex core autonomy software.",
  },
  {
    name: "Lakshya Agrawal",
    role: "Co-Founder",
    email: "lakshya@perceptionlab.com",
    linkedin: "https://www.linkedin.com/in/lagrawal/",
    expertise: "Project Management, Avionics, and Product Strategy",
    focus:
      "Leads avionics integration, robotics & UAV OEM partnerships, field deployments, and product strategy.",
  },
] as const;
