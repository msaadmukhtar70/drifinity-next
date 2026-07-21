import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://drifinity.com"),
  title: {
    default: "Drifinity — Find the Revenue Leak. Build the Fix.",
    template: "%s — Drifinity",
  },
  description:
    "Drifinity diagnoses the growth and operational leaks costing your business, then builds the systems to fix them — starting with evidence, not a pitch.",
  openGraph: {
    type: "website",
    siteName: "Drifinity",
    title: "Drifinity — Find the Leak. Build the Fix.",
    description: "Growth and operations intelligence for businesses ready to replace guesswork with a system.",
    images: [{ url: "/og.png", width: 1733, height: 908, alt: "Drifinity — Find the leak. Build the fix." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drifinity — Find the Leak. Build the Fix.",
    description: "Growth and operations intelligence for businesses ready to replace guesswork with a system.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full bg-ink text-cream antialiased">
        <div className="site-shell flex min-h-screen flex-col">
          <div className="ambient-orb ambient-orb--one" aria-hidden />
          <div className="ambient-orb ambient-orb--two" aria-hidden />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
