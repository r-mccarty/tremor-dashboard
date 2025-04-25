import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "./siteConfig";

import { RootLayoutClient } from "./layout.client";

// Font configurations
const colfax = localFont({
  src: [
    {
      path: '../fonts/ColfaxWebRegular-ffe8279204a8eb350c1a8320336a8e1a.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/ColfaxWebMedium-5cd963f45f4bd8647a4e41a58ca9c4d3.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: "swap",
  variable: "--font-colfax",
})

const barlow = localFont({
  src: [
    {
      path: '../fonts/barlow-latin-400-normal-7fa387951673abf164b13dd1b45c70e3.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/barlow-latin-500-normal-50adbbfa3bfe480bf4246ff5bad7ad06.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/barlow-latin-700-normal-dd5b2912dbf896310865c1e9ac85ab41.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: "swap",
  variable: "--font-barlow",
})

const simplonbp = localFont({
  src: [
    {
      path: '../fonts/simplonbp-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/simplonbp-medium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: "swap",
  variable: "--font-simplonbp",
})

// Create a CSS class to enforce uppercase on the Barlow font
const barlowUppercaseStyles = `
  .font-heading, :root [style*="var(--font-barlow)"] {
    text-transform: uppercase !important;
  }
`

// Metadata for the application
export const metadata: Metadata = {
  metadataBase: new URL("https://yoururl.com"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "yourname",
      url: "",
    },
  ],
  creator: "yourname",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

// Root layout (Server Component)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: barlowUppercaseStyles }} />
      </head>
      <body
        className={`${colfax.className} ${barlow.variable} ${simplonbp.variable} overflow-y-scroll scroll-auto antialiased selection:bg-indigo-100 selection:text-indigo-700 dark:bg-gray-950`}
        suppressHydrationWarning // Good practice with next-themes
      >
        <div className="mx-auto max-w-screen-2xl">
          <RootLayoutClient>{children}</RootLayoutClient>
        </div>
      </body>
    </html>
  );
}
