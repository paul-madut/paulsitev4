import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin, File } from 'lucide-react'
import { PinContainer } from '@/components/ui/3d-pin'
import Navbar from '@/components/ui/Navbar'


function Summary() {
  return (
    <div className="relative lg:w-1/3 p-8 lg:fixed lg:h-screen overflow-y-hidden overflow-auto text-center lg:text-left h-[50rem] w-full bg-black bg-grid-white/[0.2]">
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

        <div className="mb-8 text-center">
          <h3 className="text-xl font-semibold mb-2">About Me</h3>
          <p className="text-gray-300">
            Passionate software engineer with 7+ years of experience in building scalable web applications. Specialized
            in full-stack development with a focus on cloud technologies and microservices architecture.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="https://github.com/paul-madut" className="text-gray-300 hover:text-purple-300">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/paul-madut/" className="text-gray-300 hover:text-purple-300">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:pmadut2003@gmail.com" className="text-gray-300 hover:text-purple-300">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </Link>
          <Link href="/paul-madut-resume.pdf" className="text-gray-300 hover:text-purple-300">
            <File size={24} />
            <span className="sr-only">Resume</span>
          </Link>
        </div>

        <h1 className='text-2xl font-bold mt-4 text-center pt-8'> Check out my latest video!</h1>

        <div className="h-[40rem] w-full flex items-start pt-4 justify-center ">
      <PinContainer
        title="https://www.youtube.com/@paultheprogrammer1001"
        href="https://www.youtube.com/watch?v=zil06vCBS6Y"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Paul The Programmer
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Hot new coding video out now!
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4" >
              <Image
                src="https://i.ytimg.com/an_webp/tQuIk82T3X4/mqdefault_6s.webp?du=3000&sqp=COqdjrsG&rs=AOn4CLB70IEgdTGEGM0OYxxfU-XghTaprw"
                alt="Profile Picture"
                width={100}
                height={'100'}
                
                className="rounded-md bg-cover h-full w-full"
              />
          </div>
        </div>
      </PinContainer>
    </div>
      </div>
    </div>
  )
}

export default Summary
