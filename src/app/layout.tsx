import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Min Next.js App',
  description: 'En enkel App Router-exempel',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <header style={{ padding: '1rem', background: '#000000' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/">Start</Link>
            <Link href="/about">Om oss</Link>
          </nav>
        </header>
        <main style={{ padding: '1rem' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
