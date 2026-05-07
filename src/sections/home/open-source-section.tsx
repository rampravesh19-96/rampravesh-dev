import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { openSourceContent } from "@/data/site-content";

export function OpenSourceSection() {
  return (
    <section id="open-source" className="section-shell section-divider">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={openSourceContent.eyebrow}
            title={openSourceContent.title}
            description={openSourceContent.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-5">
            {openSourceContent.contributions.map((item, index) => (
              <Reveal key={item.href} delay={index * 0.06}>
                <article className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-[var(--shadow-soft)]">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-heading text-2xl tracking-[-0.04em] text-white">
                        {item.title}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)]">
                        {item.description}
                      </p>
                    </div>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--foreground-muted)] transition-colors hover:text-white"
                    >
                      View PR
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-5">
            <Reveal>
              <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="font-heading text-xl tracking-[-0.03em] text-white">
                    GitHub Profile
                  </p>
                  <Link
                    href={openSourceContent.profileLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-[var(--foreground-muted)] transition-colors hover:text-white"
                  >
                    {openSourceContent.profileLabel}
                  </Link>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)]">
                  Public repositories reinforce frontend breadth across Chrome extension tooling, Next.js ecommerce/admin workflows, and React Native mobile delivery.
                </p>
              </article>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-1">
              {openSourceContent.repositories.map((repo, index) => (
                <Reveal key={repo.title} delay={index * 0.06}>
                  <article className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6">
                    <p className="font-heading text-xl tracking-[-0.03em] text-white">{repo.title}</p>
                    <p className="mt-4 text-sm leading-7 text-[var(--foreground-muted)]">
                      {repo.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {repo.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--foreground-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
