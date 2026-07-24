import { cn } from "@/lib/utils";


interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}


export default function GlassCard({
  children,
  className,
}: GlassCardProps) {

  return (

    <div
      className={cn(
        `
        rounded-3xl
        border
        border-default
        glass
        transition-all
        duration-300
        `,
        className
      )}
    >

      {children}

    </div>

  );
}