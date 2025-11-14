import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

// Đổi thành domain thật của bạn
const SITE_URL = 'https://pinkaccounting.vn';
const SITE_NAME = 'Pink Accounting';
const SITE_TITLE = 'Comprehensive Accounting & Financial Advisory Services | Pink Accounting';
const SITE_DESCRIPTION = 'Pink Accounting provides comprehensive accounting, bookkeeping, cash flow management, and strategic advisory solutions for SMEs. Contact us now to build a robust financial system.';
const OG_IMAGE = '/og-image.jpg'; // hoặc '/og-image.jpg'

export const metadata: Metadata = {
  // ✅ BẮT BUỘC: Base URL cho tất cả relative paths
  metadataBase: new URL(SITE_URL),
  
  // ✅ Basic Meta Tags
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ['accounting', 'bookkeeping', 'financial advisory', 'SME', 'cash flow management'],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  
  // ✅ Canonical URL
  alternates: {
    canonical: SITE_URL,
  },
  
  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // ✅ Open Graph (Facebook, LinkedIn, Discord, Telegram, WhatsApp)
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Accounting Services`,
        type: 'image/jpeg',
      },
    ],
  },
  
  // ✅ Twitter Card (Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
    creator: '@pinkaccounting', // Thay bằng Twitter handle của bạn (nếu có)
    site: '@pinkaccounting', // Thay bằng Twitter handle của bạn (nếu có)
  },
  
  // ✅ Icons & Theme
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  
  // ✅ Theme Color (hiển thị trên mobile browsers)
  themeColor: '#ffffff',
  
  // ✅ Verification (optional - nếu bạn cần verify với các platform)
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  // ✅ App Links (optional - cho mobile apps)
  // appLinks: {
  //   ios: {
  //     url: 'https://apps.apple.com/app/yourapp',
  //     app_store_id: 'your_app_id',
  //   },
  //   android: {
  //     package: 'com.yourapp',
  //     url: 'https://play.google.com/store/apps/details?id=com.yourapp',
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Additional meta tags for better compatibility */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
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