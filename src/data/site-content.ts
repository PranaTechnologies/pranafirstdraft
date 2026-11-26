export const SITE_URL = "https://www.perceptionlab.in";

export const BRAND = {
  name: "Perception Labs",
  shortCode: "PL",
  tagline: "Intelligence for the physical world.",
  headline: "Intelligence for the physical world.",
  heroSupporting:
    "Enabling machines to understand and navigate the world around them.",
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
  { label: "Cortex", href: "/cortex" },
  { label: "Technology", href: "/technology" },
  { label: "Solutions", href: "/solutions" },
  { label: "Company", href: "/company" },
] as const;

export const HOME_PURPOSE = {
  eyebrow: "OUR PURPOSE",
  heading: "Autonomy begins with understanding.",
  supporting:
    "Reliable autonomy requires machines to understand their surroundings, know where they are and adapt as conditions change.",
  pillars: [
    {
      number: "01",
      name: "Perceive",
      detail: "Observe the physical world.",
    },
    {
      number: "02",
      name: "Understand",
      detail: "Interpret space, position and motion.",
    },
    {
      number: "03",
      name: "Act",
      detail: "Enable informed, adaptive movement.",
    },
  ],
} as const;

export const HOME_CORTEX = {
  eyebrow: "FLAGSHIP PRODUCT",
  title: "Cortex",
  descriptor: "Core Navigation Engine",
  supporting: "Unified onboard navigation for autonomous systems.",
  ctaLabel: "Explore Cortex",
  capabilities: [
    {
      number: "01",
      name: "Independent Navigation",
      kind: "independent" as const,
    },
    {
      number: "02",
      name: "Unified Positioning",
      kind: "unified" as const,
    },
    {
      number: "03",
      name: "Adaptive Sensor Fusion",
      kind: "adaptive" as const,
    },
    {
      number: "04",
      name: "Operational Resilience",
      kind: "resilience" as const,
    },
  ],
} as const;

export const HOME_TECHNOLOGY = {
  eyebrow: "TECHNOLOGY",
  heading: "Technologies that enable autonomy.",
  supporting:
    "Developing the core technologies machines need to perceive their surroundings, understand motion and navigate the physical world.",
  ctaLabel: "Explore our technology",
  domains: [
    {
      number: "01",
      title: "Spatial Perception",
      description:
        "Transforming visual and spatial measurements into meaningful representations of the physical environment.",
    },
    {
      number: "02",
      title: "Positioning & Navigation",
      description:
        "Combining complementary positioning methods to establish where machines are and how they move.",
    },
    {
      number: "03",
      title: "Sensor Fusion & Calibration",
      description:
        "Integrating synchronized sensor measurements through precise calibration, fusion and reliability-aware processing.",
    },
    {
      number: "04",
      title: "Real-Time Systems",
      description:
        "Engineering efficient, scalable software for onboard execution within constrained computing environments.",
    },
  ],
} as const;

export const HOME_SOLUTIONS = {
  eyebrow: "SOLUTIONS",
  heading: "Autonomy across environments.",
  supporting:
    "Navigation and spatial understanding for machines operating across diverse physical environments.",
  ctaLabel: "Explore solutions",
    disclosure:
      "Reference imagery illustrates representative operating environments only — not actual Perception Labs deployments or commercialized products.",
  domains: [
    {
      title: "Aerial Systems",
      description: "Navigation beyond reliable satellite coverage.",
      stage: "Primary focus",
      image: "/images/solutions/aerial-systems.jpg",
      alt: "Reference photograph of a multirotor aerial quadcopter flying in an outdoor field environment (not a Perception Labs deployment)",
    },
    {
      title: "Ground Robotics",
      description: "Spatial awareness in complex and unstructured environments.",
      stage: "Expansion",
      image: "/images/solutions/ground-robotics.jpg",
      alt: "Reference photograph of a legged mobile ground robot in an outdoor demonstration (not a Perception Labs deployment)",
    },
    {
      title: "Industrial Automation",
      description: "Infrastructure-independent localization for industrial mobile machines.",
      stage: "Expansion",
      image: "/images/solutions/industrial-automation.jpg",
      alt: "Reference photograph of an automated guided vehicle operating at an industrial logistics terminal (not a Perception Labs deployment)",
    },
    {
      title: "Subterranean Operations",
      description: "Navigation in tunnels, mines and enclosed environments.",
      stage: "Potential market",
      image: "/images/solutions/subterranean-operations.jpg",
      alt: "Reference photograph inside a dim enclosed underground rail tunnel (not a Perception Labs deployment)",
    },
    {
      title: "Maritime Systems",
      description: "Complementary navigation for autonomous surface vessels.",
      stage: "Exploratory",
      image: "/images/solutions/maritime-systems.jpg",
      alt: "Reference photograph of an autonomous surface vessel navigating open ocean waters (not a Perception Labs deployment)",
    },
    {
      title: "Infrastructure Inspection",
      description: "Spatial tracking in confined and difficult-to-access structures.",
      stage: "Potential market",
      image: "/images/solutions/infrastructure-inspection.jpg",
      alt: "Reference photograph of a structural steel bridge during inspection operations (not a Perception Labs deployment)",
    },
  ],
} as const;

export const PHILOSOPHY_PILLARS = [
  {
    name: "Perceive",
    detail:
      "Understand surrounding geometry and visual features directly from synchronized camera, inertial, and auxiliary sensor streams.",
  },
  {
    name: "Understand",
    detail:
      "Estimate position, velocity, orientation, and calibrated uncertainty in real time without relying on external ground infrastructure.",
  },
  {
    name: "Act",
    detail:
      "Enable informed onboard vehicle navigation, obstacle awareness, and deterministic flight-stack execution under hardware limits.",
  },
] as const;

export const ENGINEERING_PRINCIPLES = [
  {
    title: "Edge-first",
    detail:
      "Onboard computation running directly on companion edge hardware within constrained size, weight, and power budgets.",
  },
  {
    title: "Sensor-aware",
    detail:
      "Tightly synchronized camera–IMU timestamps, online outlier filtering, and continuous signal health monitoring.",
  },
  {
    title: "Infrastructure-independent",
    detail:
      "Continuous ~30 Hz local state estimation and spatial mapping without continuous satellite fixes or ground positioning beacons.",
  },
  {
    title: "Integration-ready",
    detail:
      "Modular software architecture exposing clean PX4, ROS 2, and operator health interfaces for autonomous platforms.",
  },
] as const;

export const TECH_COUPLED_ENGINES = [
  {
    code: "ENGINE 01",
    title: "Synchronized Sensing & Feature Perception",
    layers: "Layers 01–02",
    description:
      "Hardware-timed optical and inertial capture, intrinsic calibration, persistent visual feature tracking, and transient outlier rejection under rapid vehicle motion.",
  },
  {
    code: "ENGINE 02",
    title: "Coupled State & Local / Global Fusion",
    layers: "Layer 03",
    description:
      "Real-time visual-inertial state estimation (~30 Hz) fusing inertial kinematics, tracked landmarks, and optional ~1 Hz geo-referenced map alignment with explicit health gating.",
  },
  {
    code: "ENGINE 03",
    title: "Spatial Reconstruction & Vehicle Interface",
    layers: "Layers 04–05",
    description:
      "Onboard local geometry mapping and coordinate frame coherence streamed straight into PX4 and ROS 2 vehicle control and ground-station health monitors.",
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
  metaDescription: string;
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
    stackSummary: "Synchronized cameras, IMUs, and depth payloads.",
    summary:
      "Multi-modal cameras, inertial sensors, optional depth/LiDAR payloads, and hardware-aware timing.",
    metaDescription:
      "Hardware camera–IMU synchronization and calibration for drone and robot visual-inertial navigation, depth, and LiDAR sensing.",
    overview:
      "Reliable onboard autonomy begins with temporally coherent measurements. We synchronize optical camera exposures with high-rate IMU samples and optional auxiliary payloads under calibrated extrinsics.",
    feedbackNote:
      "Receives exposure and sensor health directives from Autonomy Interface and State Estimation.",
    graphic: "sensing",
    focusAreas: [
      {
        label: "Camera & IMU Synchronization",
        detail:
          "Aligns optical image midpoints with high-rate angular velocity and linear acceleration packets.",
      },
      {
        label: "Auxiliary Payload Ingestion",
        detail:
          "Supports optional barometer, GNSS, depth, LiDAR, and pre-recorded environmental reference maps.",
      },
      {
        label: "Intrinsic & Extrinsic Calibration",
        detail:
          "Models lens distortion, inertial biases, and rigid airframe mounting transforms across rigs.",
      },
    ],
    inputs: ["Optical Cameras", "High-Rate IMU", "Optional Depth, Barometer, GNSS, LiDAR"],
    outputs: ["Timestamped Sensor Packets", "Calibrated Frame Geometry", "Health Metadata"],
  },
  {
    slug: "perception",
    layerNumber: "02",
    shortTitle: "Perception",
    stackSummary: "Feature tracking, correspondence, and outlier filtering.",
    summary:
      "Persistent geometric feature tracking and visual observations across dynamic lighting and motion.",
    metaDescription:
      "Persistent visual landmark tracking, outlier filtering, and global map correspondence for autonomous drones and robots.",
    overview:
      "Extracts and tracks stable structural landmarks across consecutive frames while filtering glare, transient moving objects, and corrupted measurements before state updates.",
    feedbackNote:
      "Exchanges active keyframe priors and search windows with State Estimation.",
    graphic: "perception",
    focusAreas: [
      {
        label: "Feature Extraction & Tracking",
        detail:
          "Maintains consistent visual tracks under aggressive angular maneuvers and illumination changes.",
      },
      {
        label: "Visual Map Correspondence",
        detail:
          "Matches live camera frames against reference site imagery when geo-referenced maps exist.",
      },
      {
        label: "Outlier Rejection",
        detail:
          "Isolates dynamic scene clutter and unreliable observations before fusion updates.",
      },
    ],
    inputs: ["Calibrated Image Frames", "State Prediction Priors", "Optional Reference Maps"],
    outputs: ["Tracked Visual Features", "Global Match Candidates", "Observation Confidence"],
  },
  {
    slug: "state-estimation",
    layerNumber: "03",
    shortTitle: "State Estimation",
    stackSummary: "Coupled ~30 Hz local estimation and ~1 Hz alignment.",
    summary:
      "Health-monitored visual-inertial fusion generating continuous 6-DoF motion and bounded localization.",
    metaDescription:
      "Real-time visual-inertial odometry (VIO) fusing IMU kinematics, tracked landmarks, and optional ~1 Hz geo-referenced alignment at ~30 Hz.",
    overview:
      "Fuses inertial pre-integration with tracked visual constraints and optional ~1 Hz geo-referenced alignment or barometer/GNSS inputs to output smooth ~30 Hz pose, velocity, and uncertainty.",
    feedbackNote:
      "Supplies motion priors back to Perception tracking and monitors per-source signal reliability.",
    graphic: "estimation",
    focusAreas: [
      {
        label: "Local State Estimation (~30 Hz)",
        detail:
          "Continuous relative 6-DoF pose and velocity directly onboard without external beacons.",
      },
      {
        label: "Optional Global Alignment (~1 Hz)",
        detail:
          "Bounds long-horizon drift by aligning camera views with geo-referenced maps (WGS84).",
      },
      {
        label: "Signal-Health Gating",
        detail:
          "Continuously validates residual errors and deprioritizes degraded sensor streams.",
      },
    ],
    inputs: ["IMU Kinematics", "Tracked Perception Features", "Optional Global Map & Barometer"],
    outputs: ["6-DoF Pose & Velocity (~30 Hz)", "Relative Height (AGL)", "Covariance & Health"],
  },
  {
    slug: "spatial-intelligence",
    layerNumber: "04",
    shortTitle: "Spatial Intelligence",
    stackSummary: "Onboard local geometry and reference frames.",
    summary:
      "Real-time 3D local reconstruction, obstacle clearance context, and frame coherence.",
    metaDescription:
      "Onboard 3D local mapping, obstacle clearance context, and NED, ENU, and WGS84 coordinate frame alignment for autonomous machines.",
    overview:
      "Transforms estimated trajectories and triangulated points into structured local spatial representations—supporting corridor traversal and consistent sensor-to-world transforms onboard.",
    feedbackNote:
      "Supplies geometric constraints back to State Estimation and spatial context to Autonomy Interface.",
    graphic: "spatial",
    focusAreas: [
      {
        label: "Dynamic Local Mapping",
        detail:
          "Constructs and updates local 3D environmental geometry directly on edge hardware.",
      },
      {
        label: "Coordinate Frame Alignment",
        detail:
          "Maintains exact transforms across camera, IMU, vehicle body, local NED/ENU, and WGS84.",
      },
      {
        label: "Navigable Space Context",
        detail:
          "Preserves terrain elevation, wall clearances, and structural obstacles around the machine.",
      },
    ],
    inputs: ["Estimated Trajectories", "Triangulated Landmarks & Depth"],
    outputs: ["Local 3D Spatial Maps", "Clearance Geometry", "Aligned Reference Frames"],
  },
  {
    slug: "embedded-autonomy",
    layerNumber: "05",
    shortTitle: "Autonomy Interface",
    stackSummary: "PX4 / ROS 2 integration and edge execution.",
    summary:
      "Deterministic companion-compute execution bridging estimation directly into vehicle controllers.",
    metaDescription:
      "Deterministic PX4 and ROS 2 middleware bridges streaming onboard visual-inertial state estimates and health telemetry on companion compute.",
    overview:
      "Connects perception and estimation outputs into PX4 flight controllers and ROS 2 mobility stacks alongside real-time health telemetry for safe fallback supervision.",
    feedbackNote:
      "Closes the loop with Sensing and Estimation via flight state, dynamics, and health status.",
    graphic: "autonomy",
    focusAreas: [
      {
        label: "PX4 & ROS 2 Middleware",
        detail:
          "Standardized topics and odometry/vision pose bridges for aerial and ground vehicles.",
      },
      {
        label: "Deterministic Edge Compute",
        detail:
          "Runs entirely onboard companion computers within predictable latency and memory bounds.",
      },
      {
        label: "Operator Telemetry & Fail-Safes",
        detail:
          "Reports real-time estimator confidence and tracking health to ground control stations.",
      },
    ],
    inputs: ["Fused State (~30 Hz)", "Local Spatial Representation", "Vehicle State"],
    outputs: ["PX4 / ROS 2 Pose Streams", "GCS Health Telemetry", "Fallback Readiness"],
  },
];

export const CORTEX_PAGE = {
  hero: {
    eyebrow: "PERCEPTION LABS",
    title: "Cortex",
    descriptor: "Core Navigation Engine",
    supporting: "Unified onboard navigation for autonomous systems.",
    ctaLabel: "Discuss an integration",
  },
  capabilities: {
    eyebrow: "CORE CAPABILITIES",
    heading: "Four capabilities in one architecture.",
    note: "Conceptual illustrations from our 2D visual system, not measured performance plots. Operational resilience denotes continuous state estimation across degraded inputs, not obstacle avoidance or route replanning.",
    items: [
      {
        title: "Independent Navigation",
        kind: "independent" as const,
        description:
          "Enable continuous onboard localization without relying on uninterrupted satellite signals or external positioning infrastructure.",
      },
      {
        title: "Unified Positioning",
        kind: "unified" as const,
        description:
          "Connect local motion estimates with absolute geographic references through complementary positioning sources.",
      },
      {
        title: "Adaptive Sensor Fusion",
        kind: "adaptive" as const,
        description:
          "Combine multiple sensor and navigation sources into a coherent solution, accounting for measurement quality and availability.",
      },
      {
        title: "Operational Resilience",
        kind: "resilience" as const,
        description:
          "Designed to maintain useful navigation information through degraded signals, sensor interruptions and changing operating conditions.",
      },
    ],
  },
  architecture: {
    eyebrow: "SYSTEM ARCHITECTURE",
    heading: "Unified by design.",
    supporting:
      "Local navigation, global positioning and complementary measurements working within a single onboard architecture.",
    caption:
      "Conceptual target functional architecture; optional inputs and recovery paths are configuration- and maturity-dependent. Not a literal software execution graph.",
  },
  characteristics: {
    eyebrow: "SYSTEM CHARACTERISTICS",
    heading: "Engineered for autonomous systems.",
    items: [
      {
        title: "Edge-native architecture",
        kind: "edge" as const,
        description:
          "Onboard execution within the computing, power and resource constraints of autonomous platforms.",
      },
      {
        title: "Modular sensor architecture",
        kind: "modular" as const,
        description:
          "A common navigation architecture designed to accommodate different sensor configurations and reference sources.",
      },
      {
        title: "Platform interoperability",
        kind: "interop" as const,
        description:
          "Integration with existing flight controllers, robotics middleware and OEM systems.",
      },
      {
        title: "Multi-rate processing",
        kind: "multirate" as const,
        description:
          "Frequent local motion estimates combined with intermittent global positioning and auxiliary measurements.",
      },
    ],
  },
  specifications: {
    eyebrow: "TECHNICAL SPECIFICATIONS",
    heading: "Designed to integrate.",
    supporting:
      "Cortex is designed to complement existing autonomous systems without requiring a complete replacement of their vehicle stack.",
    summaryMetrics: [
      { value: "~30 Hz", label: "Local navigation design target" },
      { value: "~1 Hz", label: "Optional global alignment target" },
      { value: "6-DoF", label: "Pose, velocity & attitude" },
    ],
    groups: [
      {
        title: "Sensing & Reference Data",
        rows: [
          { parameter: "Primary sensors", value: "Synchronized camera and IMU" },
          {
            parameter: "Auxiliary sensors",
            value: "GNSS, barometer, depth and LiDAR — configuration dependent",
          },
          {
            parameter: "Reference data",
            value: "Geo-referenced imagery and site maps (WGS84)",
          },
        ],
      },
      {
        title: "Navigation Outputs & Health",
        rows: [
          { parameter: "Position & motion", value: "6-DoF pose, velocity and attitude" },
          {
            parameter: "Global position",
            value: "Geographic position when reliable alignment is available",
          },
          { parameter: "Spatial information", value: "Local environmental representation" },
          {
            parameter: "Relative height",
            value: "AGL estimate where supported by sensor configuration",
          },
          { parameter: "Diagnostics", value: "Covariance and navigation health" },
        ],
      },
      {
        title: "Cadence, Compute & Interfaces",
        rows: [
          { parameter: "Local navigation", value: "~30 Hz design target" },
          { parameter: "Global visual alignment", value: "~1 Hz design target, optional" },
          {
            parameter: "Compute and interfaces",
            value: "Onboard edge companion compute; PX4 and ROS 2",
          },
          {
            parameter: "Architecture",
            value: "Modular, multi-rate navigation processing",
          },
        ],
      },
    ],
    footnote:
      "Design targets and optional sensor configurations vary by platform hardware and integration stage.",
  },
} as const;

export const CORTEX_SPEC = {
  tagline: "Unified onboard perception and state estimation engine.",
  metrics: [
    { value: "~30 Hz", label: "Local estimation target" },
    { value: "6-DoF", label: "Motion estimation" },
    { value: "Edge", label: "Onboard processing" },
  ],
  pipeline: ["Sense", "Perceive", "Map", "Estimate", "Integrate"],
  capabilities: [
    {
      title: "Onboard Perception & Estimation",
      detail:
        "Synchronized cameras and IMUs drive real-time feature tracking, local 3D mapping, and ~30 Hz 6-DoF pose directly on companion compute.",
    },
    {
      title: "Local Estimation vs. Global Alignment",
      detail:
        "High-rate local estimation tracks motion continuously without maps (~30 Hz); optional ~1 Hz geo-referenced visual matching anchors absolute position when reference imagery exists.",
    },
    {
      title: "Health-Monitored Vehicle Handoff",
      detail:
        "Isolates corrupted inputs and streams continuous pose, velocity, relative height (AGL), and tracking confidence into PX4 and ROS 2 stacks.",
    },
  ],
  modes: [
    {
      name: "Local Spatial Estimation",
      cadence: "~30 Hz onboard",
      detail:
        "Infrastructure-free relative 6-DoF pose, velocity, and local mapping computed solely from synchronized camera and inertial measurements.",
    },
    {
      name: "Optional Global Map Alignment",
      cadence: "~1 Hz when maps exist",
      detail:
        "Matches live imagery against pre-recorded geo-referenced site maps (WGS84) to eliminate accumulated long-horizon drift.",
    },
    {
      name: "Fused Health-Gated Output",
      cadence: "~30 Hz vehicle stream",
      detail:
        "Combines local estimation, global alignment, barometer, GNSS, and auxiliary inputs while gating out unreliable signals.",
    },
  ],
  integration: [
    {
      label: "Inputs",
      value: "Synchronized camera + IMU (optional barometer, depth/LiDAR, GNSS, reference maps)",
    },
    {
      label: "Outputs",
      value: "6-DoF pose, velocity, attitude, relative height (AGL), health & covariance",
    },
    {
      label: "Cadence",
      value: "~30 Hz local estimation & fusion · ~1 Hz optional global visual alignment",
    },
    {
      label: "Interfaces",
      value: "PX4 and ROS 2 flight/mobility interfaces, edge companion compute modules",
    },
  ],
  status: [
    {
      stage: "Implemented",
      detail:
        "Core perception and visual-inertial state estimation pipeline with PX4 / ROS 2 interfaces and simulation testbeds.",
    },
    {
      stage: "In Active Evaluation",
      detail:
        "Closed-loop aerial flight campaigns combining ~30 Hz local estimation, local spatial mapping, and optional ~1 Hz global map alignment.",
    },
    {
      stage: "Operating Boundaries",
      detail:
        "Without global reference maps or GNSS, standalone visual-inertial tracking estimates relative local motion and accumulates gradual drift over distance; performance depends on visual texture, lighting, and sensor timing synchronization.",
    },
  ],
} as const;

export const SOLUTION_AREAS = [
  {
    index: "01",
    scope: "AERIAL AUTONOMY",
    title: "Resilient onboard localization beyond reliable GNSS.",
    summary:
      "Designed first for multirotor UAV inspection and mapping operating near structures, under canopy, or across RF-contested corridors where satellite fixes drop out or distort.",
    points: [
      {
        label: "The GNSS Challenge",
        detail:
          "Satellite signals degrade rapidly under forest cover, inside industrial structures, and near metallic towers via occlusion or multipath interference.",
      },
      {
        label: "Onboard Localization via Cortex",
        detail:
          "Cortex estimates continuous 6-DoF vehicle motion purely from synchronized onboard camera and inertial streams—without ground beacons.",
      },
      {
        label: "Local Estimation vs. Global Alignment",
        detail:
          "Runs ~30 Hz local relative pose estimation by default, and optionally aligns with pre-recorded geo-referenced site maps (~1 Hz WGS84) when absolute positioning is needed.",
      },
      {
        label: "Camera–IMU & Stack Integration",
        detail:
          "Supports downward- or forward-facing calibrated camera–IMU rigs on companion compute with direct PX4, ROS 2, and GCS health telemetry.",
      },
      {
        label: "Development & Validation Status",
        detail:
          "Core estimation pipeline and autopilot interfaces are implemented; closed-loop multi-trial flight validation and map-alignment trials are active.",
      },
    ],
    ctaLabel: "Explore Cortex",
    href: "/cortex",
    graphic: "uav" as const,
  },
  {
    index: "02",
    scope: "ROBOTIC SPATIAL INTELLIGENCE",
    title: "Spatial perception in unstructured mobile environments.",
    summary:
      "Extending Cortex's onboard perception and state estimation architecture to wheeled and legged robotic platforms operating indoors and across irregular terrain.",
    points: [
      {
        label: "Unstructured Localization",
        detail:
          "Maintains consistent local frame tracking inside indoor facilities, warehouses, and mixed outdoor yards devoid of satellite reception.",
      },
      {
        label: "Multi-Sensor Perception",
        detail:
          "Fuses stereo/monocular visual streams, IMUs, and optional depth/LiDAR inputs while filtering reflections and dynamic scene motion.",
      },
      {
        label: "Motion Estimation & Reconstruction",
        detail:
          "Builds real-time local spatial maps and obstacle clearance geometry alongside continuous 6-DoF odometry on onboard hardware.",
      },
      {
        label: "Platform Integration",
        detail:
          "Exposes standardized ROS 2 pose, point-cloud/map, and health topics adaptable across varying robot chassis kinematics.",
      },
      {
        label: "Development Scope",
        detail:
          "Active R&D focus extending current aerial estimation pipelines to mobile robotics sensor configurations and indoor navigation suites.",
      },
    ],
    status: "Development focus",
    graphic: "robotics" as const,
  },
] as const;

export const RESEARCH_TRACKS = [
  {
    code: "01",
    topic: "Camera–IMU Synchronization & Timing Skew",
    summary:
      "Analyzing sub-millisecond exposure timestamp offsets (δt), hardware triggering vs. online calibration, and their impact on visual triangulation stability during agile maneuvers.",
  },
  {
    code: "02",
    topic: "Coupled ~30 Hz Local & ~1 Hz Global Map Alignment",
    summary:
      "Architecting health-gated fusion across high-frequency visual-inertial odometry and intermittent low-rate global visual localization without jump discontinuities.",
  },
  {
    code: "03",
    topic: "Deterministic Onboard Edge Profiling",
    summary:
      "Evaluating memory bounds, frame-drop resilience, and signal-health fail-safes when running real-time spatial pipelines inside companion SWaP budgets.",
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
      "Leads perception algorithms, multi-sensor state estimation, and Cortex core architecture.",
  },
  {
    name: "Lakshya Agrawal",
    role: "Co-Founder",
    email: "lakshya@perceptionlab.com",
    linkedin: "https://www.linkedin.com/in/lagrawal/",
    expertise: "Avionics, Integration, and Product Strategy",
    focus:
      "Leads hardware bring-up, flight-stack integration, and partner engineering engagements.",
  },
] as const;
