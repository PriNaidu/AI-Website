import "@/styles/globals.css";
import "@/styles/home.css";
import "@/styles/media-query.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ChatBot Builder</title>
        <link rel="shortcut icon" href="chatbot-builder-favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
