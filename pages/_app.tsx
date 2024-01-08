import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/terms&conditions.css";
import "../styles/svg.css";
import "../styles/media-query.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ChatBot Builder</title>
        <link rel="shortcut icon" href="https://dlvkyia8i4zmz.cloudfront.net/UCNdkpFbQt60Zz6fLKe2_CBB_favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Outfit&family=Poppins:ital@0;1&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Chatbot Builder | Design and Deploy AI Chatbots without Coding"></meta>
        <meta name="description" content="ChatBot Builder | Build AI chatbots trained on your docs, chats & URLs. Automate support, sales, & FAQs."></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
