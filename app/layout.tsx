import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_DESC, SITE_TITLE } from '../config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
}
export const viewport: Viewport = {
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
