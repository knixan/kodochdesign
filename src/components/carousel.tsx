"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface CarouselImage {
  src: string;
  alt: string;
}

function Lightbox({
  images,
  index,
  onClose,
  onChange,
}: {
  images: CarouselImage[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, images.length, onClose, onChange]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Prev */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index - 1 + images.length) % images.length);
        }}
        aria-label="Föregående bild"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-[10000] rounded-full bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 p-2 text-white transition"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index + 1) % images.length);
        }}
        aria-label="Nästa bild"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-[10000] rounded-full bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 p-2 text-white transition"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Image wrapper */}
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - top right of image */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Stäng"
          className="absolute -top-4 -right-4 z-[10000] rounded-full bg-slate-900/80 hover:bg-slate-900 border border-white/20 p-2 text-white transition"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
        />
      </div>
    </div>,
    document.body
  );
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlay = true,
  interval = 5000,
}) => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    autoPlay ? [Autoplay({ delay: interval, stopOnInteraction: false })] : []
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      }
    },
    [scrollNext, scrollPrev]
  );

  return (
    <div
      className="relative select-none"
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
    >
      {/* Prev */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Föregående bild"
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 rounded-full bg-slate-900/40 hover:bg-slate-900/70 border border-white/10 backdrop-blur-md p-2 text-white transition focus:outline-none focus:ring-2 focus:ring-pink-400/60"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Nästa bild"
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 rounded-full bg-slate-900/40 hover:bg-slate-900/70 border border-white/10 backdrop-blur-md p-2 text-white transition focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Embla viewport */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex ml-[calc(-0.5rem)] md:ml-[calc(-0.5rem)]">
          {images.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              onClick={() => setLightbox(i)}
              className="relative flex-[0_0_100%] md:flex-[0_0_33.333%] aspect-[3/4] min-w-0 pl-4 cursor-pointer"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i < 3}
                sizes="(min-width: 768px) 33vw, 100vw"
                quality={80}
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/40 pointer-events-none" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox via portal */}
      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onChange={setLightbox}
        />
      )}
    </div>
  );
};

const Hero = () => {
  useEffect(() => {
    const mainHeading = document.getElementById("main-heading");
    const subHeading = document.getElementById("sub-heading");
    requestAnimationFrame(() => {
      setTimeout(() => {
        mainHeading?.classList.remove("translate-y-8", "opacity-0");
        subHeading?.classList.remove("translate-y-8", "opacity-0");
      }, 200);
    });
  }, []);

  return (
    <section
      id="carousel"
      className="relative flex flex-col items-center w-full pt-40 pb-20 px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="w-full max-w-6xl">
        <div className="relative group">
          {/* Glowing border effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>

          {/* Carousel container */}
          <div className="relative backdrop-blur-xl bg-slate-900/20 border border-white/10 rounded-3xl p-4 shadow-2xl">
            <ImageCarousel
              images={[
                {
                  src: "/images/carousel/fakeynails-mobile.jpg",
                  alt: "UX/UI wireframes och prototyper",
                },
                {
                  src: "/images/carousel/mozionzone-mobile.jpg",
                  alt: "Responsiv webbplats på flera enheter",
                },
                {
                  src: "/images/carousel/skenningevvs-mobile.jpg",
                  alt: "Responsiv webbplats på flera enheter",
                },
                   {
                  src: "/images/carousel/gammelbyggnad-mobil.jpg",
                  alt: "Responsiv webbplats på flera enheter",
                },
                {
                  src: "/images/carousel/mozionzone-mobile.jpg",
                  alt: "Responsiv webbplats på flera enheter",
                },
                  {
                  src: "/images/carousel/jonny-portfolio-mobile.jpg",
                  alt: "Responsiv webbplats på flera enheter",
                },
             
              ]}
              interval={5000}
              autoPlay
            />
          </div>

          {/* Additional glow effects */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-80 h-20 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
