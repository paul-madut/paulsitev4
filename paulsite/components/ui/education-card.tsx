'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

interface EducationCardProps {
  degree: string
  institution: string
  location: string
  period: string
  logoUrl: string
  units?: string[]
}

export function EducationCard({
  degree,
  institution,
  location,
  period,
  logoUrl,
  units = [],
}: EducationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative pb-8">
      <Card className="p-6 bg-black border-gray-800 text-white">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Image
              src={logoUrl}
              alt={`${institution} logo`}
              width={64}
              height={64}
              className="rounded-full bg-white"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-white">{degree}</h3>
            <p className="text-gray-400">
              {institution}, {location}
            </p>
            <p className="text-sm text-gray-500 mb-4">{period}</p>
            
            {units.length > 0 && (
              <div>
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white p-0"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  View Units {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>
                
                {isExpanded && (
                  <div className="mt-4 space-y-2">
                    {units.map((unit, index) => (
                      <p key={index} className="text-sm text-gray-300">
                        • {unit}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}

