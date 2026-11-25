interface PerceptionMarkProps {
  className?: string;
  accentPoint?: boolean;
}

/**
 * Geometric Perception Aperture / Spatial Reference Frame mark:
 * open coordinate frame, central reference point, and motion trajectory.
 */
export function PerceptionMark({
  className = "h-7 w-7",
  accentPoint = true,
}: PerceptionMarkProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 36 36"
      fill="none"
      className={className}
    >
      <path
        d="M11.5 5.5H5.5v6M24.5 5.5h6v6M5.5 24.5v6h6M30.5 24.5v6h-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
      />
      <path
        d="M8.5 26.5C13.5 23.2 15.5 19.6 18 18C20.5 16.4 22.5 12.8 27.5 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 11.5v3.2M18 21.3v3.2M11.5 18h3.2M21.3 18h3.2"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.55"
      />
      <circle
        cx="18"
        cy="18"
        r="2.4"
        fill={accentPoint ? "#B9E36A" : "currentColor"}
        stroke="currentColor"
        strokeWidth="0.9"
      />
    </svg>
  );
}
