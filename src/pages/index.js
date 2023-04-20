import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/hero';
import Projects from '../components/projects';
import Title from '../components/title';
import About from '../components/about';
import { Link } from 'react-scroll';
import { PT_Mono } from 'next/font/google'
import { Oswald } from 'next/font/google'
import Navbar from '../components/navbar';
const pt = PT_Mono({ 
  subsets: ['latin'],
  weight: '400',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: '600',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Otgonbileg - Homepage</title>
        <meta name="Otgonbileg" content="Personal website of Otgonbileg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      </Head>
      <main className={`main ${pt.className}`}>
        <div className='w-full bg-[#FECACA] h-[calc(100vh-3rem)] overflow-y-scroll'>
            <Navbar />
            <div className={`${oswald.className}`}>
            <Hero/>
            </div>
            <Title title="<Projects/>"/>
            <Projects/>
            <Title title="About me()"/>
            <About />
        </div>
      </main>
    </>
  )
}
