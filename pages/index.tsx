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
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > 100) {
        setShow(false); 
      } else {
        setShow(true);  
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
  <Navbar show={show}/>
<BannerSection/>
<UseChatbot/>
<ExampleChtabots/>
<LiveDemo/>
<Pricing/>
<LaunchChatbot/>
<Footer/>
    </main>
  )
}
