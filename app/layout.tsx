import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Header } from 'widget/header'
import { ThemeProvider } from 'app/providers/theme'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} animate-gradient min-h-screen antialiased`}
      >
        <ThemeProvider>
          <div className="relative z-10 mb-4">
            <Header />
            <div className="mx-auto min-h-screen w-full max-w-[98.5vw] rounded-3xl bg-white">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
