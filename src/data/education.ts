export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location: string;
  years: string;
  grade?: string;
  description: string;
  highlights?: string[];
}

export const educationData: EducationEntry[] = [
  {
    id: "edu-1",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "International Islamic University Chittagong (IIUC)",
    location: "Chittagong, Bangladesh",
    years: "2023 - Present",
    description:
      "Rigorous undergraduate curriculum focused on algorithmic foundations, data structures, relational database systems, operating systems, and distributed web architectures.",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, Computer Networks, Operating Systems.",
      "Active participant in competitive programming and collaborative software projects.",
    ],
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Chittagong Cantonment Public College",
    location: "Chittagong, Bangladesh",
    years: "2020 - 2022",
    grade: "Division: Science",
    description:
      "Higher secondary education with a major in Physics, Chemistry, Higher Mathematics, and Information & Communication Technology.",
    highlights: [
      "Strong foundation in calculus, linear algebra, analytical physics, and computer fundamentals.",
    ],
  },
];
