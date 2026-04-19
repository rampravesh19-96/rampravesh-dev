import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { contactLinks } from "@/data/site-content";

export function ContactCtaSection() {
  return (
    <section id="contact" className="section-shell section-divider">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(125,211,252,0.12),rgba(255,255,255,0.03))] p-8 shadow-[var(--shadow-card)] sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                  Recruiter Contact
                </p>
                <h2 className="mt-4 max-w-2xl font-heading text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                  Open to frontend roles where product quality, UI craft, and scalable delivery all matter.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--foreground-muted)] sm:text-lg">
                  If the work aligns, the fastest next step is simple: review the projects, download the resume, or reach out directly by email or LinkedIn.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink href={contactLinks.email.href}>
                    {contactLinks.email.label}
                  </ButtonLink>
                  <ButtonLink href={contactLinks.resume.href} variant="secondary">
                    Download Resume
                  </ButtonLink>
                </div>
              </div>

              <div className="grid gap-3">
                {Object.values(contactLinks).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http") || item.href.startsWith("mailto:")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("http") || item.href.startsWith("mailto:")
                        ? "noreferrer"
                        : undefined
                    }
                    className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 transition-colors hover:border-white/16 hover:bg-black/25"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm text-white">{item.value}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
