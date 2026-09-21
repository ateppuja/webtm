import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Kenali Bakat Diri dengan Talents Mapping | KenaliBakat",
  description:
    "Kenali kecenderungan bakat dan potensi diri melalui pendekatan Talents Mapping. Pelajari konsep bakat, manfaat asesmen, dan langkah pengembangan diri.",
  keywords: [
    "Talents Mapping",
    "Mengenal bakat diri",
    "Cara mengetahui bakat",
    "Asesmen bakat",
    "Pengembangan potensi diri",
    "KenaliBakat",
    "Karier dan pendidikan",
  ],
  authors: [{ name: "KenaliBakat" }],
  creator: "KenaliBakat",
  publisher: "KenaliBakat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kenali Bakat Diri dengan Talents Mapping | KenaliBakat",
    description:
      "Kenali kecenderungan bakat dan potensi diri melalui pendekatan Talents Mapping. Pelajari konsep bakat, manfaat asesmen, dan langkah pengembangan diri.",
    url: "https://kenalibakat.id",
    siteName: "KenaliBakat",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenali Bakat Diri dengan Talents Mapping | KenaliBakat",
    description:
      "Kenali kecenderungan bakat dan potensi diri melalui pendekatan Talents Mapping.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
