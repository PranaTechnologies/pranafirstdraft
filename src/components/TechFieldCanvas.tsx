"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function TechFieldFallback() {
  const terrainCurves = [
    "M0 365 C 140 345, 250 385, 400 350 C 550 315, 670 355, 800 330",
    "M0 325 C 160 300, 290 340, 430 305 C 580 270, 690 305, 800 285",
    "M0 285 C 150 265, 310 295, 460 260 C 600 228, 700 258, 800 240",
    "M0 245 C 170 225, 330 250, 490 218 C 630 190, 715 215, 800 202",
  ];

  const scanNodes = [
    [520, 145],
    [615, 195],
    [455, 225],
    [575, 265],
    [685, 235],
    [540, 315],
  ];

  return (
    <svg
      role="img"
      aria-label="Illustrative three-dimensional volumetric perception strata and topographic lattice"
      viewBox="0 0 800 480"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="480" fill="#0B1110" />
      <g stroke="#1C2C26" strokeWidth="1" fill="none">
        <ellipse cx="565" cy="230" rx="210" ry="72" />
        <ellipse cx="565" cy="230" rx="145" ry="48" stroke="#2D4A3E" />
        <ellipse cx="565" cy="230" rx="75" ry="25" stroke="#5A8344" strokeOpacity="0.65" />
      </g>
      <g stroke="#294137" strokeWidth="1.2" fill="none">
        {terrainCurves.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g stroke="#446D59" strokeWidth="1" strokeDasharray="3 4">
        <line x1="520" y1="145" x2="575" y2="265" />
        <line x1="615" y1="195" x2="540" y2="315" />
        <line x1="455" y1="225" x2="685" y2="235" />
      </g>
      <g>
        {scanNodes.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="4.5" fill="#0B1110" stroke="#7DAA4B" strokeWidth="1.3" />
            <circle cx={x} cy={y} r="1.5" fill="#7DAA4B" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function TechFieldCanvas() {
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
    const height = container.clientHeight || 680;

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
    scene.fog = new THREE.Fog("#0B1110", 9, 20);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 40);
    camera.position.set(-1.7, 3.1, 8.8);
    camera.lookAt(-1.15, 0.1, 0);

    const rig = new THREE.Group();
    rig.position.x = 2.05;
    scene.add(rig);

    const disposables: Array<{ dispose: () => void }> = [];

    // 1. Undulating topographic surface strata (environmental terrain & depth wavefield)
    const rowCount = 16;
    const colSegs = 46;
    const contourLines: Array<{
      geometry: THREE.BufferGeometry;
      zBase: number;
      positions: Float32Array;
    }> = [];

    for (let r = 0; r < rowCount; r++) {
      const zBase = -3.6 + (r / (rowCount - 1)) * 7.2;
      const pts = new Float32Array((colSegs + 1) * 3);
      for (let c = 0; c <= colSegs; c++) {
        const x = -5.2 + (c / colSegs) * 10.4;
        const y = -1.35 + Math.sin(x * 0.75 + zBase * 0.65) * 0.35;
        pts[c * 3] = x;
        pts[c * 3 + 1] = y;
        pts[c * 3 + 2] = zBase;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pts, 3));
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color(r % 4 === 0 ? "#446D59" : "#243930"),
        transparent: true,
        opacity: r % 4 === 0 ? 0.8 : 0.55,
      });
      rig.add(new THREE.Line(geo, mat));
      contourLines.push({ geometry: geo, zBase, positions: pts });
      disposables.push(geo, mat);
    }

    // 2. Three concentric perception scan rings (multi-strata spatial bounds)
    const strataRadii = [1.45, 2.55, 3.7];
    const strataHeights = [1.05, 0.25, -0.55];
    const ringGroup = new THREE.Group();
    rig.add(ringGroup);

    strataRadii.forEach((radius, idx) => {
      const segments = 80;
      const ringPts = new Float32Array((segments + 1) * 3);
      for (let s = 0; s <= segments; s++) {
        const theta = (s / segments) * Math.PI * 2;
        ringPts[s * 3] = Math.cos(theta) * radius;
        ringPts[s * 3 + 1] = strataHeights[idx];
        ringPts[s * 3 + 2] = Math.sin(theta) * radius;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(ringPts, 3));
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color(idx === 0 ? "#85B352" : "#345446"),
        transparent: true,
        opacity: idx === 0 ? 0.78 : 0.6,
      });
      ringGroup.add(new THREE.Line(geo, mat));
      disposables.push(geo, mat);
    });

    // 3. Coupled vertical sensor-graph columns connecting strata planes
    const columnNodes: Array<[number, number]> = [
      [-1.8, -1.2],
      [0.6, -2.1],
      [2.1, -0.4],
      [-0.7, 1.8],
      [1.4, 1.5],
      [2.8, -1.7],
      [-2.6, 0.8],
      [0.1, 0.2],
    ];
    const linkPositions = new Float32Array(columnNodes.length * 2 * 3);
    const nodePositions = new Float32Array(columnNodes.length * 3);

    columnNodes.forEach(([x, z], idx) => {
      const yBot = -1.35 + Math.sin(x * 0.75 + z * 0.65) * 0.35;
      const yTop = 0.75 + (idx % 3) * 0.42;
      linkPositions[idx * 6] = x;
      linkPositions[idx * 6 + 1] = yBot;
      linkPositions[idx * 6 + 2] = z;
      linkPositions[idx * 6 + 3] = x;
      linkPositions[idx * 6 + 4] = yTop;
      linkPositions[idx * 6 + 5] = z;

      nodePositions[idx * 3] = x;
      nodePositions[idx * 3 + 1] = yTop;
      nodePositions[idx * 3 + 2] = z;
    });

    const linksGeo = new THREE.BufferGeometry();
    linksGeo.setAttribute("position", new THREE.BufferAttribute(linkPositions, 3));
    const linksMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#568259"),
      transparent: true,
      opacity: 0.65,
    });
    rig.add(new THREE.LineSegments(linksGeo, linksMat));
    disposables.push(linksGeo, linksMat);

    const nodesGeo = new THREE.BufferGeometry();
    nodesGeo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    const nodesMat = new THREE.PointsMaterial({
      color: new THREE.Color("#9AC85B"),
      size: 0.16,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    rig.add(new THREE.Points(nodesGeo, nodesMat));
    disposables.push(nodesGeo, nodesMat);

    const pointerTarget = { x: 0, y: 0 };
    const pointerCurrent = { x: 0, y: 0 };
    const pointerScope = container.parentElement ?? window;

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
    renderer.render(scene, camera);

    if (!prefersReducedMotion) {
      const animate = (now: number) => {
        const t = now * 0.0007;

        for (let r = 0; r < contourLines.length; r++) {
          const { geometry, zBase, positions } = contourLines[r];
          for (let c = 0; c <= colSegs; c++) {
            const x = -5.2 + (c / colSegs) * 10.4;
            positions[c * 3 + 1] =
              -1.35 +
              Math.sin(x * 0.75 + zBase * 0.65 + t) * 0.34 +
              Math.cos(x * 0.45 - t * 0.7) * 0.14;
          }
          (geometry.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
        }

        ringGroup.rotation.y = now * 0.00018;

        pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * 0.06;
        pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * 0.06;

        rig.rotation.y = Math.sin(now * 0.00024) * 0.07 + pointerCurrent.x * 0.14;
        rig.rotation.x = pointerCurrent.y * 0.07;

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
      disposables.forEach((d) => d.dispose());
      renderer?.dispose();
      if (canvas.parentNode === container) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full bg-deep-field opacity-55 md:opacity-100"
    >
      <TechFieldFallback />
    </div>
  );
}
