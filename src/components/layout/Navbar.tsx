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
          <Logo size={52} className="h-9 w-9 md:h-13 md:w-13" />
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

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="#contact"
              className="
                rounded-full
                bg-primary
                px-5
                py-2
                text-sm
                font-medium
                text-primary-foreground
                transition-opacity
                hover:opacity-90
              "
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle size="sm" />

          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open menu"
            className="rounded-full border border-border-default p-2 transition-colors hover:border-primary"
          >
            <HiBars3 size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}