import Link from "next/link";
import { HiHome, HiArrowLeft } from "react-icons/hi2";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-lg text-center">
        {/* Big gradient 404 */}
        <h1 className="text-gradient text-7xl font-bold sm:text-8xl md:text-9xl">
          404
        </h1>

        <h2 className="mt-5 text-xl font-semibold sm:mt-6 sm:text-2xl md:text-3xl">
          Page not found
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-primary
              px-6
              py-3
              text-sm
              font-medium
              text-primary-foreground
              transition-opacity
              hover:opacity-90
            "
          >
            <HiHome size={18} />
            Back to Home
          </Link>

          <Link
            href="/#projects"
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-border-default
              px-6
              py-3
              text-sm
              font-medium
              transition-colors
              hover:border-primary/40
            "
          >
            <HiArrowLeft size={18} />
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}