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
        <link rel="shortcut icon" href="chatbot-builder-favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Outfit&family=Poppins:ital@0;1&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZEGY39PJM8"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag() {
                    dataLayer.push(arguments);
                  }
                  gtag("js", new Date());
                  gtag("config", "G-ZEGY39PJM8");
                `,
          }}
        ></script>
         {/* <!-- Google Tag Manager --> */}

         <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':

  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  
  })(window,document,'script','dataLayer','GTM-PS96TMC8');
            `,}}>

         </script>


      </Head>

      <Component {...pageProps} />
    </>
  );
}
