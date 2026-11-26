export const SITE_URL = "https://pranafirstdraft.vercel.app";

export const BRAND = {
  name: "Perception Labs",
  shortCode: "PL",
  tagline: "Spatial intelligence for autonomous machines.",
  headline: "Intelligence for machines in motion.",
  heroSupporting:
    "Building onboard perception and spatial intelligence for autonomous machines.",
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

export const TECH_PILLARS_HOME = [
  {
    name: "Sense",
    detail: "Synchronized cameras, IMUs, and auxiliary physical sensors.",
  },
  {
    name: "Perceive",
    detail: "Real-time feature tracking, scene structure, and local geometry.",
  },
  {
    name: "Estimate",
    detail: "Continuous 6-DoF state estimation and spatial understanding.",
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
    stackSummary: "Synchronized cameras, IMUs, and depth payloads.",
    summary:
      "Multi-modal cameras, inertial sensors, optional depth/LiDAR payloads, and hardware-aware synchronization.",
    overview:
      "Reliable autonomy begins with coherent physical measurements. We couple optical frames with high-rate inertial kinematics under calibrated timing and rigid extrinsics.",
    feedbackNote:
      "Receives exposure and sensor health directives from Autonomy and State Estimation.",
    graphic: "sensing",
    focusAreas: [
      {
        label: "Camera & IMU Synchronization",
        detail:
          "Aligns exposure midpoints with high-rate angular velocity and linear acceleration samples.",
      },
      {
        label: "Auxiliary Sensor Support",
        detail:
          "Optional integration of barometer, GNSS, depth, and LiDAR payloads.",
      },
    ],
    inputs: ["Optical Cameras", "High-Rate IMU", "Optional Depth, Barometer, GNSS"],
    outputs: ["Timestamped Sensor Packets", "Calibrated Frame Geometry"],
  },
  {
    slug: "perception",
    layerNumber: "02",
    shortTitle: "Perception",
    stackSummary: "Visual feature tracking and scene structure.",
    summary:
      "Feature extraction, visual tracking, and environmental observations across dynamic lighting and motion.",
    overview:
      "Extracts persistent geometric landmarks and obstacle structure from onboard imagery while filtering reflections and transient outliers.",
    feedbackNote:
      "Exchanges active keyframe and motion priors with State Estimation.",
    graphic: "perception",
    focusAreas: [
      {
        label: "Feature Extraction & Tracking",
        detail:
          "Tracks stable visual features under rapid rotation, motion blur, and lighting shifts.",
      },
      {
        label: "Outlier Filtering",
        detail:
          "Rejects degraded observations before visual constraints enter estimation.",
      },
    ],
    inputs: ["Calibrated Images", "State Prediction Priors"],
    outputs: ["Tracked Visual Features", "Observation Confidence"],
  },
  {
    slug: "state-estimation",
    layerNumber: "03",
    shortTitle: "State Estimation",
    stackSummary: "Fused 6-DoF motion and uncertainty bounds.",
    summary:
      "Coupled visual-inertial fusion, multi-source state estimation, and bounded localization.",
    overview:
      "Fuses high-rate inertial dynamics with tracked visual constraints and optional global alignment to compute smooth ~30 Hz pose, velocity, and attitude.",
    feedbackNote:
      "Supplies motion priors back to Perception and monitors estimator health.",
    graphic: "estimation",
    focusAreas: [
      {
        label: "Local Estimation (~30 Hz)",
        detail:
          "Continuous relative pose and velocity estimation directly from onboard sensors.",
      },
      {
        label: "Optional Global Alignment (~1 Hz)",
        detail:
          "Aligns live observations with geo-referenced maps or intermittent GNSS when present.",
      },
    ],
    inputs: ["IMU Kinematics", "Perception Features", "Optional Reference Maps / GNSS"],
    outputs: ["6-DoF Pose & Velocity (~30 Hz)", "State Uncertainty & Health"],
  },
  {
    slug: "spatial-intelligence",
    layerNumber: "04",
    shortTitle: "Spatial Intelligence",
    stackSummary: "Onboard local mapping and reference frames.",
    summary:
      "Local 3D geometry reconstruction, occupancy awareness, and coordinate coherence.",
    overview:
      "Transforms trajectory histories and triangulated geometry into consistent local spatial models around the vehicle without cloud offloads.",
    feedbackNote:
      "Feeds geometric constraints to State Estimation and navigable structure to Autonomy.",
    graphic: "spatial",
    focusAreas: [
      {
        label: "Local Geometry Mapping",
        detail:
          "Constructs real-time local structural representations within onboard compute limits.",
      },
      {
        label: "Reference Frame Coherence",
        detail:
          "Maintains consistent transforms across sensor, body, and local navigation frames.",
      },
    ],
    inputs: ["Estimated Trajectories", "Triangulated Landmarks & Depth"],
    outputs: ["Local Spatial Maps", "Clearance & Obstacle Geometry"],
  },
  {
    slug: "embedded-autonomy",
    layerNumber: "05",
    shortTitle: "Autonomy",
    stackSummary: "Onboard flight-stack and vehicle integration.",
    summary:
      "Deterministic edge execution connected directly to PX4, ROS 2, and operator telemetry.",
    overview:
      "Delivers perception and state outputs directly to onboard vehicle controllers and ground stations within tight size, weight, and power constraints.",
    feedbackNote:
      "Closes the loop with Sensing and Estimation via mission state and fallback readiness.",
    graphic: "autonomy",
    focusAreas: [
      {
        label: "PX4 & ROS 2 Interfaces",
        detail:
          "Native middleware integration for multirotor UAVs and mobile robotics controllers.",
      },
      {
        label: "Signal Health & Fallbacks",
        detail:
          "Continuous confidence reporting so flight stacks transition safely when environments degrade.",
      },
    ],
    inputs: ["Fused State (~30 Hz)", "Local Spatial Representation"],
    outputs: ["PX4 / ROS 2 Control Streams", "Operator Health Telemetry"],
  },
];

export const CORTEX_SPEC = {
  tagline: "Unified onboard spatial perception and state estimation engine.",
  pipeline: ["Sense", "Perceive", "Map", "Estimate", "Integrate"],
  capabilities: [
    {
      title: "Onboard Perception & Estimation",
      detail:
        "Synchronized camera and IMU measurements drive real-time feature tracking, local mapping, and ~30 Hz 6-DoF pose and velocity directly on companion compute.",
    },
    {
      title: "Multi-Source State Fusion",
      detail:
        "Combines local visual-inertial estimation with optional barometer, LiDAR, GNSS, or ~1 Hz geo-referenced visual alignment while isolating degraded inputs.",
    },
    {
      title: "Deterministic Vehicle Handoff",
      detail:
        "Streams vehicle pose, velocity, relative height (AGL), and explicit estimator health metrics straight into PX4 and ROS 2 control loops.",
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
      value: "~30 Hz onboard estimation · ~1 Hz optional global visual alignment",
    },
    {
      label: "Interfaces",
      value: "PX4, ROS 2, and companion edge compute",
    },
  ],
  status: [
    {
      stage: "Implemented",
      detail: "Core perception and visual-inertial state estimation pipeline with PX4 / ROS 2 interfaces and simulation verification.",
    },
    {
      stage: "In Active Evaluation",
      detail: "Closed-loop aerial flight testing, onboard local spatial mapping, and optional ~1 Hz global map alignment.",
    },
    {
      stage: "Operating Boundary",
      detail: "Standalone local estimation tracks relative motion and accumulates gradual drift over distance unless anchored by GNSS or reference maps.",
    },
  ],
} as const;

export const SOLUTION_AREAS = [
  {
    index: "01",
    scope: "AERIAL SYSTEMS",
    title: "Resilient navigation",
    description:
      "Onboard visual-inertial localization and spatial perception for UAVs operating where satellite positioning is unreliable or unavailable.",
    ctaLabel: "Explore Cortex",
    href: "/cortex",
    graphic: "uav" as const,
  },
  {
    index: "02",
    scope: "ROBOTIC SYSTEMS",
    title: "Spatial perception",
    description:
      "Extending our perception and estimation technology to robotic platforms operating in complex physical environments.",
    status: "Development focus",
    graphic: "robotics" as const,
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
