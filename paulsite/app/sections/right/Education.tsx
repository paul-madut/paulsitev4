import React from "react";
import { EducationCard } from "@/components/ui/education-card";

function Education() {
  return (
    <div className="mb-12 mx-12 grid grid-cols-1 md:grid-cols-2 gap-4">
      <EducationCard
        degree="Bachelor of Computer Science"
        institution="Carleton University"
        location="Ottawa, ON, Canada"
        period="December 2025 (Expected)"
        logoUrl="https://ires.ubc.ca/files/2020/08/carleton-university-boot-camp-logo.png"
        units={[
          "Fundamentals of Web Applications",
          "Introduction to Systems Engineering",
          "Data Structures and Algorithms",
        ]}
      />

      <EducationCard
        degree="Extra-Curricular"
        institution="Self Learning"
        location="Online"
        period="Ongoing Forever"
        logoUrl="https://static.vecteezy.com/system/resources/previews/007/876/557/non_2x/self-learning-icon-style-free-vector.jpg"
        units={[
          "Structure and Interpretation of Computer Programs (MIT 1986)",
          "Next.js and React - The Complete Guide (Udemy)",
          "CS50 (Harvard Online 2022)",
        ]}
      />
    </div>
  );
}

export default Education;
