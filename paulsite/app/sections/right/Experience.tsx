import React from "react";
import Image from "next/image";
import { Timeline } from "../../../components/ui/timeline";
import { ExperienceCard } from "@/components/ui/experience-card";
import { h1 } from "framer-motion/client";
function Experience() {
  const data = [
    {
      title: "December 2024 - Present",
      content: (
        <ExperienceCard
          title="Backend Developer"
          company="EB Digital Inc."
          location="Ottawa ON, Canada"
          period=""
          logoUrl="https://www.ebdigital.net/images/computerscreen-removebg-preview.png"
          responsibilities={[
            "Developed backend logic for 'Tradeful,' a trading journal application, using NestJS framework.",
            "Integrated TradingView API to support real-time charting and data visualization within the application.",
            "Implemented robust backend services and APIs to handle user data, trades, and analytics.",
            "Collaborated with the frontend team to ensure seamless communication between the frontend and backend systems.",
            "Optimized backend performance and scalability to handle large datasets and concurrent requests.",
          ]}
          technologies={[
            "NextJS",
            "Supabase",
            "NestJs",
          ]}
        />
      ),
    },
    {
      title: "September 2023 - December 2024",
      content: (
        <div>
          <ExperienceCard
            title="Frontend Developer"
            company="One of One Funding"
            location="Ottawa, ON, Canada"
            period="April 2024"
            logoUrl="https://oneofonefunding.com/wp-content/uploads/2023/08/1-of-1-Funding-FIX-04-1-1-1024x512.png"
            responsibilities={[
              "Built a dynamic homepage component using React, boosting user interaction by 30% for a company generating over $1 million in monthly revenue.",
              "Collaborated with design and backend teams to ensure seamless UI/UX.",
            ]}
            technologies={["Javascript","Wordpress"]}
          />
        </div>
      ),
    },
    {
      title: "July 2023 - August 2024",
      content: (
        <div>
          <ExperienceCard
            title="IT Service Desk"
            company="Parks Canada"
            location="Gatineau, QC, Canada"
            period="July 2023 – August 2024"
            logoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIp57G0-Idxy5M_Rwn9Mj1azgNkf-ZdRqf5g&s"
            responsibilities={[
              "Automated workflows using JavaScript and Jira’s API, improving efficiency in handling customer complaints.",
              "Found creative solutions to administrative challenges, including software and hardware integration.",
            ]}
            technologies={["JavaScript", "Jira API"]}
          />
        </div>
      ),
    },
    {
      title: "May 2023 - June 2023",
      content: (
        <ExperienceCard
          title="Lead Developer"
          company="Flockstreet"
          location="Remote"
          period="September 2023 – July 2024"
          logoUrl="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8bf6ffd9e775d38f7387562c7df77ee5~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=23648&refresh_token=c4bfd630f49b7b6391dd0038b4f49590&x-expires=1734717600&x-signature=o%2FZOOtCRNdmCQeyctyTLxWfo7Wk%3D&shp=a5d48078&shcp=81f88b70"
          responsibilities={[
            "Developed a finance-focused social media platform using Django and HTMX, engaging 1500+ active users.",
            "Designed and showcased functional prototypes for Bank of Montreal, National Bank, and Investment Planning Council Canada, fostering potential partnerships.",
          ]}
          technologies={["Django", "HTMX"]}
        />
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default Experience;
