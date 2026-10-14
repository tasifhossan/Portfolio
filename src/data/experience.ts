export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Full-time" | "Contract" | "Internship";
  summary: string;
  achievements: string[];
  techStack: string[];
}

export const experienceData: {
  sectionTitle: string;
  sectionSubtitle: string;
  entries: ExperienceEntry[];
} = {
  sectionTitle: "Experience",
  sectionSubtitle: "Professional engineering history, internships, and collaborative software projects",
  // Empty array by default as requested. Add your verified roles here.
  entries: [
    /*
    Example Entry:
    {
      id: "exp-1",
      role: "Software Engineering Intern / Developer",
      company: "[COMPANY NAME]",
      location: "Dhaka / Remote",
      period: "2024 - Present",
      type: "Full-time",
      summary: "Developed full-stack web applications and API endpoints.",
      achievements: [
        "Built responsive client portals using Next.js and Tailwind CSS.",
        "Engineered REST APIs with Node.js and PostgreSQL."
      ],
      techStack: ["Node.js", "TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS"]
    }
    */
  ],
};
