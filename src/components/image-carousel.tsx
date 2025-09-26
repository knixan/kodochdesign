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
  quality?: number; // lägg till
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlay = true,
  interval = 4500,
  className = "",
  rounded = true,
  quality = 80, // defaultkvalitet
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

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    },
    [next, prev]
  );

  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden select-none",
        rounded && "rounded-xl",
        className
      )}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown} // <- piltangenter
      tabIndex={0} // <- gör karusellen fokuserbar
      aria-roledescription="carousel"
    >
      {/* Navigationsknappar */}
      <button
        type="button"
        onClick={prev}
        aria-label="Föregående bild"
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 rounded-full bg-slate-900/40 hover:bg-slate-900/70 border border-white/10 backdrop-blur-md p-2 text-white transition focus:outline-none focus:ring-2 focus:ring-pink-400/60"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Nästa bild"
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 rounded-full bg-slate-900/40 hover:bg-slate-900/70 border border-white/10 backdrop-blur-md p-2 text-white transition focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="h-7 w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

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
              sizes="(min-width: 1280px) 1152px, 100vw" // bättre matchning mot max-w-6xl
              quality={quality} // använd kvalitet
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
