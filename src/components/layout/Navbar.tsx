"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";

import ThemeToggle from "@/components/ui/theme-toggle";
import Logo from "@/components/ui/Logo";
import { navigation, type NavigationItem } from "@/data/navigation";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Section counts as "active" once it crosses the upper-middle
        // of the viewport, and stays active until the next one takes over.
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-default bg-(--background)/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo size={52} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item: NavigationItem) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative text-sm transition-colors duration-200
                  ${isActive ? "text-primary" : "text-muted hover:text-primary"}
                `}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />
                )}
              </Link>
            );
          })}

          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open menu"
            className="rounded-full border border-border-default p-2 transition-colors hover:border-primary"
          >
            <HiBars3 size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}