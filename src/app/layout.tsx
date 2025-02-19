import type { Metadata } from "next"
import { Geist } from "next/font/google"

const geist = Geist({ subsets: ["latin"] })

import "./globals.css"

export const metadata: Metadata = {
  title: "three-js-primitives",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className}`}>{children}</body>
    </html>
  )
}
