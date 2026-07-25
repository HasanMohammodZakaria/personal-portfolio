"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

const emptySubscribe = () => {
  return () => {};
};

interface ThemeToggleProps {
  size?: "sm" | "md";
}

export default function ThemeToggle({ size = "md" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return null;
  }

  const isSmall = size === "sm";
  const iconSize = isSmall ? 14 : 18;
  const buttonPadding = isSmall ? "p-1.5" : "p-2";

  return (
    <div
      className={`
        flex gap-1 rounded-full border border-border-default
        ${isSmall ? "p-0.5" : "p-1"}
      `}
    >
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        className={`
          rounded-full ${buttonPadding} transition
          ${
            theme === "dark"
              ? "bg-primary text-primary-foreground"
              : "text-muted"
          }
        `}
      >
        <HiMoon size={iconSize} />
      </button>

      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        className={`
          rounded-full ${buttonPadding} transition
          ${
            theme === "light"
              ? "bg-primary text-primary-foreground"
              : "text-muted"
          }
        `}
      >
        <HiSun size={iconSize} />
      </button>
    </div>
  );
}