export type CortexCapabilityKind =
  | "independent"
  | "unified"
  | "adaptive"
  | "resilience";

const GRID_7X7 = [24, 46, 68, 90, 112, 134, 156];
const GRID_Y_7X7 = [18, 38, 58, 78, 98, 118, 138];

/**
 * Compact 2D geometric capability indicator using Chapter 05 rules:
 * transparent over Carbon (#101211), 7x7 Ash dot grid, off-white reference
 * geometry (1.2), and Signal (#C5F36B) active estimate (1.6, r=3.1).
 */
export function CortexCapabilitySymbol({
  kind,
  className = "h-24 w-28 shrink-0 sm:h-28 sm:w-32 lg:h-32 lg:w-36",
}: {
  kind: CortexCapabilityKind;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 160"
      className={className}
    >
      <g fill="#858B86" opacity="0.35">
        {GRID_7X7.map((gx) =>
          GRID_Y_7X7.map((gy) => (
            <circle key={`${gx}-${gy}`} cx={gx} cy={gy} r="1.1" />
          )),
        )}
      </g>

      {kind === "independent" && (
        <g fill="none">
          <circle cx="134" cy="40" r="24" stroke="#858B86" strokeWidth="1.2" opacity="0.7" />
          <circle cx="134" cy="40" r="14" stroke="#F5F5F2" strokeWidth="1.2" />
          <path d="M24 128H156" stroke="#858B86" strokeWidth="1.2" opacity="0.35" />
          <polyline
            points="32,126 62,102 88,108 110,72 134,40"
            stroke="#C5F36B"
            strokeWidth="1.6"
          />
          <circle cx="32" cy="126" r="3.1" fill="#C5F36B" />
          <circle cx="62" cy="102" r="3.1" fill="#C5F36B" />
          <circle cx="88" cy="108" r="3.1" fill="#101211" stroke="#C5F36B" strokeWidth="1.4" />
          <circle cx="110" cy="72" r="3.1" fill="#C5F36B" />
          <circle cx="134" cy="40" r="3.1" fill="#C5F36B" />
        </g>
      )}

      {kind === "unified" && (
        <g fill="none">
          <circle cx="90" cy="78" r="48" stroke="#858B86" strokeWidth="1.2" />
          <circle cx="90" cy="78" r="32" stroke="#F5F5F2" strokeWidth="1.2" />
          <circle cx="90" cy="78" r="16" stroke="#F5F5F2" strokeWidth="1.2" />
          <line x1="24" y1="78" x2="156" y2="78" stroke="#858B86" strokeWidth="1.2" />
          <line x1="90" y1="18" x2="90" y2="138" stroke="#858B86" strokeWidth="1.2" />
          <line x1="90" y1="78" x2="124" y2="48" stroke="#C5F36B" strokeWidth="1.6" />
          <circle cx="90" cy="78" r="3.1" fill="#F5F5F2" />
          <circle cx="124" cy="48" r="3.1" fill="#C5F36B" />
        </g>
      )}

      {kind === "adaptive" && (
        <g fill="none">
          <line x1="34" y1="42" x2="146" y2="114" stroke="#F5F5F2" strokeWidth="1.2" />
          <line x1="34" y1="114" x2="146" y2="42" stroke="#858B86" strokeWidth="1.2" />
          <line x1="28" y1="78" x2="90" y2="78" stroke="#F5F5F2" strokeWidth="1.2" />
          <line x1="90" y1="78" x2="152" y2="78" stroke="#C5F36B" strokeWidth="1.6" />
          <circle cx="34" cy="42" r="3.1" fill="#F5F5F2" />
          <circle cx="34" cy="114" r="3.1" fill="#858B86" />
          <circle cx="28" cy="78" r="3.1" fill="#F5F5F2" />
          <circle cx="90" cy="78" r="3.1" fill="#C5F36B" />
          <circle cx="152" cy="78" r="3.1" fill="#C5F36B" />
        </g>
      )}

      {kind === "resilience" && (
        <g fill="none">
          <g stroke="#858B86" strokeWidth="1.2">
            <circle cx="62" cy="64" r="7" />
            <line x1="57" y1="59" x2="67" y2="69" />
            <line x1="67" y1="59" x2="57" y2="69" />
            <circle cx="112" cy="42" r="7" />
            <line x1="107" y1="37" x2="117" y2="47" />
            <line x1="117" y1="37" x2="107" y2="47" />
          </g>
          <polyline
            points="32,126 68,100 102,78 142,46"
            stroke="#C5F36B"
            strokeWidth="1.6"
          />
          <circle cx="32" cy="126" r="3.1" fill="#C5F36B" />
          <circle cx="68" cy="100" r="3.1" fill="#C5F36B" />
          <circle cx="102" cy="78" r="3.1" fill="#C5F36B" />
          <circle cx="142" cy="46" r="3.1" fill="#C5F36B" />
        </g>
      )}
    </svg>
  );
}

/**
 * Full-bleed subtle 2D navigation reference background integrated behind the Cortex section.
 * Non-interactive so pointer/scroll events pass cleanly to foreground UI.
 */
export function CortexNavigationBackground() {
  const cols = Array.from({ length: 24 }, (_, i) => 40 + i * 56);
  const rows = Array.from({ length: 14 }, (_, i) => 36 + i * 54);

  const rings = [
    { cx: 280, cy: 520, outer: 112, mid: 72, inner: 36 },
    { cx: 700, cy: 360, outer: 148, mid: 96, inner: 48 },
    { cx: 1110, cy: 205, outer: 124, mid: 82, inner: 42 },
  ];

  const inactiveObservations = [
    [160, 290],
    [235, 195],
    [410, 585],
    [520, 175],
    [840, 560],
    [980, 495],
    [1190, 430],
    [1290, 295],
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <rect width="1440" height="760" fill="#101211" />

        {/* Subtle reference dot matrix */}
        <g fill="#858B86" opacity="0.28">
          {cols.map((x) =>
            rows.map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.3" />
            )),
          )}
        </g>

        {/* Coordinate frame axes */}
        <g stroke="#252826" strokeWidth="1" opacity="0.85">
          <line x1="0" y1="360" x2="1440" y2="360" />
          <line x1="700" y1="0" x2="700" y2="760" />
        </g>

        {/* Reference rings */}
        <g fill="none">
          {rings.map((ring) => (
            <g key={`${ring.cx}-${ring.cy}`}>
              <circle cx={ring.cx} cy={ring.cy} r={ring.outer} stroke="#858B86" strokeWidth="1.2" opacity="0.28" />
              <circle cx={ring.cx} cy={ring.cy} r={ring.mid} stroke="#F5F5F2" strokeWidth="1.2" opacity="0.24" />
              <circle cx={ring.cx} cy={ring.cy} r={ring.inner} stroke="#858B86" strokeWidth="1.2" opacity="0.32" />
            </g>
          ))}

          {/* Uncertainty ellipse around active frontier estimate */}
          <ellipse
            cx="1110"
            cy="205"
            rx="165"
            ry="76"
            transform="rotate(-22 1110 205)"
            stroke="#858B86"
            strokeWidth="1.2"
            strokeDasharray="6 7"
            opacity="0.32"
          />
        </g>

        {/* Observation baselines & nodes */}
        <g stroke="#858B86" strokeWidth="1.1" opacity="0.26">
          <line x1="280" y1="520" x2="235" y2="195" />
          <line x1="700" y1="360" x2="520" y2="175" />
          <line x1="700" y1="360" x2="840" y2="560" />
          <line x1="1110" y1="205" x2="1190" y2="430" />
        </g>
        <g fill="#858B86" opacity="0.42">
          {inactiveObservations.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.8" />
          ))}
        </g>

        {/* Subtle Signal Green local trajectory across field */}
        <polyline
          points="75,645 180,582 280,520 490,442 700,360 910,305 1110,205 1355,112"
          fill="none"
          stroke="#C5F36B"
          strokeWidth="2"
          opacity="0.4"
        />

        <g opacity="0.52">
          <circle cx="180" cy="582" r="3.4" fill="#F5F5F2" />
          <circle cx="280" cy="520" r="4.2" fill="#C5F36B" />
          <circle cx="490" cy="442" r="3.4" fill="#F5F5F2" />
          <circle cx="700" cy="360" r="4.2" fill="#C5F36B" />
          <circle cx="910" cy="305" r="3.6" fill="#C5F36B" />
          <circle cx="1110" cy="205" r="5.2" fill="#C5F36B" />
          <circle cx="1355" cy="112" r="3.6" fill="#C5F36B" />
        </g>
      </svg>

      {/* Center and edge Carbon vignette preserving foreground typography legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 66% 58% at 50% 48%, rgba(16,18,17,0.85) 0%, rgba(16,18,17,0.52) 56%, rgba(16,18,17,0.82) 100%)",
        }}
      />
    </div>
  );
}
