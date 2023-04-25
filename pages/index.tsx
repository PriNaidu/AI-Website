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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
  <Head>
  <title>ChatBot Builder</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Outfit&family=Poppins:ital@0;1&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />
  </Head>
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
