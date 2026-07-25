"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

import { navigation, type NavigationItem } from "@/data/navigation";
import { socialLinks } from "@/data/socials";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleHashCheck = () => {
      setActiveSection(window.location.hash.replace("#", ""));
    };

    handleHashCheck();
    window.addEventListener("hashchange", handleHashCheck);

    return () => window.removeEventListener("hashchange", handleHashCheck);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
            className="ml-auto flex h-full w-80 flex-col gap-8 border-l border-border-default bg-background p-6"
          >
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="ml-auto rounded-full p-1 text-foreground transition-colors hover:text-primary"
            >
              <HiXMark size={26} />
            </button>

            {/* Nav links */}
            <div className="flex flex-col gap-2">
              {navigation.map((item: NavigationItem) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(sectionId);
                      onClose();
                    }}
                    className={`
                      rounded-xl px-4 py-3 text-lg transition-colors duration-200
                      ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-surface-secondary hover:text-primary"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Hire Me button */}
            <Link
              href="#contact"
              onClick={onClose}
              className="
                rounded-full
                bg-primary
                px-5
                py-3
                text-center
                text-sm
                font-medium
                text-primary-foreground
                transition-opacity
                hover:opacity-90
              "
            >
              Hire Me
            </Link>

            {/* Divider */}
            <div className="mt-auto border-t border-border-default pt-6">
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.id}
                      href={social.href}
                      target={social.external ? "_blank" : undefined}
                      rel={social.external ? "noopener noreferrer" : undefined}
                      aria-label={social.name}
                      className="rounded-full border border-border-default p-2 text-muted transition-colors hover:border-primary hover:text-primary"
                    >
                      <Icon size={18} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}