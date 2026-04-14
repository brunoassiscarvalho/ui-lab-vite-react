import "./icon.css";

type IconName = "home" | "chart" | "users" | "sparkles" | "arrow-left" | "grid";

type IconProps = {
  name: IconName;
  className?: string;
};

const icons: Record<IconName, React.ReactNode> = {
  home: (
    <path
      d="M3 10.75L12 3l9 7.75V20a1 1 0 0 1-1 1h-5.5v-6h-5v6H4a1 1 0 0 1-1-1z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  chart: (
    <>
      <path
        d="M4 20V10"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 20V4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M20 20v-7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </>
  ),
  users: (
    <>
      <path
        d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16.5 10a2.5 2.5 0 1 0 0-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M3.5 20a5.5 5.5 0 0 1 11 0"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M16 20a4 4 0 0 0-3.5-3.9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </>
  ),
  sparkles: (
    <>
      <path
        d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M19.5 3.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </>
  ),
  "arrow-left": (
    <path
      d="M19 12H5m0 0 5.25-5.25M5 12l5.25 5.25"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="4" width="6" height="6" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="14" width="6" height="6" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="14" width="6" height="6" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
};

export function Icon({ name, className = "" }: IconProps) {
  const iconClassName = ["atom-icon", className].filter(Boolean).join(" ");

  return (
    <svg
      aria-hidden="true"
      className={iconClassName}
      viewBox="0 0 24 24"
      fill="none"
    >
      {icons[name]}
    </svg>
  );
}
