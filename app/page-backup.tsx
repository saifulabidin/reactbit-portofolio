'use client';

import Image from "next/image";
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

  // Work Experience timeline data (updated from learning journey)
  const workExperienceData = [
    {
      title: "2020 - 2022",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#C6F10E]">Self-Taught Developer Journey</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Began my journey into web development through intensive self-study, online courses, and hands-on practice with various technologies.
          </p>
          <div className="mb-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Dicoding Indonesia Academy</strong> - Completed fundamental and advanced web development courses
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Built first portfolio website</strong> using vanilla HTML, CSS, and JavaScript
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Learned core technologies</strong> - JavaScript, React, Node.js, databases
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Established strong foundation</strong> in computer science principles and best practices
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#C6F10E]">Junior Full Stack Developer</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Started professional development career by contributing to open-source projects and building personal projects while completing advanced certifications.
          </p>
          <div className="mb-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Completed FreeCodeCamp curriculum</strong> - 1,800+ hours of coding challenges and projects
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Built 20+ projects</strong> including 5 major full-stack applications
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Contributed to 3 open-source projects</strong> with over 100 GitHub contributions
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Mastered MERN stack</strong> and modern development practices
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2025",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#C6F10E]">Freelance Full Stack Developer</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Worked as a freelance developer, creating custom web applications and solutions for various clients across different industries while expanding skills into mobile development.
          </p>
          <div className="mb-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Developed 15+ web applications</strong> using modern technologies like React, Next.js, and Node.js
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Client satisfaction rate of 98%</strong> with timely delivery and quality code
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Built scalable APIs</strong> serving 10,000+ daily requests
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Expanded into mobile development</strong> learning Flutter and Dart for cross-platform apps
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 - Present",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-[#C6F10E]">Full Stack Developer - PT. Infinity Blessing</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Currently working as a versatile developer handling backend, frontend, and mobile development using Flutter. Responsible for building comprehensive digital solutions across multiple platforms.
          </p>
          <div className="mb-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Backend Development</strong> - Building robust APIs and server-side applications
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Frontend Development</strong> - Creating responsive and interactive user interfaces
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Mobile Development</strong> - Developing cross-platform mobile apps with Flutter & Dart
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
              ✅ <strong>Full-Stack Solutions</strong> - Delivering end-to-end digital products for business needs
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-r from-[#C6F10E]/20 to-[#19222D]/50 p-4 rounded-lg border border-[#C6F10E]/30">
              <h4 className="text-[#C6F10E] font-semibold mb-2">Current Role Highlights</h4>
              <ul className="text-neutral-300 text-xs md:text-sm space-y-1">
                <li>• Multi-platform development expertise</li>
                <li>• Cross-functional team collaboration</li>
                <li>• Modern development stack implementation</li>
                <li>• Agile development methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // ==================== ARCHIVED PROJECTS ====================
  // Previous projects from learning journey and freelance work
  // These projects are archived but represent significant learning milestones:
  // 1. BalanceScan - Cryptocurrency Portfolio Tracker (Full Stack)
  // 2. Book Trading Club - Community Platform (Full Stack) 
  // 3. Cuaca Ceria - Weather Forecast App (Full Stack)
  // 4. Fake Pinterest - Image Sharing Platform (Full Stack)
  // 5. Nightlife Coordination App (Full Stack)
  // 6. Stock Market Tracker - Full Stack
  // 7. Voting App - Democratic Decision Making (Full Stack)
  // 8. 25+5 Clock - Pomodoro Timer (Frontend)
  // 9. JavaScript Calculator - Advanced Calculator (Frontend)
  // 10. Markdown Previewer - Live Editor (Frontend)
  // 11. Random Quote Machine - Inspiration Hub (Frontend)
  // 12. Drum Machine - Music Maker (Frontend)
  // ============================================================

  // Current Company Projects - PT. Infinity Blessing
  const projects = [
    // Employee Attendance System Projects
    {
      title: "Employee Attendance Backend System",
      description: "Comprehensive backend system for employee attendance management with real-time tracking, shift management, overtime calculation, and detailed reporting. Features role-based authentication and integration with biometric devices.",
      techStack: ["Node.js", "Express", "PostgreSQL", "JWT", "Redis", "Cron Jobs", "RESTful API", "Docker"],
      imageUrl: "/images/project/company/attendance-backend.jpg",
      githubUrl: "#private-repository",
      liveUrl: "#company-internal",
      category: "Backend",
      featured: true
    },
    {
      title: "Attendance Mobile App API",
      description: "RESTful API service specifically designed for the Flutter mobile attendance application. Handles GPS location tracking, photo capture validation, real-time synchronization, and offline data management.",
      techStack: ["Node.js", "Express", "MongoDB", "Socket.io", "Google Maps API", "Firebase", "JWT"],
      imageUrl: "/images/project/company/attendance-api.jpg", 
      githubUrl: "#private-repository",
      liveUrl: "#company-internal",
      category: "API",
      featured: true
    },
    {
      title: "Attendance Admin Panel",
      description: "Web-based administrative dashboard for HR and management to monitor employee attendance, generate reports, manage shifts, approve leave requests, and configure system settings with comprehensive analytics.",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "React Query", "Zustand"],
      imageUrl: "/images/project/company/attendance-admin.jpg",
      githubUrl: "#private-repository", 
      liveUrl: "#company-internal",
      category: "Frontend",
      featured: true
    },
    {
      title: "Employee Attendance Mobile App",
      description: "Cross-platform mobile application built with Flutter for employee clock-in/out, GPS location tracking, photo verification, leave requests, attendance history, and real-time notifications.",
      techStack: ["Flutter", "Dart", "Provider", "HTTP", "Geolocator", "Camera", "Local Storage", "Firebase"],
      imageUrl: "/images/project/company/attendance-mobile.jpg",
      githubUrl: "#private-repository",
      liveUrl: "#company-internal", 
      category: "Mobile",
      featured: true
    },
    
    // Sales Management System Projects
    {
      title: "Sales Data Collection Backend",
      description: "Backend system for sales team to input and manage customer data collected in the field. Features geolocation tracking, customer relationship management, lead scoring, and territory management with Google Maps integration.",
      techStack: ["Node.js", "Express", "MongoDB", "Google Maps API", "Geolocation", "JWT", "Multer", "Redis"],
      imageUrl: "/images/project/company/sales-backend.jpg",
      githubUrl: "#private-repository",
      liveUrl: "#company-internal",
      category: "Backend", 
      featured: false
    },
    {
      title: "Sales Management API",
      description: "Specialized API for the Flutter sales application enabling real-time customer data synchronization, location-based services, photo uploads, and offline-first architecture for field operations.",
      techStack: ["Node.js", "Express", "MongoDB", "Google Maps API", "Cloudinary", "Socket.io", "JWT"],
      imageUrl: "/images/project/company/sales-api.jpg",
      githubUrl: "#private-repository", 
      liveUrl: "#company-internal",
      category: "API",
      featured: true
    },
    {
      title: "Sales Performance Admin Dashboard",
      description: "Comprehensive admin panel for monitoring sales team performance, analyzing customer data, tracking territories, generating sales reports, and visualizing key performance indicators with interactive charts.",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Google Maps", "React Query"], 
      imageUrl: "/images/project/company/sales-admin.jpg",
      githubUrl: "#private-repository",
      liveUrl: "#company-internal",
      category: "Frontend",
      featured: true
    },
    {
      title: "Sales Field Mobile Application",
      description: "Flutter-based mobile app for sales representatives to input customer data, capture geotagged photos, record customer interactions, manage leads, and sync data in real-time while working in the field.",
      techStack: ["Flutter", "Dart", "Provider", "Geolocator", "Camera", "Google Maps", "HTTP", "SQLite"],
      imageUrl: "/images/project/company/sales-mobile.jpg", 
      githubUrl: "#private-repository",
      liveUrl: "#company-internal",
      category: "Mobile",
      featured: true
    },

    // Marketing Project
    {
      title: "Bestie Tissue Landing Page",
      description: "Modern and responsive landing page for Bestie Tissue product featuring AI-powered chatbot integration with Google Gemini, interactive store locator with Google Maps, product showcase, and lead generation forms.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API", "Google Gemini AI", "Framer Motion", "React Hook Form"],
      imageUrl: "/images/project/company/bestie-tissue.jpg",
      githubUrl: "#private-repository",
      liveUrl: "https://bestie-tissue.com",
      category: "Frontend",
      featured: true
    }
  ];

  // Skills data
  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express", "Laravel", "Python", "FastAPI", "RESTful API"],
    mobile: ["Flutter", "Dart", "Android", "iOS", "Cross-platform Development"],
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
              <a href="#skills" className="text-white hover:text-[#C6F10E] transition-colors">Skills</a>
              <a href="#education" className="text-white hover:text-[#C6F10E] transition-colors">Education</a>
              <a href="#experience" className="text-white hover:text-[#C6F10E] transition-colors">Experience</a>
              <a href="#projects" className="text-white hover:text-[#C6F10E] transition-colors">Projects</a>
              <a href="#certificates" className="text-white hover:text-[#C6F10E] transition-colors">Certificates</a>
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
                      texts={['Freelance', 'Full-time Job', 'Collaboration', 'Mobile Development']}
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                  <a href="https://linkedin.com/in/saiful-abidin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C6F10E] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href="https://twitter.com/syaifulosd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C6F10E] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </a>
                  <a href="https://instagram.com/itssabidz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C6F10E] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
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

            {/* Mobile */}
            <div className="bg-[#19222D] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#C6F10E] rounded-md flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Mobile</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.mobile.map((skill, index) => (
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
            <div className="bg-[#19222D] p-6 rounded-lg shadow-lg md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#C6F10E] rounded-md flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.33c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
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
                <h3 className="text-xl font-semibold">Dicoding Indonesia Academy</h3>
                <div className="bg-[#19222D] text-white text-sm px-4 py-1 rounded-full mt-2 md:mt-0">
                  2020 - 2021
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Started my formal learning journey with comprehensive courses in web development fundamentals and programming principles.
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

            <div className="bg-[#20293A] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold">Coursera Specializations</h3>
                <div className="bg-[#19222D] text-white text-sm px-4 py-1 rounded-full mt-2 md:mt-0">
                  2021 - 2022
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Advanced my knowledge through specialized courses in Web Development and Programming from top universities and organizations.
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
                <h3 className="text-xl font-semibold">Self-Taught Web Development</h3>
                <div className="bg-[#19222D] text-white text-sm px-4 py-1 rounded-full mt-2 md:mt-0">
                  2022 - Present
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Continuous learning through online resources, documentation, open-source contributions, and staying updated with the latest web technologies and best practices.
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
          </div>
        </div>
      </section>

      {/* Work Experience Timeline Section (updated from Learning Journey) */}
      <section id="experience" className="py-16 md:py-24 bg-[#20293A]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Work <span className="text-[#C6F10E]">Experience</span></h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Showcase of my professional journey and the various projects I've worked on.
            From self-taught beginnings to delivering complex full-stack solutions for clients worldwide.
          </p>
          <Timeline data={workExperienceData} />
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

      {/* Projects Section - Updated with comprehensive project showcase */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">My <span className="text-[#C6F10E]">Projects</span></h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            A showcase of my professional work and current projects I'm developing at PT. Infinity Blessing Indonesia, 
            featuring enterprise-level applications, mobile development, and innovative business solutions.
          </p>

          {/* My Current Work in PT. Infinity Blessing Indonesia */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center"> My Current Work in PT. Infinity Blessing Indonesia</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <div key={index} className="bg-[#20293A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-[#C6F10E] text-black px-2 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="bg-[#19222D] text-white px-3 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="bg-[#19222D] text-gray-400 px-2 py-1 rounded-full text-xs">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#C6F10E] hover:text-white transition-colors"
                          title="View Source Code"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#C6F10E] hover:text-white transition-colors"
                          title="View Live Demo"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15,3 21,3 21,9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">🖥️ Backend Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(project => project.category === "Backend").map((project, index) => (
                <div key={index} className="bg-[#20293A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300">
                  <div className="h-40 overflow-hidden relative">
                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-[#C6F10E] text-black px-2 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="bg-[#19222D] text-[#C6F10E] px-2 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="bg-[#19222D] text-gray-400 px-2 py-1 rounded-full text-xs">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C6F10E] hover:text-white transition-colors"
                        title="View Source Code"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C6F10E] hover:text-white transition-colors"
                        title="View Live Demo"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15,3 21,3 21,9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More Projects Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/saifulabidin?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-[#C6F10E] hover:text-black text-[#C6F10E] border-2 border-[#C6F10E] py-3 px-8 rounded-md font-medium transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>View All Projects on GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
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
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a href="https://linkedin.com/in/saiful-abidin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C6F10E] hover:text-black bg-[#2A3749] text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="https://twitter.com/syaifulosd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C6F10E] hover:text-black bg-[#2A3749] text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="https://instagram.com/itssabidz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#C6F10E] hover:text-black bg-[#2A3749] text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
