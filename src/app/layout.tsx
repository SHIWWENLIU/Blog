import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Provider from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shawn Blog',
  description: 'Welcome to Shawn Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light' suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <Header></Header>
          {children}
          <Footer></Footer>
        </Provider>
        </body>
    </html>
  )
}
