"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import clsx from "clsx";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  rounded?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlay = true,
  interval = 4500,
  className = "",
  rounded = true,
}) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setTimeout(next, interval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, autoPlay, interval, next]);

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchEndX.current - touchStartX.current;
      if (Math.abs(delta) > 50) {
        if (delta < 0) next();
        else prev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden select-none",
        rounded && "rounded-xl",
        className
      )}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div
            key={img.src + i}
            className="relative min-w-full h-[40vh] md:h-[60vh] lg:h-[65vh]"
            aria-hidden={i !== index}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              sizes="(max-width:768px) 100vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/40 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Skärmläsare info */}
      <div className="sr-only" aria-live="polite">
        Bild {index + 1} av {images.length}: {images[index].alt}
      </div>
    </div>
  );
};

export default ImageCarousel;
