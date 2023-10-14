import Header from '@/components/Header'
import './globals.css'
import 'style/index.scss'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import Footer from '@/components/Footer'

const lexend =Lexend({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: 'ITViec',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={lexend.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
