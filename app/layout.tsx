import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aniket Kedari - Full-Stack Developer | React, Next.js, Node.js",
  description:
    "Full-Stack Developer specializing in React, Next.js, Node.js, and Web3. View my projects and get in touch.",
  keywords: "Full-Stack Developer, React, Next.js, Node.js, TypeScript, Web3",
  authors: [{ name: "Aniket Kedari" }],
  openGraph: {
    title: "Aniket Kedari - Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js, Node.js, and Web3",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Kedari - Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js, Node.js, and Web3",
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" fontSize="90" fontWeight="bold" fill="%236633FF">A</text></svg>',
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
