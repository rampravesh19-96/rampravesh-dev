import type { Metadata } from "next";
import Script from "next/script";
import { JetBrains_Mono, Manrope, Sora } from "next/font/google";
import { siteProfile } from "@/data/site-content";
import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteProfile.name} | ${siteProfile.role}`,
  description:
    "Ram Pravesh Singh is a frontend engineer specializing in React.js, React Native, Next.js, and TypeScript with a premium portfolio focused on product-quality web and mobile experiences.",
  metadataBase: new URL(siteProfile.portfolio),
  alternates: {
    canonical: siteProfile.portfolio,
  },
  keywords: [
    "Ram Pravesh Singh",
    "Frontend Engineer",
    "React Developer",
    "React Native Developer",
    "Next.js Portfolio",
    "TypeScript Frontend Engineer",
  ],
  openGraph: {
    title: `${siteProfile.name} | ${siteProfile.role}`,
    description:
      "Frontend-first engineer building polished, scalable product experiences across web and mobile.",
    type: "website",
    url: siteProfile.portfolio,
    siteName: `${siteProfile.name} Portfolio`,
    images: [
      {
        url: `${siteProfile.portfolio}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${siteProfile.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteProfile.name} | ${siteProfile.role}`,
    description:
      "Frontend-first engineer building polished, scalable product experiences across web and mobile.",
    images: [`${siteProfile.portfolio}/opengraph-image`],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteProfile.name,
  jobTitle: siteProfile.role,
  email: siteProfile.email,
  url: siteProfile.portfolio,
  sameAs: [siteProfile.linkedin, siteProfile.github],
  knowsAbout: ["React.js", "React Native", "Next.js", "TypeScript", "JavaScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
