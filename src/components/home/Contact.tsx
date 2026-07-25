"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  HiEnvelope,
  HiMapPin,
  HiPhone,
  HiPaperAirplane,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const contactInfo = [
  {
    icon: HiEnvelope,
    label: "Email",
    value: "zakariak4@gmail.com",
    href: "mailto:zakariak4@gmail.com",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+880 1739108253",
    href: "tel:+8801739108253",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+880 1739108253",
    href: "https://wa.me/8801739108253",
  },
  {
    icon: HiMapPin,
    label: "Location",
    value: "Bangladesh",
    href: null,
  },
];

type Status = "idle" | "loading" | "success" | "error";

// Basic email format check
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Common fake/disposable/test domains to block
const BLOCKED_DOMAINS = [
  "test.com",
  "example.com",
  "mailinator.com",
  "yopmail.com",
  "tempmail.com",
  "guerrillamail.com",
  "10minutemail.com",
  "fakeinbox.com",
  "trashmail.com",
  "throwawaymail.com",
];

function isValidEmail(email: string): { valid: boolean; message?: string } {
  const trimmed = email.trim().toLowerCase();

  if (!EMAIL_REGEX.test(trimmed)) {
    return { valid: false, message: "Please enter a valid email address." };
  }

  const domain = trimmed.split("@")[1];

  if (BLOCKED_DOMAINS.includes(domain)) {
    return {
      valid: false,
      message: "Please use a real, working email address.",
    };
  }

  return { valid: true };
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailCheck = isValidEmail(trimmedEmail);

    if (!emailCheck.valid) {
      toast.error(emailCheck.message as string);
      return;
    }

    setStatus("loading");
    const loadingToast = toast.loading("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success("Your mail is successfully sent!", {
        id: loadingToast,
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong. Please try again.", {
        id: loadingToast,
      });

      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Contact"
          title="Let's work"
          highlight="together"
          description="
            Have a project idea? Feel free to
            contact me and let's create something
            amazing.
          "
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <GlassCard className="p-8">
            <h3 className="text-2xl font-semibold">Get In Touch</h3>

            <p className="mt-3 text-sm leading-7 text-muted">
              Reach out through any of these channels — I usually reply
              within a day.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-border-default
                      p-4
                      transition-colors
                      duration-300
                      hover:border-primary/40
                      hover:bg-surface-secondary
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-primary
                        text-primary-foreground
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <p className="text-xs text-muted">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );

                if (item.href) {
                  const isExternal = item.href.startsWith("http");

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {content}
                    </Link>
                  );
                }

                return <div key={item.label}>{content}</div>;
              })}
            </div>
          </GlassCard>

          {/* Contact Form */}
          <GlassCard className="p-8">
            <h3 className="text-2xl font-semibold">Send a Message</h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-style"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-style"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="input-style resize-none"
              />

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileTap={{ scale: 0.97 }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-6
                  py-3
                  font-medium
                  text-primary-foreground
                  transition-opacity
                  disabled:opacity-60
                "
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <HiPaperAirplane size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}