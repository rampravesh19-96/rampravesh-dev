"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteProfile } from "@/data/site-content";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white/6 bg-[#08090c]/75 backdrop-blur-xl"
    >
      <Container className="flex min-h-18 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] font-heading text-sm tracking-[0.18em] text-white">
            RPS
          </span>
          <div className="hidden sm:block">
            <p className="font-heading text-sm tracking-[0.02em] text-white">
              {siteProfile.name}
            </p>
            <p className="text-xs text-[var(--foreground-muted)]">{siteProfile.role}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-[var(--foreground-muted)] transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ButtonLink href={siteProfile.resume} variant="secondary" className="px-4 py-2.5">
          Resume
        </ButtonLink>
      </Container>
    </motion.header>
  );
}
