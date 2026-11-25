type GraphicKind = "signals" | "motion" | "spatial" | "facility" | "canopy" | "infrastructure" | "flight";

interface EngineeringGraphicProps {
  kind: GraphicKind;
  label: string;
  className?: string;
}

const EngineeringGraphic = ({ kind, label, className = "" }: EngineeringGraphicProps) => {
  const common = "h-full w-full text-accent";

  return (
    <svg
      aria-label={label}
      role="img"
      viewBox="0 0 320 150"
      fill="none"
      className={`${common} ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <path className="text-border" d="M0 126.5H320M0 101.5H320M0 76.5H320M0 51.5H320M0 26.5H320" stroke="currentColor" strokeWidth="1" />
      {kind === "signals" && (
        <g stroke="currentColor" strokeWidth="1.2">
          <path d="M34 119 80 73l44 26 43-63 53 49 44-31" />
          <circle cx="80" cy="73" r="4" fill="currentColor" />
          <circle cx="124" cy="99" r="4" fill="currentColor" />
          <circle cx="167" cy="36" r="4" fill="currentColor" />
          <circle cx="220" cy="85" r="4" fill="currentColor" />
          <circle cx="264" cy="54" r="4" fill="currentColor" />
          <path d="M36 35h28m-14-14v28m210 65h28m-14-14v28" opacity=".5" />
        </g>
      )}
      {kind === "motion" && (
        <g stroke="currentColor" strokeWidth="1.2">
          <path d="M25 113c42-50 63-17 92-58 25-36 49-22 64 4 14 25 31 16 52-5 20-20 39-24 62-8" />
          <path d="M34 122h248M42 125V25m0 97 43-48 34 20 45-57 37 36 40-27 37 20" opacity=".46" />
          <circle cx="117" cy="97" r="4" fill="currentColor" />
          <circle cx="164" cy="40" r="4" fill="currentColor" />
          <circle cx="201" cy="76" r="4" fill="currentColor" />
        </g>
      )}
      {kind === "spatial" && (
        <g stroke="currentColor" strokeWidth="1.1">
          <path d="M160 20 65 70l95 53 95-53-95-50Z" />
          <path d="m65 70 95 4 95-4m-95-50v103m-47-78 96 53M113 98l94-53" opacity=".65" />
          <circle cx="160" cy="74" r="5" fill="currentColor" />
          <circle cx="113" cy="49" r="2.5" fill="currentColor" />
          <circle cx="207" cy="45" r="2.5" fill="currentColor" />
          <circle cx="207" cy="98" r="2.5" fill="currentColor" />
        </g>
      )}
      {kind === "facility" && (
        <g stroke="currentColor" strokeWidth="1.1">
          <path d="M26 119V61h72v58m-72-43h72M98 119V40h84v79m-84-59h84m-42-20v79M182 119V71h112v48m-112-31h112m-76-17v48m39-48v48" />
          <path d="M18 125h286M39 74h16m16 0h16m-16 20h16m52-40h18m-18 20h18m-18 20h18m-18 20h18m63-16h18m20 0h18m-56 20h18m20 0h18" opacity=".55" />
        </g>
      )}
      {kind === "canopy" && (
        <g stroke="currentColor" strokeWidth="1.1">
          <path d="M0 118c23-20 37-48 61-50 21-2 30 28 49 22 21-7 25-54 52-57 25-2 30 32 49 35 20 3 31-27 52-28 19-1 35 27 57 41M14 132l34-53 37 53 35-73 41 73 31-80 42 80 34-56 35 56" />
          <path d="M24 129h270M64 72v55m46-34v38m51-43v44m50-45v46m51-61v61" opacity=".6" />
          <circle cx="162" cy="34" r="3" fill="currentColor" />
        </g>
      )}
      {kind === "infrastructure" && (
        <g stroke="currentColor" strokeWidth="1.1">
          <path d="M18 119h284M35 119V78h50v41m-39-41v-20h28v20m44 61V58h78v61m-66-40h54m-54 18h54m25 23V82h54v37m-42-37V61h30v21" />
          <path d="M23 131h270M45 99h30m73-31h41m-41 18h41m-41 18h41m41-8h29" opacity=".58" />
          <path d="M106 60 96 48h109l-11 12" />
        </g>
      )}
      {kind === "flight" && (
        <g stroke="currentColor" strokeWidth="1.1">
          <path d="M15 118c44-30 72-28 101-11 31 18 52 13 78-23 22-30 49-42 111-31" />
          <path d="M23 127h278M44 125V34m0 91 21-21m-21 21 23-10m148 5 21-12m-21 12 18-25m27 27 16-18m-16 18 26-10" opacity=".55" />
          <circle cx="116" cy="107" r="4" fill="currentColor" />
          <circle cx="194" cy="84" r="4" fill="currentColor" />
          <circle cx="254" cy="52" r="4" fill="currentColor" />
          <path d="m242 46 12 6-10 8" />
        </g>
      )}
    </svg>
  );
};

export default EngineeringGraphic;