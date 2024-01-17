import './globals.css'
import Layout from './components/layout'


export const metadata = {
  title: '조계현 포트폴리오',
  description: '백엔드 포트폴리오',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Layout>
            {children}
          </Layout>
        </body>
      </html>
    </>
  )
}
