'use client';

import Image from "next/image";

export default function AboutSection() {
  return (
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
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Hello! I'm <span className="text-[#C6F10E]">Saiful Abidin</span>
              </h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  A passionate <strong className="text-[#C6F10E]">Full Stack Developer</strong> from Indonesia with over 5 years of experience in creating digital solutions. Currently working at <strong className="text-[#C6F10E]">PT. Infinity Blessing Indonesia</strong>, where I develop comprehensive applications ranging from employee management systems to sales platforms.
                </p>
                <p>
                  My journey started as a self-taught developer, and I've evolved into a versatile professional skilled in both <strong className="text-[#C6F10E]">frontend and backend development</strong>, as well as <strong className="text-[#C6F10E]">mobile app development using Flutter</strong>.
                </p>
                <p>
                  I specialize in modern technologies including <strong className="text-[#C6F10E]">React, Next.js, Node.js, and Flutter</strong>, with experience in building scalable applications that serve real business needs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="text-[#C6F10E] font-semibold mb-2">Current Focus</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Full Stack Development</li>
                    <li>• Mobile App Development</li>
                    <li>• Enterprise Applications</li>
                    <li>• API Development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#C6F10E] font-semibold mb-2">Personal Info</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Based in Indonesia</li>
                    <li>• 5+ Years Experience</li>
                    <li>• Self-taught Developer</li>
                    <li>• Open to Opportunities</li>
                  </ul>
                </div>
              </div>
              <div className="pt-6">
                <a 
                  href="/CV-SaifulAbidin.pdf" 
                  download 
                  className="bg-[#C6F10E] hover:bg-[#a5c70c] text-black py-3 px-6 rounded-md font-medium transition-colors inline-flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7,10 12,15 17,10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
