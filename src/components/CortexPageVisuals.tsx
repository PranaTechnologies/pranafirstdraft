export type CharacteristicIconKind =
  | "edge"
  | "modular"
  | "interop"
  | "multirate";

/**
 * Conceptual 2D hero navigation visualization (Chapter 13, 01 / Product hero).
 * Concentric localization reference rings, grid matrix, and Signal Green estimate path.
 */
export function CortexHeroGraphic() {
  const cols = Array.from({ length: 17 }, (_, i) => 36 + i * 38);
  const rows = Array.from({ length: 13 }, (_, i) => 30 + i * 38);
  const ringRadii = [44, 88, 134, 182];

  return (
    <figure className="w-full">
      <div className="aspect-[16/11] w-full overflow-hidden border border-deep-border bg-deep-field sm:aspect-[4/3] lg:aspect-[16/11]">
        <svg
          role="img"
          aria-label="Conceptual 2D navigation graphic showing concentric reference rings, tracked spatial trajectory, and Signal Green active nodes"
          viewBox="0 0 680 510"
          className="h-full w-full"
        >
          <rect width="680" height="510" fill="#101211" />

          {/* 2D reference dot matrix */}
          <g fill="#858B86" opacity="0.38">
            {cols.map((x) =>
              rows.map((y) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="1.25" />
              )),
            )}
          </g>

          {/* Reference crosshairs & concentric localization rings */}
          <g stroke="#252826" strokeWidth="1.1">
            <line x1="340" y1="30" x2="340" y2="486" />
            <line x1="36" y1="258" x2="644" y2="258" />
          </g>
          <g fill="none">
            {ringRadii.map((r, idx) => (
              <circle
                key={r}
                cx="340"
                cy="258"
                r={r}
                stroke={idx === 1 ? "#F5F5F2" : "#858B86"}
                strokeWidth="1.2"
                opacity={idx === 1 ? 0.65 : 0.45}
              />
            ))}
          </g>

          {/* Reference trajectory polyline & Signal Green active nodes */}
          <polyline
            points="54,474 222,438 258,342 406,158 504,158 634,42"
            fill="none"
            stroke="#C5F36B"
            strokeWidth="2.1"
          />
          <g>
            <circle cx="54" cy="474" r="3.4" fill="#C5F36B" />
            <circle cx="222" cy="438" r="3.8" fill="#C5F36B" />
            <circle cx="258" cy="342" r="3.4" fill="#F5F5F2" />
            <circle cx="340" cy="258" r="4.5" fill="#C5F36B" />
            <circle cx="406" cy="158" r="4" fill="#C5F36B" />
            <circle cx="504" cy="158" r="3.6" fill="#C5F36B" />
            <circle cx="634" cy="42" r="3.8" fill="#C5F36B" />
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-deep-muted">
        CONCEPTUAL 2D NAVIGATION REFERENCE GRAPHIC — NOT MEASURED TELEMETRY
      </figcaption>
    </figure>
  );
}

/**
 * Compact flat 2D icons on Canvas (#F5F5F2) for Chapter 13 System characteristics.
 * Uses Carbon (#101211) & Ash (#858B86) linework with framed Signal highlight nodes.
 */
export function CortexCharacteristicIcon({
  kind,
}: {
  kind: CharacteristicIconKind;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      fill="none"
      className="h-9 w-9 shrink-0"
    >
      {kind === "edge" && (
        <>
          <rect x="8" y="8" width="24" height="24" stroke="#101211" strokeWidth="1.4" />
          <line x1="20" y1="3" x2="20" y2="8" stroke="#858B86" strokeWidth="1.2" />
          <line x1="20" y1="32" x2="20" y2="37" stroke="#858B86" strokeWidth="1.2" />
          <line x1="3" y1="20" x2="8" y2="20" stroke="#858B86" strokeWidth="1.2" />
          <line x1="32" y1="20" x2="37" y2="20" stroke="#858B86" strokeWidth="1.2" />
          <circle cx="20" cy="20" r="3.6" fill="#C5F36B" stroke="#101211" strokeWidth="1.3" />
        </>
      )}

      {kind === "modular" && (
        <>
          <line x1="6" y1="11" x2="22" y2="20" stroke="#101211" strokeWidth="1.3" />
          <line x1="6" y1="20" x2="22" y2="20" stroke="#858B86" strokeWidth="1.3" />
          <line x1="6" y1="29" x2="22" y2="20" stroke="#858B86" strokeWidth="1.3" />
          <line x1="22" y1="20" x2="34" y2="20" stroke="#101211" strokeWidth="1.5" />
          <circle cx="6" cy="11" r="2.4" fill="#101211" />
          <circle cx="6" cy="20" r="2.4" fill="#858B86" />
          <circle cx="6" cy="29" r="2.4" fill="#858B86" />
          <circle cx="34" cy="20" r="3.4" fill="#C5F36B" stroke="#101211" strokeWidth="1.3" />
        </>
      )}

      {kind === "interop" && (
        <>
          <rect x="5" y="13" width="10" height="14" stroke="#858B86" strokeWidth="1.3" />
          <rect x="25" y="13" width="10" height="14" stroke="#101211" strokeWidth="1.3" />
          <line x1="15" y1="20" x2="25" y2="20" stroke="#101211" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="3.2" fill="#C5F36B" stroke="#101211" strokeWidth="1.3" />
        </>
      )}

      {kind === "multirate" && (
        <>
          <line x1="5" y1="28" x2="35" y2="28" stroke="#858B86" strokeWidth="1.2" />
          <line x1="9" y1="24" x2="9" y2="28" stroke="#101211" strokeWidth="1.3" />
          <line x1="16" y1="24" x2="16" y2="28" stroke="#101211" strokeWidth="1.3" />
          <line x1="23" y1="24" x2="23" y2="28" stroke="#101211" strokeWidth="1.3" />
          <line x1="30" y1="24" x2="30" y2="28" stroke="#101211" strokeWidth="1.3" />
          <polyline points="7,17 16,13 24,15 33,9" stroke="#101211" strokeWidth="1.5" />
          <circle cx="33" cy="9" r="3.2" fill="#C5F36B" stroke="#101211" strokeWidth="1.3" />
        </>
      )}
    </svg>
  );
}

/**
 * Functional architecture diagram replacing legacy linear Sense->Integrate pipeline
 * (Chapter 06 & Chapter 13 · Section 04 Unified by design).
 * Built responsively so labels remain legible across desktop, tablet, and 390px mobile.
 */
export function CortexArchitectureDiagram({ caption }: { caption: string }) {
  const inputs = [
    { name: "Vision", optional: false },
    { name: "Inertial", optional: false },
    { name: "GNSS", optional: true },
    { name: "Reference maps", optional: true },
    { name: "Auxiliary", optional: true },
  ];

  const outputs = [
    { title: "Position & motion", detail: "Pose / velocity / attitude" },
    { title: "Spatial context", detail: "Local representation" },
    { title: "Navigation health", detail: "Covariance / status" },
  ];

  return (
    <figure className="w-full border border-deep-border bg-deep-field p-5 sm:p-7">
      <div
        role="img"
        aria-label="Cortex target functional architecture diagram: sensor and reference inputs feeding local ~30 Hz visual-inertial navigation, optional ~1 Hz global positioning, adaptive multi-source fusion, operational resilience monitoring, and PX4 or ROS 2 vehicle outputs"
      >
        {/* Top Inputs */}
        <p className="text-center font-mono text-xs uppercase tracking-[0.14em] text-deep-muted">
          SENSOR &amp; REFERENCE INPUTS
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-5">
          {inputs.map((inp) => (
            <div
              key={inp.name}
              className={`border px-3 py-2.5 text-center font-mono text-xs uppercase tracking-[0.08em] ${
                inp.optional
                  ? "border-dashed border-ash/70 bg-deep-field text-[#C7D0CA]"
                  : "border-deep-muted/70 bg-deep-surface text-white"
              }`}
            >
              {inp.name}
            </div>
          ))}
        </div>

        {/* Connector Legend / Bridges */}
        <div className="mx-auto flex max-w-2xl items-center justify-between px-8 py-2" aria-hidden="true">
          <div className="h-4 w-px bg-ash/70" />
          <div className="h-4 border-r border-dashed border-ash/70" />
          <div className="h-4 border-r border-dashed border-ash/70" />
        </div>

        {/* Core Architecture Frame */}
        <div className="border border-signal/75 bg-deep-field p-4 sm:p-6">
          <p className="text-center font-mono text-xs uppercase tracking-[0.14em] text-signal">
            CORTEX / CORE NAVIGATION ENGINE
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="border border-deep-muted/70 bg-deep-surface p-4 text-center">
              <p className="font-display text-base font-medium text-white sm:text-lg">
                Local navigation
              </p>
              <p className="mt-1 font-mono text-xs text-[#C7D0CA]">
                Visual-inertial · ~30 Hz target
              </p>
            </div>

            <div className="border border-dashed border-ash/70 bg-deep-field p-4 text-center">
              <p className="font-display text-base font-medium text-white sm:text-lg">
                Global positioning
              </p>
              <p className="mt-1 font-mono text-xs text-deep-muted">
                GNSS / optional visual alignment · ~1 Hz target
              </p>
            </div>
          </div>

          <div className="my-2 flex justify-around" aria-hidden="true">
            <div className="h-4 w-px bg-ash/70" />
            <div className="h-4 border-r border-dashed border-ash/70" />
          </div>

          <div className="border border-deep-muted/70 bg-deep-surface p-4 text-center">
            <p className="font-display text-base font-medium text-white sm:text-lg">
              Adaptive multi-source fusion
            </p>
            <p className="mt-1 font-mono text-xs text-[#C7D0CA]">
              Unified navigation state
            </p>
          </div>

          <div className="my-2 flex justify-center" aria-hidden="true">
            <div className="h-4 w-px bg-signal/70" />
          </div>

          <div className="border border-signal bg-deep-surface/70 p-4 text-center">
            <p className="font-display text-base font-medium text-signal sm:text-lg">
              Operational resilience
            </p>
            <p className="mt-1 font-mono text-xs text-[#E5ECE7]">
              Health · uncertainty · measurement quality
            </p>
          </div>
        </div>

        <div className="mx-auto flex max-w-xl justify-around py-2" aria-hidden="true">
          <div className="h-4 w-px bg-ash/70" />
          <div className="h-4 w-px bg-ash/70" />
          <div className="h-4 w-px bg-signal/70" />
        </div>

        {/* Vehicle Outputs */}
        <div className="grid gap-2.5 sm:grid-cols-3">
          {outputs.map((out) => (
            <div
              key={out.title}
              className="border border-deep-border bg-deep-surface px-4 py-3 text-center"
            >
              <p className="font-display text-base font-medium text-white">
                {out.title}
              </p>
              <p className="mt-1 font-mono text-xs text-deep-muted">
                {out.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center font-mono text-xs uppercase tracking-[0.14em] text-signal">
          PX4 / ROS 2 / OEM VEHICLE SYSTEMS
        </p>
      </div>

      <figcaption className="mt-4 border-t border-deep-border pt-3 font-mono text-xs leading-relaxed text-deep-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
