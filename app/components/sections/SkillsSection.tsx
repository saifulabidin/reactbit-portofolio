'use client';

import Image from "next/image";

interface SkillsData {
  frontend: string[];
  backend: string[];
  mobile: string[];
  database: string[];
  devopsAndTools: string[];
}

const skills: SkillsData = {
  frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  backend: ["Node.js", "Express", "Laravel", "Python", "FastAPI", "RESTful API"],
  mobile: ["Flutter", "Dart", "Android", "iOS", "Cross-platform Development"],
  database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
  devopsAndTools: ["Git", "GitHub", "VS Code", "Docker", "Webpack", "AWS", "Vercel", "Figma", "Postman"]
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-[#20293A]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-[#C6F10E]">Skills</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Categories */}
          <div className="space-y-8">
            {/* Frontend */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#C6F10E]">Frontend Development</h3>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="bg-[#19222D] text-white px-4 py-2 rounded-full text-sm hover:bg-[#C6F10E] hover:text-black transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#C6F10E]">Backend Development</h3>
              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="bg-[#19222D] text-white px-4 py-2 rounded-full text-sm hover:bg-[#C6F10E] hover:text-black transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#C6F10E]">Mobile Development</h3>
              <div className="flex flex-wrap gap-3">
                {skills.mobile.map((skill, index) => (
                  <span key={index} className="bg-[#19222D] text-white px-4 py-2 rounded-full text-sm hover:bg-[#C6F10E] hover:text-black transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#C6F10E]">Database & Storage</h3>
              <div className="flex flex-wrap gap-3">
                {skills.database.map((skill, index) => (
                  <span key={index} className="bg-[#19222D] text-white px-4 py-2 rounded-full text-sm hover:bg-[#C6F10E] hover:text-black transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & Tools */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#C6F10E]">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.devopsAndTools.map((skill, index) => (
                  <span key={index} className="bg-[#19222D] text-white px-4 py-2 rounded-full text-sm hover:bg-[#C6F10E] hover:text-black transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Logos */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center text-[#C6F10E]">Technologies I Use</h3>
            <div className="grid grid-cols-4 gap-6">
              {[
                { name: "HTML5", logo: "/images/logo/html 1.png" },
                { name: "CSS3", logo: "/images/logo/css.png" },
                { name: "JavaScript", logo: "/images/logo/javascript.png" },
                { name: "React", logo: "/images/logo/react.png" },
                { name: "Bootstrap", logo: "/images/logo/Bootstrap_logo 1.png" },
                { name: "Git", logo: "/images/logo/git.png" },
                { name: "Figma", logo: "/images/logo/figma.png" }
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-white rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-300 mt-2 group-hover:text-[#C6F10E] transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
