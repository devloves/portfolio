import '../styles/globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${rubik.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
