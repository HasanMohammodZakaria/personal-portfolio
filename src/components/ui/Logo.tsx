import React from "react";

/**
 * HMZ logo mark
 * - No circle, plain inline wordmark
 * - Fully transparent background (works on any surface, dark or light)
 * - Uses CSS variables from globals.css so it auto-adapts to theme
 * - Pass a `size` prop to scale the whole mark (defaults to 44px tall)
 */

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 44, className = "" }: LogoProps) {
  // viewBox is wider than tall since this is now an inline wordmark
  const width = size * 2.2;

  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 220 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="HMZ logo"
      role="img"
    >
      {/* H - foreground color, bold */}
      <text
        x="38"
        y="68"
        textAnchor="middle"
        fontSize="46"
        fontWeight="700"
        fill="var(--foreground)"
        fontFamily="var(--font-michroma), sans-serif"
      >
        H
      </text>

      {/* M - accent color, bold, slightly larger */}
      <text
        x="110"
        y="72"
        textAnchor="middle"
        fontSize="58"
        fontWeight="700"
        fill="var(--accent)"
        fontFamily="var(--font-michroma), sans-serif"
      >
        M
      </text>

      {/* Z - foreground color, bold, same as H */}
      <text
        x="182"
        y="68"
        textAnchor="middle"
        fontSize="46"
        fontWeight="700"
        fill="var(--foreground)"
        fontFamily="var(--font-michroma), sans-serif"
      >
        Z
      </text>
    </svg>
  );
}