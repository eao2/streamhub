import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>  
        <Head>
        <meta property="og:title" content="Streamhub Mongolia"/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://streamhub.mn" />
        <meta property="og:image" content="https://streamhub.netlify.app/thumbnail.png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:description" content="A new way to make a donation easy and secure." />
        <meta name="theme-color" content="#80f5d2" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#80f5d2"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
