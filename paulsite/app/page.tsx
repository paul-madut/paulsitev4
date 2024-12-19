import Image from 'next/image'
import Link from 'next/link'
import Summary from './sections/left/Summary'
import { Github, ExternalLink } from 'lucide-react'
// Section imports
import Experience from './sections/right/Experience'
import Education from './sections/right/Education'
import Skills from './sections/right/Skills'
import Projects from './sections/right/Projects'

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
        <Education />
         
         
        </section>

        {/* Projects Section */}

        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Projects</h2>
        <Projects />
        </section>
      </div>
    </div>
  )
}

