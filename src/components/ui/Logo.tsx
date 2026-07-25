import React from "react";

/**
 * HMZ logo mark
 * - Circular badge with gradient background (primary → accent)
 * - Monogram "HMZ" in white, using Inter Bold for a crisp, bold look
 * - Fixed white text color for consistent contrast in both dark/light mode
 * - Pass a `size` prop to scale the whole mark (defaults to 44px)
 */

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 44, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="HMZ logo"
      role="img"
    >
      <defs>
        <linearGradient id="hmz-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>

      {/* Circular background badge */}
      <circle cx="50" cy="50" r="48" fill="url(#hmz-gradient)" />

      {/* HMZ monogram */}
      <text
        x="50"
        y="63"
        textAnchor="middle"
        fontSize="30"
        fontWeight="700"
        letterSpacing="0"
        fill="#ffffff"
        fontFamily="var(--font-inter), sans-serif"
      >
        HMZ
      </text>
    </svg>
  );
}