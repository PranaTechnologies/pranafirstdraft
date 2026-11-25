"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const TRAJECTORY_WAYPOINTS = [
  new THREE.Vector3(-4.6, -0.45, 4.1),
  new THREE.Vector3(-2.8, -0.05, 2.7),
  new THREE.Vector3(-1.3, 0.4, 1.3),
  new THREE.Vector3(0.2, 0.18, 0.0),
  new THREE.Vector3(1.7, 0.62, -1.5),
  new THREE.Vector3(3.1, 0.28, -2.9),
  new THREE.Vector3(4.5, 0.8, -4.2),
];

function createSeededValue(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function SpatialFieldFallback({ isBackground = false }: { isBackground?: boolean }) {
  const staticPoints = [
    [95, 340], [130, 315], [160, 290], [185, 355], [220, 265], [250, 325],
    [285, 240], [315, 295], [345, 215], [375, 270], [410, 195], [445, 250],
    [475, 175], [510, 225], [545, 160], [580, 210], [615, 145], [645, 195],
    [680, 130], [715, 170], [140, 210], [200, 185], [260, 165], [330, 150],
    [400, 135], [485, 120], [565, 110], [650, 100], [150, 390], [270, 380],
    [390, 355], [520, 325], [635, 290], [720, 245],
  ];

  const keyNodes = [
    [245, 305],
    [365, 245],
    [485, 198],
    [605, 155],
    [710, 122],
  ];

  return (
    <svg
      role="img"
      aria-label="Illustrative three-dimensional spatial perception field and autonomous trajectory"
      viewBox="0 0 800 480"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="480" fill="#0B1110" />
      <g stroke={isBackground ? "#192521" : "#202A27"} strokeWidth="1">
        <path d="M0 390H800M0 340H800M0 290H800M0 240H800M0 190H800M0 140H800" />
        <path d="M90 480L400 100L710 480M210 480L400 100L590 480M320 480L400 100L480 480" />
      </g>
      <g
        fill={isBackground ? "#3E6352" : "#9AA59F"}
        opacity={isBackground ? "0.45" : "0.65"}
      >
        {staticPoints.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" />
        ))}
      </g>
      <path
        d="M175 340C245 305 310 272 385 240C455 210 530 182 605 155C655 136 690 130 735 115"
        stroke={isBackground ? "#7CA854" : "#F4F5F0"}
        strokeOpacity={isBackground ? "0.7" : "1"}
        strokeWidth="1.75"
        fill="none"
      />
      <g opacity={isBackground ? "0.8" : "1"}>
        {keyNodes.map(([x, y]) => (
          <g key={`k-${x}-${y}`}>
            <circle cx={x} cy={y} r="4.5" fill="#0B1110" stroke="#B9E36A" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="1.5" fill="#B9E36A" />
          </g>
        ))}
      </g>
    </svg>
  );
}

interface SpatialFieldCanvasProps {
  variant?: "background" | "framed";
}

export function SpatialFieldCanvas({ variant = "framed" }: SpatialFieldCanvasProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const width = container.clientWidth || 1280;
    const height = container.clientHeight || 720;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(new THREE.Color("#0B1110"), 1);

    const canvas = renderer.domElement;
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.zIndex = "1";
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    container.appendChild(canvas);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog("#0B1110", 9.5, 21);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 40);
    // Keep focal trajectory cluster shifted clearly into the right viewport zone when used as hero background
    const isBg = variant === "background";
    camera.position.set(isBg ? -1.85 : 0.35, 2.2, isBg ? 8.6 : 8.1);
    camera.lookAt(isBg ? -1.45 : 0, 0.05, 0);

    const worldGroup = new THREE.Group();
    if (isBg) {
      worldGroup.position.x = 2.15;
    }
    scene.add(worldGroup);

    const grid = new THREE.GridHelper(
      18,
      24,
      isBg ? 0x22332c : 0x2c3a35,
      isBg ? 0x131d19 : 0x1a2320,
    );
    grid.position.y = -1.65;
    worldGroup.add(grid);

    const axesGeometry = new THREE.BufferGeometry();
    axesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        [
          0, -1.64, 0, 1.4, -1.64, 0,
          0, -1.64, 0, 0, -0.25, 0,
          0, -1.64, 0, 0, -1.64, -1.4,
        ],
        3,
      ),
    );
    axesGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(
        isBg
          ? [
              0.52, 0.72, 0.34, 0.52, 0.72, 0.34,
              0.24, 0.38, 0.31, 0.24, 0.38, 0.31,
              0.24, 0.38, 0.31, 0.24, 0.38, 0.31,
            ]
          : [
              0.725, 0.89, 0.415, 0.725, 0.89, 0.415,
              0.6, 0.67, 0.63, 0.6, 0.67, 0.63,
              0.6, 0.67, 0.63, 0.6, 0.67, 0.63,
            ],
        3,
      ),
    );
    const axesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    worldGroup.add(new THREE.LineSegments(axesGeometry, axesMaterial));

    const rand = createSeededValue(42019);
    const pointCount = 1350;
    const positions = new Float32Array(pointCount * 3);
    const colors = new Float32Array(pointCount * 3);
    const curve = new THREE.CatmullRomCurve3(TRAJECTORY_WAYPOINTS);
    const landmarkTargets: THREE.Vector3[] = [];

    // Separate background cloud hues (deep teal-sage & olive-green) cleanly from bright white foreground typography
    const slateColor = new THREE.Color(isBg ? "#294137" : "#7D8A83");
    const brightColor = new THREE.Color(isBg ? "#446D59" : "#E8EBE4");
    const signalColor = new THREE.Color(isBg ? "#7DAA4B" : "#B9E36A");

    for (let i = 0; i < pointCount; i++) {
      const t = i / pointCount;
      const spine = curve.getPoint(t);
      const side = i % 2 === 0 ? 1 : -1;
      const cluster = rand();

      let px: number;
      let py: number;
      let pz: number;

      if (cluster < 0.7) {
        const lateral = side * (1.15 + rand() * 3.1);
        const vertical = -1.5 + rand() * 3.2;
        const depthJitter = (rand() - 0.5) * 1.5;
        px = spine.x + lateral;
        py = vertical;
        pz = spine.z + depthJitter;
      } else {
        px = spine.x + (rand() - 0.5) * 5.6;
        py = rand() < 0.7 ? -1.55 + rand() * 0.4 : 0.7 + rand() * 1.3;
        pz = spine.z + (rand() - 0.5) * 2.4;
      }

      positions[i * 3] = px;
      positions[i * 3 + 1] = py;
      positions[i * 3 + 2] = pz;

      const isFeatureLandmark = i % 15 === 0;
      if (isFeatureLandmark) {
        landmarkTargets.push(new THREE.Vector3(px, py, pz));
      }

      const c = isFeatureLandmark
        ? signalColor
        : rand() > 0.45
          ? brightColor
          : slateColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const cloudGeometry = new THREE.BufferGeometry();
    cloudGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    cloudGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const cloudMaterial = new THREE.PointsMaterial({
      size: isBg ? 0.072 : 0.085,
      vertexColors: true,
      transparent: true,
      opacity: isBg ? 0.62 : 0.92,
      sizeAttenuation: true,
    });
    worldGroup.add(new THREE.Points(cloudGeometry, cloudMaterial));

    const curvePoints = curve.getPoints(200);
    const referenceGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const referenceMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(isBg ? "#21332C" : "#2D3A35"),
      transparent: true,
      opacity: isBg ? 0.75 : 0.9,
    });
    worldGroup.add(new THREE.Line(referenceGeo, referenceMat));

    const trajectoryGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const initialSegmentCount = Math.floor(
      curvePoints.length * (prefersReducedMotion ? 0.85 : 0.65),
    );
    trajectoryGeometry.setDrawRange(0, initialSegmentCount);
    const trajectoryMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(isBg ? "#84B354" : "#F4F5F0"),
      transparent: true,
      opacity: isBg ? 0.78 : 0.98,
    });
    worldGroup.add(new THREE.Line(trajectoryGeometry, trajectoryMaterial));

    const keyframeCount = 7;
    const keyframePositions = new Float32Array(keyframeCount * 3);
    for (let k = 0; k < keyframeCount; k++) {
      const pt = curve.getPoint(k / (keyframeCount - 1));
      keyframePositions[k * 3] = pt.x;
      keyframePositions[k * 3 + 1] = pt.y;
      keyframePositions[k * 3 + 2] = pt.z;
    }
    const keyframeGeometry = new THREE.BufferGeometry();
    keyframeGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(keyframePositions, 3),
    );
    keyframeGeometry.setDrawRange(0, prefersReducedMotion ? keyframeCount : 5);
    const keyframeMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#B9E36A"),
      size: 0.22,
      sizeAttenuation: true,
    });
    worldGroup.add(new THREE.Points(keyframeGeometry, keyframeMaterial));

    const frustumGeo = new THREE.BufferGeometry();
    const f = 0.24;
    const d = 0.44;
    frustumGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        [
          0, 0, 0, d, f, f,
          0, 0, 0, d, -f, f,
          0, 0, 0, d, -f, -f,
          0, 0, 0, d, f, -f,
          d, f, f, d, -f, f,
          d, -f, f, d, -f, -f,
          d, -f, -f, d, f, -f,
          d, f, -f, d, f, f,
        ],
        3,
      ),
    );
    const frustumMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color("#B9E36A"),
      transparent: true,
      opacity: 0.95,
    });
    const sensorFrustum = new THREE.LineSegments(frustumGeo, frustumMaterial);
    worldGroup.add(sensorFrustum);

    const rayCount = 8;
    const rayPositions = new Float32Array(rayCount * 2 * 3);
    const raysGeo = new THREE.BufferGeometry();
    raysGeo.setAttribute("position", new THREE.BufferAttribute(rayPositions, 3));
    const raysMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#B9E36A"),
      transparent: true,
      opacity: 0.44,
    });
    const featureRays = new THREE.LineSegments(raysGeo, raysMat);
    worldGroup.add(featureRays);

    const updatePoseAndRays = (t: number) => {
      const headPos = curve.getPoint(t);
      const tangent = curve.getTangent(t);
      sensorFrustum.position.copy(headPos);
      sensorFrustum.lookAt(headPos.clone().add(tangent));
      sensorFrustum.rotateY(-Math.PI / 2);

      const sorted = landmarkTargets
        .map((pt) => ({ pt, dist: pt.distanceToSquared(headPos) }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, rayCount);

      const attr = raysGeo.getAttribute("position") as THREE.BufferAttribute;
      for (let r = 0; r < sorted.length; r++) {
        attr.setXYZ(r * 2, headPos.x, headPos.y, headPos.z);
        attr.setXYZ(r * 2 + 1, sorted[r].pt.x, sorted[r].pt.y, sorted[r].pt.z);
      }
      attr.needsUpdate = true;
    };

    updatePoseAndRays(prefersReducedMotion ? 0.72 : 0.65);

    const pointerTarget = { x: 0, y: 0 };
    const pointerCurrent = { x: 0, y: 0 };

    // Track pointer across parent section when used as background so text overlay never blocks interaction
    const pointerScope = isBg ? (container.parentElement ?? window) : container;

    const handlePointerMove = (event: Event) => {
      const pe = event as PointerEvent;
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = ((pe.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((pe.clientY - rect.top) / rect.height) * 2 - 1;
      pointerTarget.x = Math.max(-1, Math.min(1, nx));
      pointerTarget.y = Math.max(-1, Math.min(1, ny));
    };

    const handlePointerLeave = () => {
      pointerTarget.x = 0;
      pointerTarget.y = 0;
    };

    pointerScope.addEventListener("pointermove", handlePointerMove);
    pointerScope.addEventListener("pointerleave", handlePointerLeave);

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry || !renderer) return;
      const w = Math.max(1, entry.contentRect.width);
      const h = Math.max(1, entry.contentRect.height);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    let frameId = 0;
    const startTime = performance.now();
    const cycleDurationMs = 8500;

    renderer.render(scene, camera);

    if (!prefersReducedMotion) {
      const animate = (now: number) => {
        const cycle = ((now - startTime) % cycleDurationMs) / cycleDurationMs;
        const progress = Math.min(1, 0.35 + cycle * 0.75);

        const visibleSegments = Math.max(
          8,
          Math.floor(progress * curvePoints.length),
        );
        trajectoryGeometry.setDrawRange(0, visibleSegments);

        const visibleKeyframes = Math.max(
          2,
          Math.ceil(progress * keyframeCount),
        );
        keyframeGeometry.setDrawRange(0, visibleKeyframes);

        updatePoseAndRays(Math.min(0.98, Math.max(0.25, progress)));

        pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * 0.06;
        pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * 0.06;

        worldGroup.rotation.y =
          Math.sin(now * 0.00028) * 0.08 + pointerCurrent.x * 0.14;
        worldGroup.rotation.x = pointerCurrent.y * 0.08;

        renderer?.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };

      frameId = requestAnimationFrame(animate);
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      pointerScope.removeEventListener("pointermove", handlePointerMove);
      pointerScope.removeEventListener("pointerleave", handlePointerLeave);
      axesGeometry.dispose();
      axesMaterial.dispose();
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      referenceGeo.dispose();
      referenceMat.dispose();
      trajectoryGeometry.dispose();
      trajectoryMaterial.dispose();
      keyframeGeometry.dispose();
      keyframeMaterial.dispose();
      frustumGeo.dispose();
      frustumMaterial.dispose();
      raysGeo.dispose();
      raysMat.dispose();
      renderer?.dispose();
      if (canvas.parentNode === container) {
        container.removeChild(canvas);
      }
    };
  }, [variant]);

  if (variant === "background") {
    return (
      <div
        ref={mountRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full bg-deep-field opacity-55 md:opacity-100"
      >
        <SpatialFieldFallback isBackground />
      </div>
    );
  }

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-card border border-deep-border bg-deep-field text-field">
      <div className="flex items-center justify-between gap-3 border-b border-deep-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-deep-muted sm:text-xs">
        <span className="truncate">THE PERCEPTION FIELD · 3D VIEWPORT</span>
        <span className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-field">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-signal"
          />
          ILLUSTRATIVE RECONSTRUCTION
        </span>
      </div>

      <div
        ref={mountRef}
        className="relative aspect-[4/3] w-full cursor-crosshair bg-deep-field sm:aspect-[16/11]"
        aria-label="Interactive illustrative three-dimensional perception field and autonomous trajectory"
      >
        <SpatialFieldFallback />

        <div className="pointer-events-none absolute inset-x-4 bottom-3 z-10 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.11em] text-deep-muted">
          <span>ILLUSTRATIVE SPATIAL FIELD</span>
          <span>TRAJECTORY + SPARSE POINT CLOUD</span>
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y divide-deep-border border-t border-deep-border bg-deep-surface sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="px-4 py-3.5 font-mono text-xs uppercase tracking-[0.11em]">
          <span className="text-deep-muted">INPUT</span>
          <p className="mt-1 text-field">CAMERA + IMU + DEPTH</p>
        </div>
        <div className="px-4 py-3.5 font-mono text-xs uppercase tracking-[0.11em]">
          <span className="text-deep-muted">ENGINE</span>
          <p className="mt-1 text-field">CORTEX PERCEPTION</p>
        </div>
        <div className="px-4 py-3.5 font-mono text-xs uppercase tracking-[0.11em]">
          <span className="text-deep-muted">EXECUTION</span>
          <p className="mt-1 text-field">ONBOARD EDGE AUTONOMY</p>
        </div>
      </div>
    </div>
  );
}
