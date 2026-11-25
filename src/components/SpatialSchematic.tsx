type SchematicVariant =
  | "sensing"
  | "estimation"
  | "perception"
  | "spatial"
  | "autonomy"
  | "pivo"
  | "uav"
  | "defence"
  | "robotics"
  | "industrial";

interface SpatialSchematicProps {
  variant: SchematicVariant;
  label: string;
  caption?: string;
  className?: string;
}

export function SpatialSchematic({
  variant,
  label,
  caption,
  className = "",
}: SpatialSchematicProps) {
  return (
    <figure className={`overflow-hidden rounded-card border border-deep-border bg-deep-field ${className}`}>
      <svg
        role="img"
        aria-label={label}
        viewBox="0 0 420 200"
        fill="none"
        className="block h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="420" height="200" fill="#0B1110" />
        {/* Low-opacity spatial grid */}
        <g stroke="#1C2623" strokeWidth="1">
          <path d="M0 40H420M0 80H420M0 120H420M0 160H420" />
          <path d="M70 0V200M140 0V200M210 0V200M280 0V200M350 0V200" />
        </g>

        {variant === "sensing" && (
          <g>
            <path d="M50 100h320" stroke="#4D5953" strokeWidth="1" strokeDasharray="3 4" />
            <rect x="44" y="54" width="76" height="92" rx="2" stroke="#F4F5F0" strokeWidth="1.2" />
            <rect x="172" y="54" width="76" height="92" rx="2" stroke="#9AA59F" strokeWidth="1.2" />
            <path d="M120 82h52M120 118h52M248 100h108" stroke="#F4F5F0" strokeWidth="1.2" />
            {[74, 96, 118, 140, 162, 184, 206, 228, 250, 272, 294, 316, 338].map((x, idx) => (
              <path
                key={x}
                d={`M${x} 166v${idx % 2 === 0 ? -16 : -10}`}
                stroke={idx === 6 ? "#B9E36A" : "#747C76"}
                strokeWidth="1.4"
              />
            ))}
            <circle cx="82" cy="100" r="14" stroke="#B9E36A" strokeWidth="1.3" />
            <circle cx="82" cy="100" r="2.5" fill="#B9E36A" />
            <circle cx="356" cy="100" r="4" fill="#B9E36A" />
          </g>
        )}

        {variant === "perception" && (
          <g>
            {/* Camera frustum projecting feature tracks */}
            <path d="M62 100L164 46v108L62 100Z" stroke="#9AA59F" strokeWidth="1.2" fill="#111917" />
            <path d="M164 46L348 32M164 154L348 168" stroke="#4D5953" strokeWidth="1" />
            <path d="M96 100L224 72L310 64M96 100L242 126L334 134M96 100L270 96" stroke="#F4F5F0" strokeWidth="1.1" opacity="0.7" />
            {[
              [224, 72],
              [310, 64],
              [242, 126],
              [334, 134],
              [270, 96],
              [298, 108],
              [355, 86],
              [366, 148],
            ].map(([x, y], i) => (
              <g key={`${x}-${y}`}>
                <circle cx={x} cy={y} r={i < 3 ? 3.5 : 2} fill={i < 3 ? "#B9E36A" : "#F4F5F0"} />
                {i < 3 && <path d={`M${x - 8} ${y}h16M${x} ${y - 8}v16`} stroke="#B9E36A" strokeWidth="0.9" opacity="0.7" />}
              </g>
            ))}
            <circle cx="62" cy="100" r="3" fill="#B9E36A" />
          </g>
        )}

        {(variant === "estimation" || variant === "pivo") && (
          <g>
            {/* Inertial wave + pose trajectory graph */}
            <path
              d="M36 146C78 134 108 102 146 98C184 94 210 120 250 100C288 80 318 52 384 44"
              stroke="#F4F5F0"
              strokeWidth="1.6"
            />
            <path
              d="M36 164L74 152L112 160L148 136L186 146L222 124L260 132L298 104L336 112L384 82"
              stroke="#4D5953"
              strokeWidth="1.1"
            />
            {[
              [78, 127],
              [146, 98],
              [250, 100],
              [326, 62],
              [384, 44],
            ].map(([x, y], idx) => (
              <g key={`${x}-${y}`}>
                <path d={`M${x} ${y}l14 -7M${x} ${y}v-15`} stroke="#9AA59F" strokeWidth="1" />
                <circle
                  cx={x}
                  cy={y}
                  r={idx === 4 ? 4.5 : 3.2}
                  fill="#0B1110"
                  stroke="#B9E36A"
                  strokeWidth="1.5"
                />
              </g>
            ))}
          </g>
        )}

        {variant === "spatial" && (
          <g>
            {/* Isometric occupancy / spatial corridor */}
            <path d="M210 26L344 84L210 144L76 84L210 26Z" stroke="#9AA59F" strokeWidth="1.1" />
            <path d="M76 84v44l134 56 134-56V84" stroke="#4D5953" strokeWidth="1.1" />
            <path d="M210 144v40M143 55l134 59M143 114l134-59" stroke="#303D38" strokeWidth="1" />
            {[
              [162, 82], [184, 70], [210, 62], [238, 72], [262, 86],
              [144, 98], [176, 95], [210, 92], [244, 96], [278, 100],
              [184, 114], [210, 118], [238, 112],
            ].map(([x, y], i) => (
              <circle
                key={`${x}-${y}`}
                cx={x}
                cy={y}
                r={i % 4 === 0 ? 3 : 1.8}
                fill={i % 4 === 0 ? "#B9E36A" : "#F4F5F0"}
              />
            ))}
          </g>
        )}

        {variant === "autonomy" && (
          <g>
            {/* Closed-loop control architecture */}
            <rect x="44" y="72" width="76" height="56" rx="2" stroke="#9AA59F" strokeWidth="1.2" fill="#111917" />
            <rect x="172" y="72" width="76" height="56" rx="2" stroke="#F4F5F0" strokeWidth="1.2" fill="#111917" />
            <rect x="300" y="72" width="76" height="56" rx="2" stroke="#B9E36A" strokeWidth="1.2" fill="#111917" />
            <path d="M120 100h52M248 100h52" stroke="#F4F5F0" strokeWidth="1.4" />
            <path d="M338 128v32H82v-32" stroke="#4D5953" strokeWidth="1.1" />
            <circle cx="82" cy="100" r="3" fill="#9AA59F" />
            <circle cx="210" cy="100" r="3" fill="#F4F5F0" />
            <circle cx="338" cy="100" r="3.5" fill="#B9E36A" />
          </g>
        )}

        {variant === "uav" && (
          <g>
            {/* Low-altitude flight profile over terrain contours */}
            <path d="M0 162C55 152 95 112 152 126C210 140 250 96 312 114C358 128 386 108 420 102" stroke="#4D5953" strokeWidth="1.2" />
            <path d="M0 176C65 168 112 136 168 148C226 160 264 126 324 138C366 146 392 132 420 128" stroke="#2D3934" strokeWidth="1" />
            <path d="M34 114C102 98 148 70 218 76C278 82 324 56 382 48" stroke="#F4F5F0" strokeWidth="1.6" />
            <path d="M372 42l12 6-10 8" stroke="#B9E36A" strokeWidth="1.4" />
            <circle cx="152" cy="84" r="3" fill="#B9E36A" />
            <circle cx="272" cy="68" r="3" fill="#B9E36A" />
          </g>
        )}

        {variant === "defence" && (
          <g>
            {/* Contested RF perimeter with onboard autonomy zone */}
            <circle cx="210" cy="100" r="72" stroke="#2D3934" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="210" cy="100" r="46" stroke="#4D5953" strokeWidth="1.1" />
            <circle cx="210" cy="100" r="18" stroke="#B9E36A" strokeWidth="1.3" />
            <path d="M52 144L142 122L210 100L288 76L368 58" stroke="#F4F5F0" strokeWidth="1.5" />
            <circle cx="210" cy="100" r="3.5" fill="#B9E36A" />
          </g>
        )}

        {variant === "robotics" && (
          <g>
            {/* Indoor corridor structural walls + local path */}
            <path d="M46 42H374M46 158H374" stroke="#9AA59F" strokeWidth="1.3" />
            <path d="M126 42v42M126 116v42M264 42v32M264 128v30" stroke="#4D5953" strokeWidth="1.2" />
            <path d="M74 100H174L214 78L298 118L354 100" stroke="#F4F5F0" strokeWidth="1.6" />
            <circle cx="174" cy="100" r="3" fill="#B9E36A" />
            <circle cx="214" cy="78" r="3" fill="#B9E36A" />
            <circle cx="298" cy="118" r="3" fill="#B9E36A" />
          </g>
        )}

        {variant === "industrial" && (
          <g>
            {/* Structural span / bridge & canopy vertical constraints */}
            <path d="M30 156H390" stroke="#4D5953" strokeWidth="1.2" />
            <path d="M84 156V56h64v100M184 156V40h54v116M274 156V70h66v86" stroke="#9AA59F" strokeWidth="1.1" />
            <path d="M62 132C112 124 148 92 210 88C272 84 314 106 362 96" stroke="#F4F5F0" strokeWidth="1.6" />
            <circle cx="210" cy="88" r="3.5" fill="#B9E36A" />
            <circle cx="312" cy="99" r="3" fill="#B9E36A" />
          </g>
        )}
      </svg>

      {caption && (
        <figcaption className="border-t border-deep-border bg-deep-surface px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-deep-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
