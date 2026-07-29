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
    default: "Drifinity | GTM & Automation Systems for Growing Businesses",
    template: "%s — Drifinity",
  },
  description:
    "Fix how you grow or how you run. Drifinity builds GTM and automation systems for agencies, startups, clinics, law firms, and trading companies.",
  openGraph: {
    type: "website",
    siteName: "Drifinity",
    title: "Drifinity | GTM & Automation Systems for Growing Businesses",
    description:
      "Fix how you grow or how you run. Drifinity builds GTM and automation systems for agencies, startups, clinics, law firms, and trading companies.",
    images: [{ url: "/og.png", width: 1733, height: 908, alt: "Drifinity — Find the leak. Build the fix." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drifinity | GTM & Automation Systems for Growing Businesses",
    description:
      "Fix how you grow or how you run. Drifinity builds GTM and automation systems for agencies, startups, clinics, law firms, and trading companies.",
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
