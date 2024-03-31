import Footer from "@/components/Footer";
import { Manrope } from "next/font/google";
import localFont from 'next/font/local';
import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";

const manrope = Manrope({ subsets: ["latin"] });
const monument = localFont({
  src: '../../public/fonts/MonumentExtendedRegular.woff2',
  variable: '--font-monument',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>BOSS KREATOR</title>
        <meta name="description" content="Turning Ideas into Intuitive Digital Experiences."></meta>
      </Head>
      <main className={`${manrope.className} ${monument.variable} overflow-hidden`}>
        <Header/>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
