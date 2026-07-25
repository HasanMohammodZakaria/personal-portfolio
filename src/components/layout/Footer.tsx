import { siteConfig } from "@/constants/site";
import Link from "next/link";
import {
  socialLinks,
  type SocialLink,
} from "@/data/socials";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-border-default/40
        py-10
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-4
          px-6
          text-center
          md:flex-row
          md:items-center
          md:justify-between
          md:text-left
        "
      >
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} All rights reserved by{" "}
          <span className="font-medium text-primary">
            {siteConfig.name}
          </span>
        </p>

        <div className="flex gap-4">
          {socialLinks.map((social: SocialLink) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                className="
                  text-muted
                  transition-colors
                  hover:text-primary
                "
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}