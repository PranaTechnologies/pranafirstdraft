export const BRAND = {
  name: "Perception Labs",
  shortCode: "PL",
  tagline: "From perception to autonomy.",
  concept: "The Perception Field",
  centralIdea: "Making autonomy work in the real world",
  promise: "Turning sensor data into actionable understanding",
  statement:
    "We develop the technologies that enable machines to understand their surroundings, determine where they are, and operate intelligently in complex real-world environments.",
  scopeNote:
    "Our work spans perception, state estimation, navigation, spatial intelligence, and onboard autonomy.",
} as const;

export const CONTACT_INFO = {
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSda_XI8n_Why7Bb0ISG3kd0vG2EHEMOAcq1GkcoLdHicvT7TA/viewform",
  email: "pranatechnologies15@gmail.com",
  phone: "9090741357",
} as const;

export const NAV_LINKS = [
  { label: "Technology", href: "/technology" },
  { label: "Systems", href: "/systems" },
  { label: "Applications", href: "/applications" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
] as const;

export const BRAND_PRINCIPLES = [
  {
    number: "01",
    title: "Understand the physical world",
    description:
      "The real world is dynamic, uncertain and unstructured. Autonomous systems must make sense of it.",
  },
  {
    number: "02",
    title: "Intelligence at the edge",
    description:
      "Autonomy should be capable of operating on the machine itself, using its own sensors and computational resources.",
  },
  {
    number: "03",
    title: "Engineering beyond the laboratory",
    description:
      "Technology must work under real-world constraints, not just controlled demonstrations.",
  },
] as const;

export const PROBLEM_PILLARS = [
  {
    number: "01",
    code: "PERCEIVE",
    description:
      "Extract meaningful information from the physical environment across varying illumination, geometry, and motion.",
  },
  {
    number: "02",
    code: "UNDERSTAND",
    description:
      "Estimate position, motion, geometry and environmental context continuously without depending on perfect satellite links.",
  },
  {
    number: "03",
    code: "ACT",
    description:
      "Translate spatial understanding into intelligent autonomous behaviour directly on the platform.",
  },
] as const;

export const PERCEPTION_CHAIN = [
  "Physical World",
  "Sensing",
  "State Estimation",
  "Spatial Understanding",
  "Autonomy",
  "Action",
] as const;

export type TechnologySlug =
  | "sensing"
  | "state-estimation"
  | "perception"
  | "spatial-intelligence"
  | "embedded-autonomy";

export interface TechnologySpec {
  slug: TechnologySlug;
  number: string;
  stackIndex: string;
  stackName: string;
  stackSummary: string;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string;
  graphic: "sensing" | "estimation" | "perception" | "spatial" | "autonomy";
  focusAreas: Array<{
    label: string;
    detail: string;
  }>;
  inputs: string[];
  outputs: string[];
}

export const TECHNOLOGY_ITEMS: TechnologySpec[] = [
  {
    slug: "perception",
    number: "01",
    stackIndex: "03",
    stackName: "Perception",
    stackSummary: "Detection, tracking and spatial understanding",
    title: "01 — Perception",
    shortTitle: "Perception",
    summary:
      "Understanding the physical environment through sensing and computational vision.",
    overview:
      "Autonomous platforms operate in cluttered, visually degraded, and rapidly changing environments. Our perception work extracts consistent geometric features, structure, and motion cues from camera, depth, thermal, and multi-sensor streams.",
    graphic: "perception",
    focusAreas: [
      {
        label: "Feature Correspondence & Tracking",
        detail:
          "Maintaining stable visual observations across frame sequences under rapid ego-motion and variable exposure.",
      },
      {
        label: "Multi-Modal Sensor Integration",
        detail:
          "Aligning monocular, stereo, depth, and auxiliary sensor measurements into coherent scene observations.",
      },
      {
        label: "Environmental Robustness",
        detail:
          "Designing perceptual pipelines for low-texture interiors, shadows, canopy cover, and dust-impaired visibility.",
      },
    ],
    inputs: ["Optical Camera Streams", "Depth / Auxiliary Sensors", "Exposure & Calibration Metadata"],
    outputs: ["Tracked Visual Features", "Scene Structure Cues", "Temporal Correspondences"],
  },
  {
    slug: "state-estimation",
    number: "02",
    stackIndex: "02",
    stackName: "Estimation",
    stackSummary: "Sensor fusion, visual-inertial odometry and localization",
    title: "02 — State Estimation",
    shortTitle: "State Estimation",
    summary:
      "Understanding position, motion and orientation through multi-sensor information.",
    overview:
      "When GNSS signals are unavailable, degraded, or unreliable, onboard motion estimation must keep track of pose, velocity, and orientation. We combine high-rate inertial measurements with visual constraints for continuous trajectory estimation.",
    graphic: "estimation",
    focusAreas: [
      {
        label: "Visual-Inertial Odometry",
        detail:
          "Fusing inertial kinematics with visual feature observations to estimate continuous 6-DoF ego-motion.",
      },
      {
        label: "Temporal Synchronization",
        detail:
          "Accounting for clock alignment, sensor latency, and extrinsic calibration across heterogeneous hardware.",
      },
      {
        label: "Uncertainty-Aware Fusion",
        detail:
          "Propagating covariance and consistency bounds across estimation updates in demanding flight and ground profiles.",
      },
    ],
    inputs: ["High-Rate IMU Measurements", "Synchronized Image Frames", "Kinematic Constraints"],
    outputs: ["6-DoF Pose & Velocity", "Estimated Trajectory", "State Covariance"],
  },
  {
    slug: "spatial-intelligence",
    number: "03",
    stackIndex: "04",
    stackName: "Intelligence",
    stackSummary: "Mapping, environmental interpretation and planning",
    title: "03 — Spatial Intelligence",
    shortTitle: "Spatial Intelligence",
    summary:
      "Building meaningful representations of the environment.",
    overview:
      "Navigation requires more than an instantaneous coordinate estimate. Spatial intelligence transforms raw sensor feeds and pose history into structured local representations—point clouds, traversal geometry, and spatial context.",
    graphic: "spatial",
    focusAreas: [
      {
        label: "Local Spatial Reconstruction",
        detail:
          "Constructing sparse and semi-dense 3D representations around the vehicle for obstacle and corridor awareness.",
      },
      {
        label: "Reference Frame Alignment",
        detail:
          "Maintaining coherent transformations between body, sensor, local navigation, and mission coordinate frames.",
      },
      {
        label: "Trajectory Consistency",
        detail:
          "Preserving geometric continuity across turns, altitude shifts, and changing surface structure.",
      },
    ],
    inputs: ["Estimated Poses", "Depth & Triangulated Points", "Historical Keyframes"],
    outputs: ["Local 3D Geometry", "Navigable Free Space", "Consistent Spatial Frame"],
  },
  {
    slug: "embedded-autonomy",
    number: "04",
    stackIndex: "05",
    stackName: "Autonomy",
    stackSummary: "Navigation, decision-making and control",
    title: "04 — Embedded Autonomy",
    shortTitle: "Embedded Autonomy",
    summary:
      "Bringing intelligent systems onto the machines themselves.",
    overview:
      "Real-world autonomy cannot rely on high-bandwidth links to offboard clusters. We engineer perception and state estimation software around strict onboard compute, memory, thermal, and power envelopes.",
    graphic: "autonomy",
    focusAreas: [
      {
        label: "Edge Execution",
        detail:
          "Running deterministic, resource-bounded navigation and perception workloads directly on embedded companion compute.",
      },
      {
        label: "Autopilot Integration",
        detail:
          "Providing clean, bounded navigation outputs compatible with standard flight controllers and robotic middleware.",
      },
      {
        label: "Degraded-Mode Awareness",
        detail:
          "Explicit health monitoring and fallback signaling when sensor quality degrades in extreme operating conditions.",
      },
    ],
    inputs: ["Spatial Representations", "Vehicle State Estimates", "Mission Objectives"],
    outputs: ["Navigation Setpoints", "Health & Confidence Status", "Autonomous Action"],
  },
];

export const SENSING_LAYER: TechnologySpec = {
  slug: "sensing",
  number: "00",
  stackIndex: "01",
  stackName: "Sensing",
  stackSummary: "Cameras, IMUs, LiDAR and other sensors",
  title: "00 — Sensing",
  shortTitle: "Sensing",
  summary:
    "Capturing deterministic multi-sensor observations from the physical environment.",
  overview:
    "Every downstream estimation and autonomy module is bounded by the quality and timing of its raw physical measurements. We design hardware-aware sensing pipelines uniting global-shutter cameras, inertial measurement units, and complementary payloads.",
  graphic: "sensing",
  focusAreas: [
    {
      label: "Synchronized Multi-Sensor Capture",
      detail:
        "Hardware-timed alignment between optical shutters and inertial sampling intervals to avoid time-offset drift.",
    },
    {
      label: "Intrinsic & Extrinsic Calibration",
      detail:
        "Accurate modeling of lens geometry, IMU biases, and rigid transforms across custom airframes and chassis.",
    },
    {
      label: "Sensor Payload Flexibility",
      detail:
        "Support for visible-spectrum, thermal, depth, and LiDAR payloads depending on platform mission constraints.",
    },
  ],
  inputs: ["Optical Light & Motion", "Angular Rates & Accelerations", "Depth / Range Returns"],
  outputs: ["Timestamped Sensor Packets", "Calibrated Rig Geometry", "Deterministic Data Streams"],
};

export const ALL_TECHNOLOGY_SPECS: TechnologySpec[] = [
  ...TECHNOLOGY_ITEMS,
  SENSING_LAYER,
];

export const AUTONOMY_STACK_LAYERS = [
  {
    index: "01",
    name: "Sensing",
    description: "Cameras, IMUs, LiDAR and other sensors",
    href: "/technology/sensing",
  },
  {
    index: "02",
    name: "Estimation",
    description: "Sensor fusion, visual-inertial odometry and localization",
    href: "/technology/state-estimation",
  },
  {
    index: "03",
    name: "Perception",
    description: "Detection, tracking and spatial understanding",
    href: "/technology/perception",
  },
  {
    index: "04",
    name: "Intelligence",
    description: "Mapping, environmental interpretation and planning",
    href: "/technology/spatial-intelligence",
  },
  {
    index: "05",
    name: "Autonomy",
    description: "Navigation, decision-making and control",
    href: "/technology/embedded-autonomy",
  },
] as const;

export interface SystemProgram {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  status: string;
  description: string;
  pipeline?: string[];
  scope: string[];
  graphic: "pivo" | "estimation" | "perception" | "autonomy";
}

export const SYSTEMS_PROGRAMS: SystemProgram[] = [
  {
    id: "pivo",
    code: "SYS / 01",
    name: "PIVO",
    subtitle: "Parallel Visual-Inertial Odometry",
    status: "Active Core Engine",
    description:
      "A lightweight navigation engine designed for real-time motion estimation and onboard autonomy on resource-constrained aerial and robotic platforms.",
    pipeline: ["Camera + IMU", "Motion Estimation", "Navigation Output"],
    scope: [
      "Real-time visual-inertial ego-motion estimation",
      "Designed for embedded companion processors",
      "Structured telemetry and clean state-output interfaces",
    ],
    graphic: "pivo",
  },
  {
    id: "gps-denied-navigation",
    code: "SYS / 02",
    name: "GPS-Denied Navigation",
    subtitle: "Integrated Localization & Navigation Stack",
    status: "Integrated Stack Development",
    description:
      "An integrated navigation stack for autonomous platforms operating in environments where satellite positioning is unavailable, degraded, or compromised.",
    scope: [
      "Continuous localization across GNSS outage transitions",
      "Consistent reference-frame management for flight & ground control",
      "Trajectory monitoring and sensor-health reporting",
    ],
    graphic: "estimation",
  },
  {
    id: "perception-modules",
    code: "SYS / 03",
    name: "Perception Modules",
    subtitle: "Modular Spatial & Sensor Capabilities",
    status: "Modular Integration",
    description:
      "Modular perception capabilities designed for integration into robotic and UAV systems, bridging multi-sensor sensing with spatial awareness.",
    scope: [
      "Camera, depth, thermal, and LiDAR fusion interfaces",
      "Local spatial mapping and obstacle representation",
      "Adaptable software modules for custom platform architectures",
    ],
    graphic: "perception",
  },
  {
    id: "custom-integration",
    code: "SYS / 04",
    name: "Custom Integration",
    subtitle: "OEM & Industrial Autonomy Engineering",
    status: "Partner Engineering",
    description:
      "Hardware, software, sensor integration, and autonomy development tailored for OEMs, aerial platform builders, and industrial robotics teams.",
    scope: [
      "Sensor selection, timing synchronization, and rig calibration",
      "Embedded compute bring-up and autopilot interface engineering",
      "Field replay evaluation and platform-specific tuning",
    ],
    graphic: "autonomy",
  },
];

export interface ApplicationDomain {
  id: string;
  index: string;
  title: string;
  environment: string;
  summary: string;
  constraints: string[];
  graphic: "uav" | "defence" | "robotics" | "industrial";
}

export const APPLICATION_DOMAINS: ApplicationDomain[] = [
  {
    id: "uav-aerospace",
    index: "01",
    title: "UAV & Aerial Autonomy",
    environment: "Low-Altitude Flight · Complex Airspace",
    summary:
      "Onboard visual-inertial state estimation and spatial awareness enabling unmanned aerial platforms to hold position, navigate corridors, and fly reliably beyond satellite coverage.",
    constraints: [
      "Strict size, weight, and power (SWaP) limits",
      "High-vibration airframe dynamics and rapid attitude shifts",
      "Transitions between open sky and cluttered terrain or structures",
    ],
    graphic: "uav",
  },
  {
    id: "defence-security",
    index: "02",
    title: "Defence & Security",
    environment: "GNSS-Denied Operations · Contested RF",
    summary:
      "Self-contained navigation and perception subsystems engineered to operate without external positioning broadcasts or continuous ground-station links.",
    constraints: [
      "Resilience under GNSS jamming or spoofing conditions",
      "Fully onboard estimation without external infrastructure",
      "Deterministic behavior under austere operating envelopes",
    ],
    graphic: "defence",
  },
  {
    id: "autonomous-robotics",
    index: "03",
    title: "Autonomous Robotics",
    environment: "Indoor Facilities · Mixed Unstructured Terrain",
    summary:
      "Continuous localization and scene representation for ground, legged, and mobile platforms transitioning across indoor corridors, docks, and outdoor perimeters.",
    constraints: [
      "Repetitive geometry and dynamic human/machine traffic",
      "Rapid lighting shifts between interior and exterior thresholds",
      "Real-time spatial updates for local path planning",
    ],
    graphic: "robotics",
  },
  {
    id: "industrial-systems",
    index: "04",
    title: "Industrial Systems",
    environment: "Infrastructure · Forests · Subterranean Sites",
    summary:
      "Autonomous sensing and positioning inside industrial plants, silos, tunnels, bridges, and dense forest canopy where satellite geometry is occluded.",
    constraints: [
      "Multipath distortion near metallic structures and concrete",
      "Overhead canopy, tunnel, and confined-space occlusion",
      "Predictable inspection trajectories without manual piloting",
    ],
    graphic: "industrial",
  },
];

export const ENGINEERING_DISCIPLINES = [
  "Visual-Inertial Navigation",
  "Sensor Fusion",
  "State Estimation",
  "Embedded AI",
  "SLAM & Localization",
  "Edge Computing",
] as const;

export interface ResearchNote {
  slug: string;
  code: string;
  discipline: string;
  title: string;
  summary: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
}

export const RESEARCH_NOTES: ResearchNote[] = [
  {
    slug: "reliable-navigation-without-gps",
    code: "NOTE / 01",
    discipline: "Visual-Inertial Navigation",
    title: "Building Reliable Navigation Without GPS",
    summary:
      "Architectural trade-offs when transitioning from satellite-dependent positioning to onboard visual-inertial state estimation.",
    sections: [
      {
        heading: "Why GNSS alone is brittle",
        body: "Satellite positioning relies on weak radio signals arriving from orbit. Inside buildings, under dense tree canopy, alongside large metallic infrastructure, or in RF-contested environments, signals suffer multipath reflections or disappear entirely.",
      },
      {
        heading: "Complementary onboard sensing",
        body: "Cameras capture geometric structure and rich parallax across frames, while inertial measurement units sample high-frequency linear acceleration and angular velocity. Fusing both modalities lets a vehicle track short-term dynamics through rapid maneuvers while constraining inertial drift with visual observations.",
      },
      {
        heading: "Engineering for failure modes",
        body: "Reliable GPS-denied autonomy depends less on best-case benchmark scores and more on graceful behavior when visual texture drops, lighting shifts abruptly, or motion blur occurs. Explicit observability monitoring and deterministic fallback boundaries are central to field readiness.",
      },
    ],
  },
  {
    slug: "camera-imu-synchronization",
    code: "NOTE / 02",
    discipline: "Sensor Fusion",
    title: "Why Camera–IMU Synchronization Matters in Visual-Inertial Systems",
    summary:
      "How microsecond-scale clock alignment, exposure timing, and extrinsic calibration determine estimator stability.",
    sections: [
      {
        heading: "Shared physical time",
        body: "Visual-inertial estimators mathematically relate integrated IMU measurements to the exact instant an image frame captures the physical scene. Even modest unmodeled time offsets introduce artificial velocity errors during rotation.",
      },
      {
        heading: "Rolling vs. global shutter behavior",
        body: "Hardware-triggered global-shutter capture aligned to a common clock reference ensures every pixel corresponds to a well-defined pose timestamp, eliminating geometric skew under high-vibration UAV flight.",
      },
      {
        heading: "Calibration across temperature and vibration",
        body: "Rigid mechanical mounting and repeatable extrinsic calibration between camera optical centers and IMU axes prevent subtle frame misalignments from compounding into long-horizon trajectory drift.",
      },
    ],
  },
  {
    slug: "visual-inertial-embedded-hardware",
    code: "NOTE / 03",
    discipline: "Edge Computing",
    title: "Running Visual-Inertial Navigation on Embedded Hardware",
    summary:
      "Designing state estimation and perception pipelines to operate deterministically within onboard SWaP constraints.",
    sections: [
      {
        heading: "Compute envelopes on real vehicles",
        body: "Small UAVs and mobile robots cannot carry workstation GPUs or dissipate unrestricted thermal loads. State estimation must share embedded compute alongside perception, communications, and flight control.",
      },
      {
        heading: "Bounded latency and memory discipline",
        body: "Predictable frame processing times matter more than peak throughput. Fixed-size sliding windows, deterministic memory allocation, and careful parallelization keep motion estimation responsive under real-time flight loads.",
      },
      {
        heading: "Clean integration boundaries",
        body: "Decoupling sensing capture, estimation math, and flight-controller output transport makes it possible to validate algorithms across replay datasets before deploying onto embedded flight hardware.",
      },
    ],
  },
  {
    slug: "autonomous-flight-gnss-denied",
    code: "NOTE / 04",
    discipline: "State Estimation",
    title: "The Challenges of Autonomous Flight in GNSS-Denied Environments",
    summary:
      "Practical challenges across scale observability, low-texture surfaces, altitude changes, and closed-loop flight control.",
    sections: [
      {
        heading: "Observability under uniform motion",
        body: "Monocular visual-inertial systems rely on acceleration excitation to observe metric scale. Steady hover or constant-velocity cruise demands careful state formulation and auxiliary sensing support to keep scale consistent.",
      },
      {
        heading: "Dynamic and low-feature environments",
        body: "Moving foliage, water reflections, uniform concrete corridors, and low-light thresholds challenge naive feature matchers. Robust outlier rejection and multi-modal sensing help separate static world geometry from transient noise.",
      },
      {
        heading: "Closing the control loop",
        body: "An estimator that looks smooth offline can still destabilize a vehicle if output delays or frame jumps enter the flight controller. End-to-end validation under real flight dynamics is essential.",
      },
    ],
  },
];

export const ENGINEERING_PRACTICES = [
  {
    code: "LAB / 01",
    title: "Hardware & Sensor Rigs",
    detail:
      "Mechanical mounting, global-shutter optical assemblies, and synchronized inertial hardware tuned for real platforms.",
  },
  {
    code: "LAB / 02",
    title: "Synchronized Capture & Replay",
    detail:
      "Deterministic timestamping and dataset replay workflows to reproduce field anomalies and verify estimator updates.",
  },
  {
    code: "LAB / 03",
    title: "Embedded Bring-Up",
    detail:
      "Profiling memory, thermal stability, and real-time loop latency directly on companion compute modules.",
  },
  {
    code: "LAB / 04",
    title: "Field Validation",
    detail:
      "Structured trials across indoor corridors, infrastructure sites, and GPS-degraded outdoor environments.",
  },
] as const;
