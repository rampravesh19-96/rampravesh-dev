import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonLinkProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition-all duration-300";
  const variants = {
    primary:
      "bg-[linear-gradient(135deg,rgba(125,211,252,0.24),rgba(125,211,252,0.12))] text-white shadow-[0_18px_40px_rgba(56,189,248,0.12)] ring-1 ring-white/12 hover:-translate-y-0.5 hover:ring-white/20",
    secondary:
      "border border-white/12 bg-white/[0.03] text-white hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]",
    ghost:
      "text-[var(--foreground-muted)] hover:text-white",
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], className)}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
      {variant !== "ghost" ? (
        <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      ) : null}
    </Link>
  );
}
