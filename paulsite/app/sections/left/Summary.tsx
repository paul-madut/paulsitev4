import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

function Summary() {
  return (
    <div className="relative lg:w-1/3 p-8 lg:fixed lg:h-screen overflow-auto text-center lg:text-left h-[50rem] w-full bg-black bg-grid-white/[0.2]">
      {/* SVG and Gradient Background */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-8">
          <Image
            src="https://media.licdn.com/dms/image/v2/D5603AQGhtkoEslrkGA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1686262856068?e=1740009600&v=beta&t=qlWEDrnGI9L_gvRMgQZ5cakNtUQ_OxISUZMQdbj5ESk"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mx-auto"
          />
          <h1 className="text-3xl font-bold mt-4 text-center">Paul Madut</h1>
          <h2 className="text-xl text-gray-400 text-center">Software Engineer</h2>
          <div className="flex items-center justify-center mt-2">
            <MapPin size={18} className="text-gray-400 mr-2" />
            <span className="text-gray-400">Ottawa, Ontario</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p className="text-gray-300">
            Passionate software engineer with 7+ years of experience in building scalable web applications. Specialized
            in full-stack development with a focus on cloud technologies and microservices architecture.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="https://github.com" className="text-gray-300 hover:text-purple-300">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/paul-madut/" className="text-gray-300 hover:text-purple-300">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:jane@example.com" className="text-gray-300 hover:text-purple-300">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Summary
