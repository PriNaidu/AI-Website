/* eslint-disable @next/next/no-page-custom-font */
import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import BannerSection from './Components/BannerSection'
import UseChatbot from './Components/UseChatbot'
import ExampleChtabots from './Components/ExampleChtabots'
import LiveDemo from './Components/LiveDemo'
import Pricing from './Components/Pricing'
import LaunchChatbot from './Components/LaunchChatbot'
import Footer from './Components/Footer'
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [token, setToken] = useState<any>();

  useEffect(() => {
    const cookies = document.cookie.split(';')
    let token;
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('token=')) {
        token = cookie;
        setToken(token)
        break;
      }
    }

  }, [])
  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > 100) {
        setShow(true); 
      } else {
        setShow(false);  
      }
      setLastScrollY(window.scrollY); 
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <main >
  <Head>
  <title>ChatBot Builder</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Outfit&family=Poppins:ital@0;1&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />
  </Head>
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PS96TMC8"

  height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe></noscript>


  {/* <Navbar show={show}/> */}
<BannerSection token={token}/>
<UseChatbot/>
<ExampleChtabots/>
<LiveDemo/>
<Pricing token={token}/>
<LaunchChatbot/>
<Footer/>
    </main>
  )
}
