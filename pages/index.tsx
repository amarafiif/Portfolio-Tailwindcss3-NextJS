import Head from 'next/head';
import { BsFillMoonStarsFill, BsMedium } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { FaPhp, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';
import Image from 'next/image';
import profile from '../public/profile-avatar.png';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);
	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>Muhammad Ammar Afif - Portfolio</title>
				<meta name="description" content="Ini adalah Portfolio Muhammad Ammar Afif" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-slate-100 dark:bg-[#020617] font-Chakra">
				<header className="min-h-screen">
					{/* Sebelah Kiri */}
					<div className="flex flex-col justify-space-between">
						<nav className="py-10 mb-12 flex justify-between sticky top-0 px-10 md:px-20 lg:px-32 backdrop-blur-3xl bg-slate z-10">
							<h1 className="text-4xl font-bold text-indigo-500">Portfolio</h1>
							<ul className="flex items-center">
								<li>
									<BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-white" />
								</li>
								<li>
									<a href="#" className="bg-indigo-500 border-0 text-xl lg:text-2xl text-white px-5 py-3 rounded-lg ml-8 hover:bg-indigo-600 font-medium">
										Contact
									</a>
								</li>
							</ul>
						</nav>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:px-32 px-8">
							<div className="text-left mt-12">
								<h2 className="lg:text-6xl md:text-5xl text-4xl font-bold py-2 font-Chakra text-indigo-500">Muhammad Ammar Afif</h2>
								<h3 className="text-xl font-medium text-slate-700 md:text-4xl dark:text-slate-400">
									<Typewriter
										options={{
											strings: ['Backend Web Enthusiast'],
											autoStart: true,
											loop: true,
										}}
									/>
								</h3>
								<p className="text-xl py-4 mt-10 text-gray-600 md:text-2xl max-w-2xl dark:text-gray-400">
									I am an undergraduate student in Informatics who likes to study website programming and web design. I have worked on UI/UX projects and web
									development several times as a freelance. I really hope I can work with you. 👋
								</p>
								<div className="flex justify-left gap-6 lg:gap-12 mt-8 text-xl md:text-2xl lg:text-4xl text-indigo-500">
									<a href="https://www.instagram.com/amarafiif" className="hover:text-indigo-600" target="_blank">
										<AiFillInstagram />
									</a>
									<a href="https://www.linkedin.com/in/muhammad-ammar-afif-2b9741218/" className="hover:text-indigo-600" target="_blank">
										<AiFillLinkedin />
									</a>
									<a href="https://youtube.com/@muhammadammar4708" className="hover:text-indigo-600" target="_blank">
										<AiFillYoutube />
									</a>
									<a href="https://medium.com/@amarafif" className="hover:text-indigo-600" target="_blank">
										<BsMedium />
									</a>
								</div>
							</div>

							{/* Sebelah Kanan */}
							<div className="relative mt-10 hidden md:block md:mt-18 ml-auto bg-gradient-to-r from-cyan-500 to-indigo-500 w-60 h-60 rounded-t-full overflow-hidden lg:h-[100%] lg:w-[70%] ring-2 ring-indigo-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900">
								<Image src={profile} layout="fill" objectFit="cover" alt={'Avatar'} />
							</div>
						</div>
					</div>
					~
				</header>

				<section className="bg-slate-100 dark:bg-gray-900 mt-10">
					<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
						<div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
							<h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Projects</h2>
							<p className="font-light text-gray-500 text-xl dark:text-gray-400">Several projects that I have worked on.</p>
						</div>
						<div className="grid gap-8 lg:grid-cols-2">
							<article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
								<div className="flex justify-between items-center mb-5 text-gray-500">
									<span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
										<svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
										</svg>
										Fullstack Web Programming
									</span>
									<span className="text-sm">1 years ago</span>
								</div>
								<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									<a href="https://github.com/amarafiif/Holocation.git">Holocation - Ticketing Destination Web Application</a>
								</h2>
								<p className="mb-5 font-light text-gray-500 dark:text-gray-400">
									A dynamic website used to display information on tourist destinations in Yogyakarta. This website also displays information on how much the
									entrance ticket is to visit that destination and you can also order entrance tickets to that destination.
								</p>
								<div className="flex justify-between items-center">
									<div className="flex items-center space-x-4">
										<span className="text-slate-700 dark:text-slate-400">
											<FaPhp size={35} />
										</span>
										<span className="text-slate-700 dark:text-slate-400">
											<SiTailwindcss size={25} />
										</span>
										<span className="text-slate-700 dark:text-slate-400">
											<SiMysql size={25} />
										</span>
									</div>
									<a href="https://github.com/amarafiif/Holocation.git" className="inline-flex items-center font-medium text-indigo-500 hover:text-indigo-700">
										Repository
										<svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
												clipRule="evenodd"></path>
										</svg>
									</a>
								</div>
							</article>
							<article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
								<div className="flex justify-between items-center mb-5 text-gray-500">
									<span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
										<svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
												clipRule="evenodd"></path>
											<path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
										</svg>
										UI/UX Design
									</span>
									<span className="text-sm">6 months ago</span>
								</div>
								<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									<a href="#">BengkelLine - Mobile App Design Bengkel Online</a>
								</h2>
								<p className="mb-5 font-light text-gray-500 dark:text-gray-400">
									A mobile application design prototype designed to develop mobile-based online workshop applications. Where the application has many features
									such as: towing vehicles, calling tire repairs, Displaying stalls that sell the nearest retail petrol and buying and selling spare parts.
								</p>
								<div className="flex justify-between items-center">
									<div className="flex items-center space-x-4">
										<span className="text-slate-700 dark:text-slate-400">
											<FaFigma size={27} />
										</span>
									</div>
									<a href="#" className="inline-flex items-center font-medium text-indigo-500 hover:text-indigo-700">
										Prototype
										<svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
												clipRule="evenodd"></path>
										</svg>
									</a>
								</div>
							</article>
						</div>
					</div>
				</section>
			</main>

			<footer>
				<div className="bg-indigo-500 py-10">
					<h3 className="text-white text-center">
						Made with<span className="font-bold"> pleasure </span>by Muhammad Ammar Afif ❤️
					</h3>
				</div>
			</footer>
		</div>
	);
}
