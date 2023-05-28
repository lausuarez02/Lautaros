"use client"
import './globals.css'
import {ThemeProvider} from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class">
      <body>{children}</body>
    </ThemeProvider>
  )
}
