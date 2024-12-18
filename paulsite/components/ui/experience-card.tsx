import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
  technologies: string[]
  logoUrl: string
}

export function ExperienceCard({
  title,
  company,
  location,
  period,
  responsibilities,
  technologies,
  logoUrl,
}: ExperienceCardProps) {
  return (
    <div className="relative pb-8">
      <Card className="p-6 bg-black border-gray-800 text-white">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Image
              src={logoUrl}
              alt={`${company} logo`}
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400">
              {company}, {location}
            </p>
            <p className="text-sm text-gray-500 mb-4">{period}</p>
            
            <ul className="space-y-2 mb-4">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="text-sm text-gray-300">
                  • {responsibility}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-emerald-900 text-emerald-300 hover:bg-emerald-800">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

