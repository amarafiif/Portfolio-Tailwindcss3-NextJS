import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillInstagram, 
        AiFillLinkedin, 
        AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
// import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web1.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import profile from '../public/profile-avatar.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Muhammad Ammar Afif - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-Kanit font-bold text-indigo-500">AmarDev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl dark:text-white"/>
              </li>
              <li>
                <a href="" className='bg-gradient-to-r from-indigo-500 to-blue-500 border-0 text-white px-4 py-2 rounded-lg ml-8 font-Kanit font-medium'>Resume</a>
              </li>
            </ul>
          </nav>

          {/* Title - Subtitle - Description */}
          <div className='p-8 text-center'>
            <h2 className='text-4xl font-bold py-2 font-Kanit text-indigo-500 md:text-5xl'>Muhammad Ammar Afif</h2>
            <h3 className='text-lg font-medium text-gray-800 font-Kanit md:text-2xl dark:text-gray-300'>Koordinator Computer Network.</h3>
            <p className='text-md font-normal py-4 leading-8 font-Kanit text-gray-600 md:text-xl max-w-lg dark:text-gray-400 mx-auto'>Freelance providing services for programming and design design your website. Join me down below and let's get cracking!.</p>
          </div>

          {/* Social icon */}
          <div className='flex justify-center gap-12 text-2xl text-indigo-500'>
            <a href='https://www.instagram.com/amarafiif' target='_blank'><AiFillInstagram /></a>
            <a href='https://www.linkedin.com/in/muhammad-ammar-afif-2b9741218/' target='_blank'><AiFillLinkedin/></a>  
            <a href="https://youtube.com/@muhammadammar4708" target='_blank'><AiFillYoutube /></a>
          </div>

          <div className='relative mx-auto mt-10 bg-gradient-to-r from-cyan-500 to-indigo-500 w-60 h-60 rounded-full overflow-hidden md:h-80 md:w-80'>
            <Image src={profile} layout='fill' objectFit='cover' alt={'Avatar'} />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 mt-8 font-Kanit font-bold text-gray-800 md:text-2xl dark:text-gray-300 text-center'>Service I Offer</h3>
            
            <p className='text-md py-2 leading-7 text-gray-500 font-Kanit md:text-xl max-w-lg text-center dark:text-gray-400 mx-auto'>Since the beginning my journey as a freel developer, I've done remote work for <span className='text-indigo-500'>agercies</span> consulted for <span className='text-indigo-500'>startups </span>and collaborated with talented people to create digital products for both business and consumer use.</p>
            
            <p className='text-md py-2 leading-7 text text-gray-400 font-Kanit md:text-lg max-w-lg text-center dark:text-gray-300 mx-auto'>I offer from a wide range of services, including brand design, programming and teaching.</p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 my-10 rounded-2xl dark:bg-slate-300'>
              <Image className='mx-auto' src={design} width={100} height={100} alt={'design'}/>
              <h3 className='pt-8 pb-2 font-bold text-gray-700 text-lg font-Kanit'>Beatiful Design</h3>
              <p className='text-gray-500 font-Kanit py-2'>Creating elegant design suited for your needs following core design theory.</p>
              <h4 className='text-indigo-600 font-Kanit py-4'>Design tools I use</h4>
              <p className='text-gray-500 py-1 font-Kanit'>Photoshop</p>
              <p className='text-gray-500 py-1 font-Kanit'>Canva</p>
              <p className='text-gray-500 py-1 font-Kanit'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 my-10 rounded-2xl dark:bg-slate-300'>
              <Image className='mx-auto' src={code} width={100} height={100} alt={'design'}/>
              <h3 className='pt-8 pb-2 font-bold text-gray-700 text-lg font-Kanit'>Beatiful Design</h3>
              <p className='text-gray-500 font-Kanit py-2'>Creating elegant design suited for your needs following core design theory.</p>
              <h4 className='text-indigo-600 font-Kanit py-4'>Design tools I use</h4>
              <p className='text-gray-500 py-1 font-Kanit'>Photoshop</p>
              <p className='text-gray-500 py-1 font-Kanit'>Canva</p>
              <p className='text-gray-500 py-1 font-Kanit'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 my-10 rounded-2xl dark:bg-slate-300'>
              <Image className='mx-auto' src={consulting} width={100} height={100} alt={'design'}/>
              <h3 className='pt-8 pb-2 font-bold text-gray-700 text-lg font-Kanit'>Beatiful Design</h3>
              <p className='text-gray-500 font-Kanit py-2'>Creating elegant design suited for your needs following core design theory.</p>
              <h4 className='text-indigo-600 font-Kanit py-4'>Design tools I use</h4>
              <p className='text-gray-500 py-1 font-Kanit'>Photoshop</p>
              <p className='text-gray-500 py-1 font-Kanit'>Canva</p>
              <p className='text-gray-500 py-1 font-Kanit'>Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 mt-8 font-Kanit font-bold text-gray-800 md:text-2xl dark:text-gray-300 text-center'>Portofolio</h3>

            <p className='text-md py-2 leading-7 text-gray-500 font-Kanit md:text-xl max-w-lg text-center dark:text-gray-400 mx-auto'>Since the beginning my journey as a freel developer, I've done remote work for <span className='text-indigo-500'>agercies</span> consulted for <span className='text-indigo-500'>startups </span>and collaborated with talented people to create digital products for both business and consumer use.</p>

            <p className='text-md py-2 leading-7 text text-gray-400 font-Kanit md:text-lg max-w-lg text-center dark:text-gray-300 mx-auto'>I offer from a wide range of services, including brand design, programming and teaching.</p>
          </div>
            <div className="grid grid-cols-2 gap-6 pb-20">
              <div className=''>
                <Image src={web1} alt={'image-web1'}/>
              </div>
              <div>
                <Image src={web2} alt={'image-web2'}/>
              </div>
              <div>
                <Image src={web3} alt={'image-web3'}/>
              </div>
              <div>
                <Image src={web4} alt={'image-web4'}/>
              </div>
              <div>
                <Image src={web5} alt={'image-web5'}/>
              </div>
              <div>
                <Image src={web6} alt={'image-web6'}/>
              </div>  
            </div>
        </section>
      </main>

      <footer>
        <div className='bg-indigo-500 p-10'>
          <h3 className='text-white font-Kanit text-center'>Muhammad Ammar Afif ❤️</h3>
        </div>
      </footer>
    </div>
  )
}
