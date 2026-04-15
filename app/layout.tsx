import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

import { ThemeProvider } from 'app/providers/theme'
import { Footer } from 'widget/footer'
import { Header } from 'widget/header'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Сахэлектрик — электромаркет Сахалина',
    template: '%s | Сахэлектрик'
  },
  description:
    'Электротехника, освещение, тёплые полы, инструмент и услуги аттестованной электролаборатории. Доставка по всей Сахалинской области.',
  keywords: [
    'электрика',
    'сахэлектрик',
    'электромаркет',
    'сахалин',
    'южно-сахалинск',
    'электролаборатория'
  ]
}

export const viewport: Viewport = {
  themeColor: [
    { color: '#fafafa', media: '(prefers-color-scheme: light)' },
    { color: '#0a0a0b', media: '(prefers-color-scheme: dark)' }
  ],
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
