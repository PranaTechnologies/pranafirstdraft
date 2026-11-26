import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TECHNOLOGY_LAYERS } from "@/data/site-content";

export function ArchitectureDiagram() {
  const nodePositions = [90, 290, 490, 690, 890];

  return (
    <div className="overflow-hidden rounded-card border border-deep-border bg-deep-field text-field">
      {/* Cohesive Five-Layer Closed-Loop Schematic */}
      <div className="border-b border-deep-border px-6 py-8 sm:px-10">
        <svg
          role="img"
          aria-label="Cohesive five-layer spatial intelligence and closed-loop feedback architecture"
          viewBox="0 0 980 220"
          fill="none"
          className="h-auto w-full"
        >
          {/* Subtle structural baseline */}
          <line x1="90" y1="88" x2="890" y2="88" stroke="#2D3D37" strokeWidth="1.5" />

          {/* Closed-loop feedback path below primary flow */}
          <path
            d="M890 120 V172 H90 V120"
            stroke="#68796F"
            strokeWidth="1.3"
            strokeDasharray="4 4"
          />
          <path d="M90 126l-5-8h10l-5 8Z" fill="#B9E36A" />

          {/* Secondary state-to-perception inner prior feedback */}
          <path
            d="M490 54 V24 H290 V54"
            stroke="#B9E36A"
            strokeOpacity="0.65"
            strokeWidth="1.3"
          />
          <path d="M290 54l-4-7h8l-4 7Z" fill="#B9E36A" />

          <text
            x="390"
            y="18"
            textAnchor="middle"
            fill="#9AA59F"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="1.6"
          >
            MOTION &amp; KEYFRAME PRIORS
          </text>
          <text
            x="490"
            y="194"
            textAnchor="middle"
            fill="#9AA59F"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="1.6"
          >
            CLOSED-LOOP HEALTH, EXPOSURE &amp; MAP FEEDBACK
          </text>

          {/* Five sequential architectural nodes */}
          {TECHNOLOGY_LAYERS.map((layer, idx) => {
            const cx = nodePositions[idx];
            const isCore = idx === 2;
            return (
              <g key={layer.slug}>
                {idx < TECHNOLOGY_LAYERS.length - 1 && (
                  <path
                    d={`M${cx + 76} 88h48`}
                    stroke="#B9E36A"
                    strokeOpacity="0.7"
                    strokeWidth="1.5"
                  />
                )}
                <rect
                  x={cx - 76}
                  y="54"
                  width="152"
                  height="66"
                  rx="4"
                  fill={isCore ? "#15231D" : "#111917"}
                  stroke={isCore ? "#B9E36A" : "#2D3D37"}
                  strokeWidth={isCore ? "1.6" : "1.2"}
                />
                <text
                  x={cx}
                  y="78"
                  textAnchor="middle"
                  fill="#B9E36A"
                  fontSize="10"
                  fontFamily="monospace"
                  letterSpacing="1.4"
                >
                  {layer.layerNumber}
                </text>
                <text
                  x={cx}
                  y="102"
                  textAnchor="middle"
                  fill="#F3F3ED"
                  fontSize="14"
                  fontWeight="500"
                >
                  {layer.shortTitle}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Integrated Single-Row Specification Links */}
      <div className="grid divide-y divide-deep-border bg-deep-surface md:grid-cols-5 md:divide-x md:divide-y-0">
        {TECHNOLOGY_LAYERS.map((layer) => (
          <Link
            key={layer.slug}
            href={`/technology/${layer.slug}`}
            className="group flex flex-col justify-between p-6 transition-colors hover:bg-[#17231E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-signal">
                  {layer.layerNumber}
                </span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 text-[#9AA59F] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-3 font-display text-lg font-medium text-field">
                {layer.shortTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#BCC7C0]">
                {layer.stackSummary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
