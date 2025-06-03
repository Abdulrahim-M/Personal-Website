import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "./globals.css";
import "@/styles/styles.css";
import "@/styles/mobileMenu.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Blogs, Projects, and Thoughts",
  keywords: "Java, Springboot, React, Next.js, Back-end",
  authors: [{ name: "Abdulrahim Abdulazim", url: "https://raymorph.duckdns.org/" }],
  openGraph: {
    title: "Portfolio",
    description: "",
    url: "https://raymorph.duckdns.org/",
    siteName: "Portfolio",
    images: [
      {
        url: "https://raymorph.duckdns.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Og Image Alt Text",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "",
    images: ["https://raymorph.duckdns.org//twitter-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
