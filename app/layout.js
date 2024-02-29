import './globals.css'
import { Nanum_Gothic_Coding } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer';

export const metadata = {
  title: '조계현 포트폴리오',
  description: '백엔드 포트폴리오',
}

const nanumGothicCoding = Nanum_Gothic_Coding({ 
                    weight: '700',
                    subsets: ['latin'] 
                  })

export default function RootLayout({ children }) {

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={nanumGothicCoding.className}>
          <Header/>
            {children}
          <Footer/>
        </body>
      </html>
    </>
  )
}


