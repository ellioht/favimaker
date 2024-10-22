import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/css/colour-picker.css";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FaviProvider } from "@/components/favi-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://favimaker.com"),
  keywords: ["favicon", "app icon", "generator", "creator", "free", "tool", "website", "web", "design", "maker", "favimaker"],
  title: "Favimaker - Create Free Favicons & App Icons",
  description: "Create favicons and app icons for your website. Free to use, no sign up required.",
  openGraph: {
    title: "Favimaker - Create Free Favicons & App Icons",
    description: "Create favicons and app icons for your website. Free to use, no sign up required.",
    type: "website",
    locale: "en_GB",
    url: "https://favimaker.com",
    siteName: "Favimaker",
    images: [
      {
        url: "https://www.favimaker.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Favimaker - Create Free Favicons & App Icons",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <FaviProvider>{children}</FaviProvider>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
