import type { Metadata } from 'next'
import { Monofett } from 'next/font/google'
import './globals.css'

const monoffet = Monofett({ weight: "400", subsets: ['latin'], display: 'swap', variable: '--font-monoffet' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={monoffet.className + "flex-1 min-h-[100vh] bg-gray-50 pb-5"}>{children}</body>
    </html>
  )
}


