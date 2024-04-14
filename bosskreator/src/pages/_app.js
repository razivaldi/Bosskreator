import Footer from "@/components/Footer";
import { Manrope } from "next/font/google";
import localFont from 'next/font/local';
import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import { useEffect } from "react";

const manrope = Manrope({ subsets: ["latin"] });
const monument = localFont({
  src: '../../public/fonts/MonumentExtendedRegular.woff2',
  variable: '--font-monument',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // You can also change below url value to any script url you wish to load, 
    // for example this is snap.js for Sandbox Env (Note: remove `.sandbox` from url if you want to use production version)
    const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';  
  
    let scriptTag = document.createElement('script');
    scriptTag.src = midtransScriptUrl;
  
    // Optional: set script attribute, for example snap.js have data-client-key attribute 
    // (change the value according to your client-key)
    const myMidtransClientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY;
    scriptTag.setAttribute('data-client-key', myMidtransClientKey);
  
    document.body.appendChild(scriptTag);
  
    return () => {
      document.body.removeChild(scriptTag);
    }
  }, []);
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
