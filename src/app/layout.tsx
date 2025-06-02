//B:\mytestProjects\ChankuConstructionsV2\src\app\layout.tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chankuglobal.co.ke"),
  title: {
    default: "ChankuGlobal Ltd. - Quality Construction Solutions",
    template: "%s | ChankuGlobal Ltd.",
  },
  description:
    "ChankuGlobal Ltd. - Your trusted partner in quality construction and engineering solutions in Kenya. Specializing in construction, engineering, and project management.",
  keywords: [
    "construction company kenya",
    "ChankuGlobal Ltd.",
    "construction solutions",
    "engineering kenya",
    "construction services nairobi",
  ],
  authors: [{ name: "ChankuGlobal Ltd." }],
  creator: "ChankuGlobal Ltd.",
  publisher: "ChankuGlobal Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
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
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://chankuglobal.co.ke",
    siteName: "ChankuGlobal Ltd.",
    title: "ChankuGlobal Ltd. - Quality Construction Solutions",
    description:
      "Your trusted partner in quality construction and engineering solutions in Kenya",
    images: [
      {
        url: "/og-image.jpg", // Create this image for social sharing
        width: 1200,
        height: 630,
        alt: "ChankuGlobal Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChankuGlobal Ltd. - Quality Construction Solutions",
    description:
      "Your trusted partner in quality construction and engineering solutions in Kenya",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/82245a89d3.js"
          crossOrigin="anonymous"
          async //added this to improve performance
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Added Footer component for consistent layout */}
      </body>
    </html>
  );
}
