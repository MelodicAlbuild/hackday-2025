import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "HackDay 2025",
  description: "Developed by HackUTA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>HackDay 2025</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-hide overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
