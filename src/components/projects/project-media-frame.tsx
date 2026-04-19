import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectMediaFrameProps = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  compact?: boolean;
};

export function ProjectMediaFrame({
  src,
  alt,
  label,
  caption,
  className,
  priority = false,
  compact = false,
}: ProjectMediaFrameProps) {
  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      {label ? (
        <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-[#0b0e13]/85 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent backdrop-blur-sm">
          {label}
        </div>
      ) : null}

      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08090c]/70 to-transparent" />
      </div>

      {caption ? (
        <figcaption
          className={cn(
            "border-t border-white/8 px-5 py-4 text-sm leading-6 text-[var(--foreground-muted)]",
            compact && "px-4 py-3 text-xs leading-5",
          )}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
