import Head from 'next/head'
import {BsFillMoonStarsFill,
        BsMedium} from 'react-icons/bs';
import {AiFillInstagram, 
        AiFillLinkedin,
        AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web2 from '../public/web2.png';
import web3 from '../public/web1.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import profile from '../public/profile-avatar.png';
import project1 from '../public/bengkellineProject.png';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Muhammad Ammar Afif - Portfolio</title>
        <meta name="description" content="Ini adalah Portfolio Muhammad Ammar Afif" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-100 px-10 md:px-20 pb-20 lg:px-40 dark:bg-gray-900">
        
        {/* Section Header */}
        <section className="min-h-screen">
          {/* Navbar */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-Kanit font-bold text-indigo-500">AmarDev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl dark:text-white"/>
              </li>
              <li>
                <a href="" className='bg-indigo-500 border-0 text-white px-4 py-2 rounded-lg ml-8 font-Kanit font-medium'>Resume</a>
              </li>
            </ul>
          </nav>

          {/* Title - Subtitle - Description */}
          <div className='p-8 text-center'>
            <h2 className='text-4xl font-bold py-2 font-Kanit text-indigo-500 md:text-5xl'>Muhammad Ammar Afif</h2>
            <h3 className='text-sm font-medium text-gray-800 font-Kanit md:text-2xl dark:text-gray-300'>
            <Typewriter
              options={{
                strings: ['Backend Web Developer'],
                autoStart: true,
                loop: true,
              }}
            />
            </h3>
            <p className='text-md font-normal py-4 leading-8 font-Kanit text-gray-600 md:text-xl max-w-2xl dark:text-gray-400 mx-auto'>I am an undergraduate student in Informatics who likes to study website programming and web design. I have worked on UI/UX projects and web development several times as a freelance. I really hope I can work with you.</p>
          </div>

          {/* Social icon */}
          <div className='flex justify-center gap-12 text-2xl text-indigo-500'>
            <a href='https://www.instagram.com/amarafiif' target='_blank'><AiFillInstagram /></a>
            <a href='https://www.linkedin.com/in/muhammad-ammar-afif-2b9741218/' target='_blank'><AiFillLinkedin/></a>  
            <a href="https://youtube.com/@muhammadammar4708" target='_blank'><AiFillYoutube /></a>
            <a href="https://medium.com/@amarafif" target='_blank'><BsMedium /></a>
          </div>

          {/* My Avatar */}
          <div className='relative mx-auto mt-10 bg-gradient-to-r from-cyan-500 to-indigo-500 w-60 h-60 rounded-full overflow-hidden md:h-80 md:w-80'>
            <Image src={profile} layout='fill' objectFit='cover' alt={'Avatar'} />
          </div>
        </section>
      </main>

      <footer>
        <div className='bg-indigo-500 py-10'>
          <h3 className='text-white font-Kanit text-center'>Made with<span className='font-bold'> pleasure </span>by Muhammad Ammar Afif ❤️</h3>
        </div>
      </footer>
    </div>
  )
}
