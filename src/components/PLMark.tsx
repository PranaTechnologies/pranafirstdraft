const PLMark = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 40 40"
    fill="none"
    className={className}
  >
    <path
      d="M7 33V7h12.5a7.5 7.5 0 0 1 0 15H7m14 11V22h12v11"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

export default PLMark;