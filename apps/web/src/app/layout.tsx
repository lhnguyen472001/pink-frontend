import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "../index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comprehensive Accounting & Financial Advisory Services | Pink Accounting",
  description: "Pink Accounting provides comprehensive accounting, bookkeeping, cash flow management, and strategic advisory solutions for SMEs. Contact us now to build a robust financial system.",
  openGraph: {
    title: "Comprehensive Accounting & Financial Advisory Services | Pink Accounting",
    description: "Pink Accounting provides comprehensive accounting, bookkeeping, cash flow management, and strategic advisory solutions for SMEs. Contact us now to build a robust financial system.",
    images: [
      {
        url: '/thumbnail.jpg', 
        width: 1200,
        height: 630,
        alt: 'Pink Accounting Services',
      }
    ],
    type: 'website',
    locale: 'en_US',
    siteName: 'Pink Accounting',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Comprehensive Accounting & Financial Advisory Services | Pink Accounting",
    description: "Pink Accounting provides comprehensive accounting, bookkeeping, cash flow management, and strategic advisory solutions for SMEs. Contact us now to build a robust financial system.",
    images: ['/thumbnail.jpg'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
