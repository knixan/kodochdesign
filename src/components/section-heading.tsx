import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow: string;
  children: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  children,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={clsx(centered && "text-center", className)}>
      <p
        className={clsx(
          "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400 mb-3",
          centered && "justify-center",
        )}
      >
        {centered && <span className="h-px w-10 bg-fuchsia-400/60" />}
        {eyebrow}
        {centered && <span className="h-px w-10 bg-fuchsia-400/60" />}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
        {children}
      </h2>
    </div>
  );
}
