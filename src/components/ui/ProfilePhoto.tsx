"use client";

import { useState } from "react";
import Image from "next/image";

interface ProfilePhotoProps {
  src?: string;
  fallbackSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ProfilePhoto({
  src = "/images/profile.png",
  fallbackSrc = "/images/avatar.svg",
  alt,
  width = 320,
  height = 400,
  className = "",
}: ProfilePhotoProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div
      className={`relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 ${className}`}
      style={width && height ? { maxWidth: width } : undefined}
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        priority
        className="w-full h-full object-cover transition-transform duration-500 delay-0 hover:delay-[330ms] hover:scale-[1.02]"
        onError={() => {
          // If profile.jpg is missing or errors out, fall back gracefully to avatar.svg
          if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
        }}
      />
    </div>
  );
}
