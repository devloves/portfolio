import '../styles/globals.css'
import { Rubik } from 'next/font/google'
import { Metadata } from 'next'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})
 
export default function MyApp({ Component, pageProps }) {
  export const metadata: Metadata = {
    title: "Devansh Tiwari's Portfolio",
    description: 'Front-End Developer & Designer from India.',
  };
  
  return (
    <main className={`${rubik.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
