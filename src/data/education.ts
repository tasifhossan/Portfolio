export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location: string;
  years: string;
  grade: string;
  description: string;
  highlights?: string[];
}

export const educationData: EducationEntry[] = [
  {
    id: "edu-1",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "International Islamic University Chittagong (IIUC)",
    location: "Chittagong, Bangladesh",
    // [YEARS] placeholder
    years: "[YEARS] 2023 - Now",
    // [CGPA] placeholder
    grade: "[CGPA] CGPA: 3.80 / 4.00",
    description:
      "[EDIT ME] Rigorous curriculum focused on software engineering principles, algorithms, data structures, relational database systems, and computer networks.",
    highlights: [
      "[EDIT ME] Core Coursework: Distributed Systems, Database Management Systems, Object-Oriented Programming, Operating Systems.",
      "[EDIT ME] Active member of the university programming contest club and technical student chapters.",
    ],
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC) — Science",
    // [INSTITUTION] placeholder
    institution: "Chattogram Cantonment Public College",
    location: "Chittagong, Bangladesh",
    // [YEARS] placeholder
    years: "2020 - 2022",
    // [GPA] placeholder
    grade: "[GPA] GPA: 5.00 / 5.00",
    description:
      "[EDIT ME] Higher secondary education with a major in Physics, Chemistry, Higher Mathematics, and Information & Communication Technology.",
    highlights: [
      "[EDIT ME] Graduated with honors in science stream with focus on mathematical problem solving.",
    ],
  },
];
