import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Indian Food Footprint Calculator",
  description: "Calculate your ecological footprint based on your food habits",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Hidden Netlify form for detection */}
        <form name="netlify-dummy-form" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="netlify-dummy-form" />
          <input name="bot-field" /> { /* Honeypot field */ }
        </form>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}


import './globals.css'