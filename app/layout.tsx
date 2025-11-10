import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yahya Afadisse - Portfolio",
  description: "Portfolio professionnel de Yahya Afadisse, Développeur Full Stack passionné",
  generator: "yahya-af",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
        <meta property="og:image" content="/logo.svg" />
        <meta name="twitter:image" content="/logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
