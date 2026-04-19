import Link from "next/link";
import { contactLinks } from "@/data/site-content";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col gap-5 text-sm text-[var(--foreground-muted)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-white">Ram Pravesh Singh</p>
          <p>Frontend Engineer building premium web and mobile experiences.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href={contactLinks.github.href} target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link href={contactLinks.linkedin.href} target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <Link href={contactLinks.email.href}>Email</Link>
          <Link href={contactLinks.resume.href}>Resume</Link>
        </div>
      </Container>
    </footer>
  );
}
