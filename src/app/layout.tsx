import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "./siteConfig"; // Assuming this file exists and is configured

import { Sidebar } from "@/components/ui/navigation/Sidebar"; // Assuming this component exists

const colfax = localFont({
  src: [
    {
      // Corrected path based on your 'ls' output
      path: '../fonts/ColfaxWebRegular-ffe8279204a8eb350c1a8320336a8e1a.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      // This path was already correct
      path: '../fonts/ColfaxWebMedium-5cd963f45f4bd8647a4e41a58ca9c4d3.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  display: "swap",
  variable: "--font-colfax", // Keep this if you plan to use the CSS variable elsewhere, otherwise optional
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

// Create a CSS class to enforce uppercase on the Barlow font
const barlowUppercaseStyles = `
  .font-heading, :root [style*="var(--font-barlow)"] {
    text-transform: uppercase !important;
  }
`

// Remember to replace placeholder values below
export const metadata: Metadata = {
  metadataBase: new URL("https://yoururl.com"), // Replace with your actual URL
  title: siteConfig.name, // Ensure siteConfig provides a 'name'
  description: siteConfig.description, // Ensure siteConfig provides a 'description'
  keywords: [],
  authors: [
    {
      name: "yourname", // Replace with your name
      url: "", // Optionally add your URL
    },
  ],
  creator: "yourname", // Replace with your name
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url, // Ensure siteConfig provides a 'url'
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico", // Ensure favicon.ico exists in the /public folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: barlowUppercaseStyles }} />
      </head>
      {/* Using colfax.className is fine even if 'variable' is defined.
          If you prefer the variable approach, remove colfax.className here
          and set `font-family: var(--font-colfax)` in your globals.css */}
      <body
        className={`${colfax.className} ${barlow.variable} overflow-y-scroll scroll-auto antialiased selection:bg-indigo-100 selection:text-indigo-700 dark:bg-gray-950`}
        suppressHydrationWarning // Good practice with next-themes
      >
        <div className="mx-auto max-w-screen-2xl">
          {/* ThemeProvider wraps the part of the UI that needs theme toggling */}
          <ThemeProvider defaultTheme="system" attribute="class">
            <Sidebar />
            {/* Ensure main content area accounts for sidebar width */}
            <main className="lg:pl-72">{children}</main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
