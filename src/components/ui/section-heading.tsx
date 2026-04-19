import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.26em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 font-heading text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-[var(--foreground-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
