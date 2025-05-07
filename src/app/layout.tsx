import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dentaverax | Dijital Dental Çözümler ve CAD/CAM Laboratuvarı",
  description: "Dentaverax, ileri CAD/CAM teknolojisiyle dental altyapı çözümleri sunar. Yenilikçi yaklaşımıyla sektörde kalıcı üstünlükler hedefler.",
  openGraph: {
    title: "Dentaverax | Dijital Dental Çözümler ve CAD/CAM Laboratuvarı",
    description: "Dentaverax, ileri CAD/CAM teknolojisiyle dental altyapı çözümleri sunar. Yenilikçi yaklaşımıyla sektörde kalıcı üstünlükler hedefler.",
    url: "https://dentlabs-static.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dentaverax Logo",
      },
    ],
    siteName: "Dentaverax",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-black dark:text-white transition-colors`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
