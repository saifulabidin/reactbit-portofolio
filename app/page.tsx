'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import { Timeline } from "./components/Timelines/Timeline";
import ContactForm from "./components/Contact/ContactForm";
import MobileNav from "./components/MobileNav/MobileNav";

export default function Home() {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Experience timeline data
  const timelineData = [
    {
      title: "2023 - 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Completed the full FreeCodeCamp curriculum, earning multiple certifications and building advanced projects.
          </p>
          <div className="mb-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ <strong>Responsive Web Design Certification</strong> - Mastered HTML5, CSS3, and responsive design principles
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ <strong>JavaScript Algorithms & Data Structures</strong> - Developed strong foundations in JS programming
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ <strong>Front End Development Libraries</strong> - Built projects using React, Redux, and Bootstrap
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/experience/project1.jpg"
              alt="FreeCodeCamp Project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/experience/project2.jpg"
              alt="FreeCodeCamp Certificate"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deepened my web development knowledge through self-paced study and project creation, focusing on modern JavaScript frameworks.
          </p>
          <div className="mb-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Built a portfolio of full-stack applications using MERN stack
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Contributed to open-source projects on GitHub
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Practiced responsive design and accessibility principles
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Learned API integration and backend development
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Started my formal learning journey with Dicoding Indonesia, completing multiple courses and certifications.
          </p>
          <div className="mb-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ <strong>Belajar Dasar Pemrograman Web</strong> - Learned fundamentals of HTML, CSS and JavaScript
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ <strong>Fundamental Front-End Web Development</strong> - Advanced concepts in modern web development
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ <strong>JavaScript Development</strong> - Deep dive into JavaScript programming
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Created multiple portfolio projects showcasing learned skills
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/images/experience/visual officer.png"
              alt="Dicoding Certificate"
              width={500}
              height={250}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-40 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  // Project data
  const projects = [
    // Fullstack projects
    {
      title: "Balancescan-Fullstack",
      description: "Full-stack application for monitoring balances & real-time analytics of multiple currencies with blockchain integration",
      techStack: ["TypeScript", "React", "Node.js", "Web3", "MongoDB"],
      imageUrl: "/images/project/fullstack/balance-scan.jpg",
      githubUrl: "https://github.com/saifulabidin/balancescan-fullstack",
      liveUrl: "#"
    },
    {
      title: "Book Trading Club",
      description: "Platform for peer-to-peer book trading with notifications & user reputation system",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      imageUrl: "/images/project/fullstack/book-trading-club.jpg",
      githubUrl: "https://github.com/saifulabidin/book-trading-club",
      liveUrl: "#"
    },
    // Frontend projects
    {
      title: "25-5 Clock",
      description: "Pomodoro timer application with customizable work and break intervals",
      techStack: ["React", "JavaScript", "CSS"],
      imageUrl: "/images/project/frontend/25-5-clock.png",
      githubUrl: "https://github.com/saifulabidin/25-5-clock",
      liveUrl: "#"
    },
    {
      title: "JavaScript Calculator",
      description: "Interactive calculator with mathematical operation support and memory functions",
      techStack: ["React", "JavaScript", "HTML", "CSS"],
      imageUrl: "/images/project/frontend/javascript-calculator.png",
      githubUrl: "https://github.com/saifulabidin/javascript-calculator",
      liveUrl: "#"
    },
    {
      title: "Markdown Previewer",
      description: "Real-time markdown preview application with support for all common markdown syntax",
      techStack: ["React", "JavaScript", "Marked.js", "Bootstrap"],
      imageUrl: "/images/project/frontend/Markdown-Previewer.png",
      githubUrl: "https://github.com/saifulabidin/markdown-previewer",
      liveUrl: "#"
    },
    {
      title: "Random Quote Machine",
      description: "App that displays random inspirational quotes with social media sharing capabilities",
      techStack: ["React", "JavaScript", "API Integration"],
      imageUrl: "/images/project/frontend/Random-Quote-Machine.png",
      githubUrl: "https://github.com/saifulabidin/random-quote-machine",
      liveUrl: "#"
    }
  ];

  // Skills data
  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express", "Laravel", "Python", "FastAPI", "RESTful API"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
    devopsAndTools: ["Git", "GitHub", "VS Code", "Docker", "Webpack", "AWS", "Vercel", "Figma", "Postman"]
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-[#19222D]/80 backdrop-blur-md z-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-[#C6F10E] text-xl font-bold">Saiful Abidin</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-[#C6F10E] transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-[#C6F10E] transition-colors">About</a>
              <a href="#education" className="text-white hover:text-[#C6F10E] transition-colors">Education</a>
              <a href="#skills" className="text-white hover:text-[#C6F10E] transition-colors">Skills</a>
              <a href="#projects" className="text-white hover:text-[#C6F10E] transition-colors">Projects</a>
              <a href="#certificates" className="text-white hover:text-[#C6F10E] transition-colors">Certificates</a>
              <a href="#experience" className="text-white hover:text-[#C6F10E] transition-colors">Learning Journey</a>
              <a href="#contact" className="text-white hover:text-[#C6F10E] transition-colors">Contact</a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />

      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="container mx-auto px-4 h-screen">
          <div className="grid grid-cols-1 md:grid-cols-12 h-full">
            <div className="md:col-span-6 relative flex items-center justify-center">
              <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            </div>
            <div className="md:col-span-6 flex items-center">
              <div className="flex flex-col gap-6">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl md:text-2xl text-white font-bold">I'm Available For</h1>
                    <RotatingText 
                      texts={['Freelance', 'Full-time Job', 'Collaboration', 'Consultation']}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-xl md:text-2xl font-bold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start">
                  <SplitText 
                    text="I'm Saiful Abidin"
                    className="text-4xl md:text-6xl font-semibold text-start"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  <SplitText 
                    text="Full Stack Developer"
                    className="text-4xl md:text-6xl font-semibold text-start text-[#C6F10E]"
                    delay={75}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
                <BlurText 
                  text="As a self-taught developer from Indonesia, I'm passionate about creating engaging and interactive websites. I bring over 5 years of experience in full-stack development, specializing in React, Node.js, and modern web technologies."
                  delay={75}
                  animateBy="words"
                  direction="top"
                  className="text-lg md:text-xl text-gray-300 mb-8"
                />
                <div className="flex items-center gap-4">
                  <a href="#contact" className="bg-[#C6F10E] hover:bg-[#a5c70c] text-black py-2 px-6 rounded-md font-medium transition-colors">
                    Contact Me
                  </a>
                  <a href="#projects" className="bg-transparent hover:bg-white/10 text-white border border-white py-2 px-6 rounded-md font-medium transition-colors">
                    View Projects
                  </a>
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/saifulabidin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C6F10E] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="https://linkedin.com/in/saiful-abidin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C6F10E] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://twitter.com/syaifulosd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C6F10E] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="https://instagram.com/itssabidz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C6F10E] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About <span className="text-[#C6F10E]">Me</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="rounded-lg overflow-hidden border-4 border-[#C6F10E] shadow-xl shadow-[#C6F10E]/10">
                <Image 
                  src="/images/profile.jpg" 
                  alt="Saiful Abidin" 
                  width={500} 
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <h3 className="text-2xl font-semibold mb-4">Self-taught <span className="text-[#C6F10E]">Full-Stack Developer</span></h3>
              <p className="text-gray-300 mb-6">
                As a self-taught developer from Indonesia, I bring over 5 years of experience in web development. 
                I specialize in creating robust server-side applications with a passion for clean code and scalable solutions.
              </p>
              <p className="text-gray-300 mb-6">
                I'm passionate about creating efficient, user-friendly digital solutions with a focus on clean code and best practices. 
                Despite limited formal education, I've demonstrated the ability to independently build and deploy complex web applications, 
                RESTful APIs, and interactive user interfaces.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="font-semibold">Name:</p>
                  <p className="text-gray-300">Saiful Abidin</p>
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p className="text-gray-300">contact@sabidzpro.is-a.dev</p>
                </div>
                <div>
                  <p className="font-semibold">Location:</p>
                  <p className="text-gray-300">Wonogiri, Jawa Tengah, Indonesia</p>
                </div>
                <div>
                  <p className="font-semibold">Available for:</p>
                  <p className="text-gray-300">Remote Jobs, Internships</p>
                </div>
              </div>
              <a href="/CV-SaifulAbidin.pdf" download className="bg-[#C6F10E] hover:bg-[#a5c70c] text-black py-2 px-6 rounded-md font-medium transition-colors inline-block">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-[#20293A]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-[#C6F10E]">Skills</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="bg-[#19222D] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#C6F10E] rounded-md flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-[#19222D] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#C6F10E] rounded-md flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-[#19222D] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#C6F10E] rounded-md flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill, index) => (
                  <span key={index} className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div className="bg-[#19222D] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#C6F10E] rounded-md flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">DevOps & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.devopsAndTools.map((skill, index) => (
                  <span key={index} className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-[#C6F10E]">Education</span></h2>
          <div className="space-y-8">
            <div className="bg-[#20293A] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold">Self-Taught Web Development</h3>
                <div className="bg-[#19222D] text-white text-sm px-4 py-1 rounded-full mt-2 md:mt-0">
                  2019 - Present
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Continuous learning through online resources, documentation, and open-source contributions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                  Self-Directed Learning
                </span>
                <span className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                  Online Documentation
                </span>
                <span className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                  Project-Based Learning
                </span>
              </div>
            </div>

            <div className="bg-[#20293A] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold">FreeCodeCamp Curriculum</h3>
                <div className="bg-[#19222D] text-white text-sm px-4 py-1 rounded-full mt-2 md:mt-0">
                  2022 - 2023
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Completed multiple certification paths in web development, including Responsive Web Design, JavaScript Algorithms and Data Structures, and Front End Development Libraries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                  Front End Development
                </span>
                <span className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                  React
                </span>
              </div>
            </div>

            <div className="bg-[#20293A] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold">Coursera Specializations</h3>
                <div className="bg-[#19222D] text-white text-sm px-4 py-1 rounded-full mt-2 md:mt-0">
                  2021 - 2022
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Completed specialized courses in Web Development and Programming from top universities and organizations on Coursera.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                  Full-Stack Web Development with React
                </span>
                <span className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                  Web Applications for Everybody
                </span>
                <span className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                  Server-side Development with Node.js
                </span>
              </div>
            </div>

            <div className="bg-[#20293A] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold">Dicoding Indonesia Academy</h3>
                <div className="bg-[#19222D] text-white text-sm px-4 py-1 rounded-full mt-2 md:mt-0">
                  2020 - 2021
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Completed various courses in web development fundamentals and programming principles.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                  Belajar Dasar Pemrograman Web
                </span>
                <span className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                  Fundamental Front-End Web Development
                </span>
                <span className="bg-[#2A3749] text-white px-3 py-1 rounded-full text-sm">
                  JavaScript Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey Timeline Section */}
      <section id="experience" className="py-16 md:py-24 bg-[#20293A]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-[#C6F10E]">Learning Journey</span></h2>
          <Timeline data={timelineData} />
        </div>
      </section>
      
      {/* Certificates Section */}
      <section id="certificates" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-[#C6F10E]">Certificates</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certificate 1 */}
            <div className="bg-[#20293A] p-5 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-[#19222D] rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src="/images/sertifikat/freecodecamp-responsive-web-design.jpg"
                  alt="Certificate - Responsive Web Design"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Responsive Web Design</h3>
              <p className="text-gray-400 text-sm mb-3">FreeCodeCamp</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Issued: June 2023</span>
                <a href="#" className="text-[#C6F10E] text-sm hover:underline">View Certificate</a>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="bg-[#20293A] p-5 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-[#19222D] rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src="/images/sertifikat/freecodecamp-javascript-algorithms-and-data-structures.jpg"
                  alt="Certificate - JavaScript"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">JavaScript Algorithms & Data Structures</h3>
              <p className="text-gray-400 text-sm mb-3">FreeCodeCamp</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Issued: August 2023</span>
                <a href="#" className="text-[#C6F10E] text-sm hover:underline">View Certificate</a>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="bg-[#20293A] p-5 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-[#19222D] rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src="/images/sertifikat/freecodecamp-backend-development-and-apis.jpg"
                  alt="Certificate - Backend Development"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Backend Development and APIs</h3>
              <p className="text-gray-400 text-sm mb-3">FreeCodeCamp</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Issued: October 2023</span>
                <a href="#" className="text-[#C6F10E] text-sm hover:underline">View Certificate</a>
              </div>
            </div>

            {/* Certificate 4 */}
            <div className="bg-[#20293A] p-5 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-[#19222D] rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src="/images/sertifikat/dicoding-dasar-pemrograman-javascript.jpg"
                  alt="Certificate - JavaScript Fundamentals"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dasar Pemrograman JavaScript</h3>
              <p className="text-gray-400 text-sm mb-3">Dicoding Indonesia</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Issued: May 2021</span>
                <a href="#" className="text-[#C6F10E] text-sm hover:underline">View Certificate</a>
              </div>
            </div>

            {/* Certificate 5 */}
            <div className="bg-[#20293A] p-5 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-[#19222D] rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src="/images/sertifikat/dicoding-belajar-backend-pemula-dengan-javascript.jpg"
                  alt="Certificate - Backend Fundamentals"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Backend Development with JavaScript</h3>
              <p className="text-gray-400 text-sm mb-3">Dicoding Indonesia</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Issued: December 2022</span>
                <a href="#" className="text-[#C6F10E] text-sm hover:underline">View Certificate</a>
              </div>
            </div>

            {/* Certificate 6 */}
            <div className="bg-[#20293A] p-5 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-[#19222D] rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src="/images/sertifikat/dicoding-belajar-dasar-cloud-dan-gen-ai-di-aws.jpg"
                  alt="Certificate - Cloud and AI"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cloud & GenAI Fundamentals</h3>
              <p className="text-gray-400 text-sm mb-3">Dicoding Indonesia</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Issued: February 2023</span>
                <a href="#" className="text-[#C6F10E] text-sm hover:underline">View Certificate</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-[#C6F10E]">Projects</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#20293A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="bg-[#19222D] text-white px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#C6F10E] hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#C6F10E] hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.387 4.33c-2.1 0-3.6 1.5-5.25 3-1.5-1.5-3-3-5.25-3-3.6 0-6 2.4-6 6.3 0 7.2 9.75 10.5 11.25 13.5 1.5-3 11.25-6.45 11.25-13.5 0-3.9-2.4-6.3-6-6.3zm-5.25 17.7c-2.25-3.9-10.5-6.6-10.5-11.4 0-2.7 1.5-4.5 4.5-4.5 2.25 0 3.6 1.5 5.25 3 1.65-1.5 3-3 5.25-3 3 0 4.5 1.8 4.5 4.5 0 4.8-8.25 7.5-9 11.4z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#20293A]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In <span className="text-[#C6F10E]">Touch</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <div className="bg-[#19222D] p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#C6F10E] rounded-md flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Email</h4>
                      <a href="mailto:contact@sabidzpro.is-a.dev" className="text-gray-400 hover:text-[#C6F10E]">contact@sabidzpro.is-a.dev</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#C6F10E] rounded-md flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Location</h4>
                      <p className="text-gray-400">Wonogiri, Central Java, Indonesia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#C6F10E] rounded-md flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Working Hours</h4>
                      <p className="text-gray-400">Monday - Friday: 9am - 5pm</p>
                      <p className="text-gray-400">Weekend: Available for urgent matters</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-lg font-medium mb-3">Social Profiles</h4>
                    <div className="flex space-x-3">
                      <a href="https://github.com/saifulabidin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C6F10E] hover:text-black bg-[#2A3749] text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href="https://linkedin.com/in/saiful-abidin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C6F10E] hover:text-black bg-[#2A3749] text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="https://twitter.com/syaifulosd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C6F10E] hover:text-black bg-[#2A3749] text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="https://instagram.com/itssabidz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C6F10E] hover:text-black bg-[#2A3749] text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="bg-[#19222D] p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#19222D] border-t border-[#2A3749]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-[#C6F10E] text-xl font-bold">Saiful Abidin</div>
              <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} All rights reserved</p>
              <p className="mt-1">Made with ❤️ using Next.js & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
