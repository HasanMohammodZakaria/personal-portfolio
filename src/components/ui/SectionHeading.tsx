import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        `
        mx-auto
        max-w-3xl
        text-center
        `,
        className
      )}
    >
      {badge && (
        <span
          className="
            inline-flex
            rounded-full
            border
            border-border-default
            px-3
            py-1.5
            text-[11px]
            font-semibold
            uppercase
            tracking-wider
            text-primary
            sm:px-4
            sm:py-2
            sm:text-xs
          "
        >
          {badge}
        </span>
      )}

      <h2
        className="
          mt-4
          text-2xl
          font-bold
          leading-tight
          sm:mt-5
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
        "
      >
        {title}

        {highlight && (
          <span className="text-gradient">
            {" "}
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className="
            mx-auto
            mt-3
            max-w-2xl
            text-sm
            leading-6
            text-muted
            sm:mt-5
            sm:text-base
            sm:leading-7
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}