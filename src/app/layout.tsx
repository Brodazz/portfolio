import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import GlowBackground from "@/components/layout/GlowBackground";
import FloatingNav from "@/components/layout/FloatingNav";
import FooterAccent from "@/components/layout/FooterAccent";
import MotionProvider from "@/components/motion/MotionProvider";
import { siteConfig, siteUrl } from "@/lib/site";

// Display / titoli — grotesque con più carattere (meno "trendy dev" standard)
const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

// Corpo del testo
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Tag tecnologie e micro-label
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s — Alessandro Broda",
  },
  description: siteConfig.description,
  keywords: [
    "Alessandro Broda",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Agenti AI",
    "Università di Camerino",
    "portfolio",
  ],
  authors: [{ name: "Alessandro Broda" }],
  creator: "Alessandro Broda",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// viewportFit "cover" è necessario perché env(safe-area-inset-*) abbia effetto su iOS.
export const viewport: Viewport = {
  themeColor: "#0a0f0d",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-text">
        <MotionProvider>
          <GlowBackground />
          {children}
          <FooterAccent />
          <FloatingNav />
        </MotionProvider>
      </body>
    </html>
  );
}
