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

      <main className="bg-slate-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        
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

          {/* Services Section */}
        <section>
          {/* Title, Subtitle */}
          <div>
            <h3 className='text-3xl py-1 mt-8 font-Kanit font-bold text-gray-800 md:text-2xl dark:text-gray-300 text-center'>Service I Offer</h3>
            <p className='text-md py-2 leading-7 text-gray-500 font-Kanit md:text-xl max-w-lg text-center dark:text-gray-400 mx-auto'>I have some skills and experience as a freelance and internship in web design and web programming. I am also used to working both independently and as a team.</p>
            <p className='text-md py-2 leading-7 text text-gray-400 font-Kanit md:text-lg max-w-lg text-center dark:text-gray-300 mx-auto'>I offer from a wide range of services, including brand design, programming and teaching.</p>
          </div>

          {/* Card ability */}
          <div className='lg:flex gap-10'>
            <div className='text-center lg:w-1/3 shadow-lg p-10 my-10 rounded-2xl dark:bg-slate-300'>
              <Image className='mx-auto' src={design} width={100} height={100} alt={'design'}/>
              <h3 className='pt-8 pb-2 font-bold text-gray-700 text-lg font-Kanit'>Web Design</h3>
              <p className='text-gray-500 font-Kanit py-2'>Creating elegant web design suited for your needs following core design theory.</p>
              <h4 className='text-indigo-600 font-Kanit py-4'>Design tools I use</h4>
              <p className='text-gray-500 py-1 font-Kanit'>Photoshop</p>
              <p className='text-gray-500 py-1 font-Kanit'>Canva</p>
              <p className='text-gray-500 py-1 font-Kanit'>Figma</p>
            </div>

            <div className='text-center lg:w-1/3 shadow-lg p-10 my-10 rounded-2xl dark:bg-slate-300'>
              <Image className='mx-auto' src={code} width={100} height={100} alt={'design'}/>
              <h3 className='pt-8 pb-2 font-bold text-gray-700 text-lg font-Kanit'>Web Programming</h3>
              <p className='text-gray-500 font-Kanit py-2'>Creating a web-based application that suited your needs following the core programming theory.</p>
              <h4 className='text-indigo-600 font-Kanit py-4'>Framework that I use</h4>
              <p className='text-gray-500 py-1 font-Kanit'>Laravel</p>
              <p className='text-gray-500 py-1 font-Kanit'>NodeJS</p>
              <p className='text-gray-500 py-1 font-Kanit'>TailwindCSS</p>
            </div>

            <div className='text-center lg:w-1/3 shadow-lg p-10 my-10 rounded-2xl dark:bg-slate-300'>
              <Image className='mx-auto' src={consulting} width={100} height={100} alt={'design'}/>
              <h3 className='pt-8 pb-2 font-bold text-gray-700 text-lg font-Kanit'>Soft Skills</h3>
              <p className='text-gray-500 font-Kanit py-2'>Learned various soft skills from the training and helped me to work independently or as a team.</p>
              <h4 className='text-indigo-600 font-Kanit py-4'>Skill i use</h4>
              <p className='text-gray-500 py-1 font-Kanit'>Problem Solving</p>
              <p className='text-gray-500 py-1 font-Kanit'>Leadership</p>
              <p className='text-gray-500 py-1 font-Kanit'>Team Work</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 mt-8 font-Kanit font-bold text-gray-800 md:text-2xl dark:text-gray-300 text-center'>Portofolio</h3>

            <p className='text-md py-2 leading-7 text-gray-500 font-Kanit md:text-xl max-w-lg text-center dark:text-gray-400 mx-auto'>Since the beginning my journey as a freel developer, I've done remote work for <span className='text-indigo-500'>agercies</span> consulted for <span className='text-indigo-500'>startups </span>and collaborated with talented people to create digital products for both business and consumer use.</p>

            <p className='text-md py-2 leading-7 text text-gray-400 font-Kanit md:text-lg max-w-lg text-center dark:text-gray-300 mx-auto'>I offer from a wide range of services, including brand design, programming and teaching.</p>
          </div>
            <div className="grid md:grid-cols-2 gap-6 pb-20">
              <div>
                <a href="/project1"><Image src={project1} className='transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 rounded-xl' alt={'image-bengkelline-project'}/></a>
              </div>
              <div>
                <a href="/project2"><Image src={web2} className='transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 rounded-xl' alt={'image-web2'}/></a>
              </div>
              <div>
                <Image src={web3} alt={'image-web3'}/>
              </div>
              <div>
                <Image className='max-h-[320px]' src={web4} alt={'image-web4'}/>
              </div>
              <div>
                <Image className='max-h-[320px]' src={web5} alt={'image-web5'}/>
              </div>
              <div>
                <Image className='max-h-[300px]' src={web6} alt={'image-web6'}/>
              </div>  
            </div>
        </section>
      </main>

      <footer>
        <div className='bg-indigo-500 p-10'>
          <h3 className='text-white font-Kanit text-center'>Made with<span className='font-bold'> pleasure </span>by Muhammad Ammar Afif ❤️</h3>
        </div>
      </footer>
    </div>
  )
}
