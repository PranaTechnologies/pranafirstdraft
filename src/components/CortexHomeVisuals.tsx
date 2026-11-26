export type CortexCapabilityKind =
  | "independent"
  | "unified"
  | "adaptive"
  | "resilience";

const GRID_7X7 = [24, 46, 68, 90, 112, 134, 156];
const GRID_Y_7X7 = [18, 38, 58, 78, 98, 118, 138];

/**
 * Shared 2D geometric capability indicator matching Chapter 03 & Chapter 05 rules:
 * flat 7x7 dot grid, Carbon (#101211) field, off-white reference lines (1.2),
 * Ash (#858B86) secondary elements, and Signal (#C5F36B) active estimate (1.6, r=3.1).
 */
export function CortexCapabilitySymbol({ kind }: { kind: CortexCapabilityKind }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 160"
      className="h-16 w-[72px] shrink-0 bg-carbon"
    >
      <rect width="180" height="160" fill="#101211" />
      <g fill="#858B86" opacity="0.45">
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
          {/* Missed observations indicated cleanly by neutral crossed markers */}
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
 * Heroic 2D navigation reference grid for Home Section 03 (Cortex introduction).
 * Flat 2D geometry following Chapter 03 & Chapter 12 rules: reference rings,
 * local trajectory, observation points, uncertainty ellipses, and active Signal Green estimate.
 */
export function CortexNavigationGrid() {
  const cols = Array.from({ length: 19 }, (_, i) => 32 + i * 38);
  const rows = Array.from({ length: 11 }, (_, i) => 28 + i * 38);

  const rings = [
    { cx: 196, cy: 298, outer: 54, mid: 36, inner: 18 },
    { cx: 368, cy: 214, outer: 62, mid: 42, inner: 22 },
    { cx: 562, cy: 118, outer: 72, mid: 48, inner: 24 },
  ];

  const inactiveObservations = [
    [108, 174],
    [154, 136],
    [248, 352],
    [296, 128],
    [438, 326],
    [514, 294],
    [640, 246],
    [684, 184],
  ];

  return (
    <figure className="mx-auto w-full max-w-[780px]">
      <div className="aspect-[16/10] w-full bg-carbon p-0 sm:aspect-[16/9]">
        <svg
          role="img"
          aria-label="Conceptual 2D navigation reference grid showing reference rings, uncertainty contours, tracked observation points, and Signal Green trajectory estimate"
          viewBox="0 0 760 436"
          className="h-full w-full"
        >
          <rect width="760" height="436" fill="#101211" />

          {/* Subtle dot grid */}
          <g fill="#858B86" opacity="0.45">
            {cols.map((x) =>
              rows.map((y) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="1.25" />
              )),
            )}
          </g>

          {/* Local frame reference axes */}
          <g stroke="#252826" strokeWidth="1.2">
            <line x1="32" y1="218" x2="728" y2="218" />
            <line x1="368" y1="28" x2="368" y2="408" />
          </g>

          {/* Reference rings anchored along estimated keyframes */}
          <g fill="none">
            {rings.map((ring) => (
              <g key={`${ring.cx}-${ring.cy}`}>
                <circle cx={ring.cx} cy={ring.cy} r={ring.outer} stroke="#858B86" strokeWidth="1.2" opacity="0.65" />
                <circle cx={ring.cx} cy={ring.cy} r={ring.mid} stroke="#F5F5F2" strokeWidth="1.2" opacity="0.85" />
                <circle cx={ring.cx} cy={ring.cy} r={ring.inner} stroke="#858B86" strokeWidth="1.2" />
              </g>
            ))}

            {/* Uncertainty contour tilted around active frontier estimate */}
            <ellipse
              cx="562"
              cy="118"
              rx="92"
              ry="44"
              transform="rotate(-24 562 118)"
              stroke="#858B86"
              strokeWidth="1.2"
              strokeDasharray="4 5"
            />
          </g>

          {/* Inactive / background observations and baseline tie lines */}
          <g stroke="#858B86" strokeWidth="1.1" opacity="0.55">
            <line x1="196" y1="298" x2="154" y2="136" />
            <line x1="368" y1="214" x2="296" y2="128" />
            <line x1="368" y1="214" x2="438" y2="326" />
            <line x1="562" y1="118" x2="640" y2="246" />
          </g>
          <g fill="#858B86">
            {inactiveObservations.map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" />
            ))}
          </g>

          {/* Reference segments connecting accepted observations */}
          <g stroke="#F5F5F2" strokeWidth="1.2" opacity="0.75">
            <line x1="562" y1="118" x2="514" y2="294" />
            <line x1="196" y1="298" x2="248" y2="352" />
          </g>

          {/* Signal Green active local navigation trajectory */}
          <polyline
            points="58,368 124,334 196,298 282,258 368,214 468,188 562,118 706,66"
            fill="none"
            stroke="#C5F36B"
            strokeWidth="2.2"
          />

          {/* Trajectory nodes and active estimate marker */}
          <g>
            <circle cx="58" cy="368" r="3.4" fill="#C5F36B" />
            <circle cx="124" cy="334" r="3.1" fill="#F5F5F2" />
            <circle cx="196" cy="298" r="4" fill="#C5F36B" />
            <circle cx="282" cy="258" r="3.1" fill="#F5F5F2" />
            <circle cx="368" cy="214" r="4" fill="#C5F36B" />
            <circle cx="468" cy="188" r="3.4" fill="#C5F36B" />
            <circle cx="562" cy="118" r="5" fill="#C5F36B" />
            <circle cx="706" cy="66" r="3.4" fill="#C5F36B" />
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase tracking-[0.1em] text-muted-ink">
        <span>CONCEPTUAL 2D NAVIGATION REFERENCE GRID</span>
        <span>REFERENCE GEOMETRY · ACTIVE LOCAL ESTIMATE</span>
      </figcaption>
    </figure>
  );
}
