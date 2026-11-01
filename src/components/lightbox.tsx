"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { useTranslate } from "@/locales";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}

export default function Lightbox({
  images,
  index,
  onClose,
  onChange,
}: LightboxProps) {
  const { t } = useTranslate();

  const prev = () => onChange((index - 1 + images.length) % images.length);
  const next = () => onChange((index + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
      if (e.key === "ArrowLeft")
        onChange((index - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, images.length, onClose, onChange]);

  const navButton =
    "absolute top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 hover:bg-white/20 p-2 text-2xl text-white transition";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={images[index].alt}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label={t("lightbox.prevImage")}
        className={`${navButton} left-4`}
      >
        <FiChevronLeft />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label={t("lightbox.nextImage")}
        className={`${navButton} right-4`}
      >
        <FiChevronRight />
      </button>

      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t("lightbox.close")}
          className="absolute -top-4 -right-4 z-10 rounded-full bg-[#0b1028] hover:bg-[#151b3d] border border-white/20 p-2 text-xl text-white transition"
        >
          <FiX />
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
        />
      </div>
    </div>,
    document.body,
  );
}
