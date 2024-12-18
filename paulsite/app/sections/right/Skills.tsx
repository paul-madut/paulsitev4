"use client"
import React from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect'

function Skills() {
    
    const projects = [
        {
          title: "Languages",
          description: "Java \n JavaScript/TypeScript \nPython \nC++",
          link: "#",
        },
        {
          title: "Frameworks",
          description: 'React \n Next.js \n Express \n Django',
          link: "#",
        },
        {
          title: "Databases",
          description:
          "Postgresql \n MongoDB \n Redis \nFirebase",
          link: "#",
        },
        {
            title: "Backend",
            description:
            "Node.js \n GraphQL \n REST APIs",
            link: "#",
        },
        {
            title: "Cloud",
            description:
            "Aws \n Docker \n Kubernetes",
            link: "#",
        },
        {
            title: "Tools",
            description:
            "Git \n Jest \n CI/CD",
            link: "#",
        },]
        return (

    <div className="max-full mx-auto px-8">
    <HoverEffect items={projects} />
  </div>
  )
}

export default Skills