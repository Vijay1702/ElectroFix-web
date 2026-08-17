import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import JsonLd from "@/components/JsonLd";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Senthil Spares & Services | Motor & Appliance Repair in Pattukkottai",
  description: "Motor, fan, mixer grinder and submersible repair in Pattukkottai. Genuine electrical spare parts available at Sri Senthil Spares & Services. Call or WhatsApp today.",
  keywords: "electrical appliance repair, spare parts, motor repair, fan service, submersible repair, mixie service",
  metadataBase: new URL('https://srisenthilelectrofixin.vercel.app'),
  openGraph: {
    title: 'Sri Senthil Spares & Services | Pattukkottai',
    description: 'Expert motor, fan, mixer grinder and submersible repair in Pattukkottai. Genuine electrical spare parts available.',
    url: 'https://srisenthilelectrofixin.vercel.app',
    siteName: 'Sri Senthil Spares & Services',
    locale: 'en_IN',
    type: 'website',
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-1ZKL64SCV6" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1ZKL64SCV6');
            `,
          }}
        />
        
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
