import Image from 'next/image'
import Link from 'next/link'
import Summary from './sections/left/Summary'
import { Github, ExternalLink } from 'lucide-react'
// Section imports
import Experience from './sections/right/Experience'
import Skills from './sections/right/Skills'

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white">
      {/* Left Side - Static Summary */}
      
      <Summary />

      {/* Right Side - Scrollable Detailed Resume */}
      <div className="lg:w-2/3 lg:ml-[33.333333%] p-8">
        {/* Skills Section */}
        <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Skills</h2>
        <Skills />
         
        </section>



        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Experience</h2>
          
        <Experience />
          
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Education</h2>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="University Logo"
                width={40}
                height={40}
                className="mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-400">University of Technology</p>
              </div>
            </div>
            <p className="text-gray-300">Graduated: May 2017</p>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce solution with real-time inventory management."
              technologies={['React', 'Node.js', 'MongoDB', 'WebSockets']}
              demoLink="https://example.com/demo"
              codeLink="https://github.com/example/project"
            />
            <ProjectCard
              title="Task Management App"
              description="A Kanban-style task management application with team collaboration features."
              technologies={['Vue.js', 'Express', 'PostgreSQL', 'Socket.io']}
              demoLink="https://example.com/demo"
              codeLink="https://github.com/example/project"
            />
          </div>
        </section>
      </div>
    </div>
  )
}


function ExperienceItem({ company, role, period, responsibilities }) {
  return (
    <div className="mb-6 bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-purple-400">{role}</h3>
      <p className="text-gray-400 mb-2">
        {company} | {period}
      </p>
      <ul className="list-disc list-inside text-gray-300">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({ title, description, technologies, demoLink, codeLink }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2 text-purple-400">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold mb-2 text-purple-400">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex space-x-4">
        <Link
          href={demoLink}
          className="flex items-center text-purple-400 hover:text-purple-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={18} className="mr-1" />
          Demo
        </Link>
        <Link
          href={codeLink}
          className="flex items-center text-purple-400 hover:text-purple-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} className="mr-1" />
          Code
        </Link>
      </div>
    </div>
  )
}