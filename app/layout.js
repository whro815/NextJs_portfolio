import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '조계현 포트폴리오',
  description: '백엔드 포트폴리오',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="navbar">
        <Link href='/'>Home</Link>
        <Link href='/aboutMe'>AboutMe</Link>
        <Link href='/projects'>Projects</Link>
      </div>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
