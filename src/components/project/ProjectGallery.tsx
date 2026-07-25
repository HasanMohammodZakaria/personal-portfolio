"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
  mainImage: string;
  images: string[];
  title: string;
}

export default function ProjectGallery({
  mainImage,
  images,
  title,
}: ProjectGalleryProps) {
  const allImages = [mainImage, ...images];

  const [activeImage, setActiveImage] = useState(allImages[0]);

  return (
    <div className="mt-12 space-y-4">
      {/* Main Image */}
      <div
        className="
          relative
          h-105
          overflow-hidden
          rounded-3xl
          border
          border-border-default
        "
      >
        <Image
          src={activeImage}
          alt={title}
          fill
          className="object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4">
        {allImages.map((img, index) => (
          <button
            key={img}
            type="button"
            onClick={() => setActiveImage(img)}
            className={`
              relative
              h-20
              w-28
              shrink-0
              overflow-hidden
              rounded-xl
              border
              transition-colors
              ${
                activeImage === img
                  ? "border-primary"
                  : "border-border-default hover:border-border-strong"
              }
            `}
          >
            <Image
              src={img}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}