import { Inter } from 'next/font/google'
import CommonLayout from './commonLayout'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className='logoIcon'>
            <Link href="/">Logo</Link>
          </div>
          <CommonLayout/>
        </div>
        <div className='children' >
          {children}
        </div>
        </body>
    </html>
  )
}
