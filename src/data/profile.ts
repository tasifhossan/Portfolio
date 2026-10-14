export interface Profile {
  name: string;
  title: string;
  headline: string;
  valueProposition: string;
  bio: string;
  yearsOfExperience: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  journey: {
    title: string;
    description: string;
  }[];
  whatIBuild: {
    title: string;
    description: string;
    icon: string;
  }[];
  strengths: {
    title: string;
    description: string;
  }[];
  now: {
    building: string;
    learning: string;
    openTo: string;
  };
  hobbies: string[];
  milestones: {
    year: string;
    title: string;
    description: string;
  }[];
}

export const profileData: Profile = {
  name: "Mohammad Tasif Hossan",
  title: "Full-Stack Developer",
  headline: "Building Scalable Backend Systems & High-Performance Web Applications",
  valueProposition:
    "I engineer resilient backend architectures, clean RESTful APIs, and fast, accessible web applications designed for scale.",
  bio: "Hi, I'm Tasif—a full-stack developer engineering resilient backend architectures and high-performance web applications with Node.js, TypeScript, PostgreSQL, and Next.js.",
  yearsOfExperience: "3+ Years of Professional Experience",
  location: "Chittagong, Bangladesh",
  availability: "Available for full-time engineering roles & contract consulting",
  email: "tasifhossan@gmail.com",
  phone: "+880 1800-000000",
  whatsappNumber: "8801800000000",
  githubUrl: "https://github.com/tasifhossan",
  linkedinUrl: "https://linkedin.com/in/tasifhossan",
  resumeUrl: "/resume-tasif.pdf",

  // Concise personality & engineering focus points
  journey: [
    {
      title: "Engineering Roots",
      description:
        "[EDIT ME] Grounded in distributed networks and foundational algorithms, matured into production full-stack systems with TypeScript and relational databases.",
    },
    {
      title: "Core Focus",
      description:
        "[EDIT ME] Architecting idempotent REST APIs, tuning PostgreSQL query indexes, and crafting type-safe Next.js frontends.",
    },
    {
      title: "Beyond Code",
      description:
        "[EDIT ME] System design whitepapers, homelab infrastructure experiments, chess tactics, and developer mentorship.",
    },
  ],

  whatIBuild: [
    {
      title: "Resilient Backend Architectures",
      description:
        "High-throughput APIs, microservices, and database models designed for reliability, concurrency, and low latency using Node.js, Express, and PostgreSQL.",
      icon: "Server",
    },
    {
      title: "Full-Stack SaaS Applications",
      description:
        "Multi-tenant architectures, secure role-based access control (RBAC), subscription billing, and real-time operational platforms.",
      icon: "Layers",
    },
    {
      title: "High-Performance Modern Web Apps",
      description:
        "Server-rendered Next.js applications styled with Tailwind CSS, built with strict TypeScript and optimized for Core Web Vitals.",
      icon: "Layout",
    },
    {
      title: "DevOps & Cloud Deployments",
      description:
        "Automated CI/CD pipelines, containerization, edge functions, and zero-downtime deployments on Vercel, Render, and Railway.",
      icon: "Cloud",
    },
  ],
  strengths: [
    {
      title: "Pragmatic System Design",
      description:
        "Architecting clean, modular systems with clear domain boundaries, schema validation, and predictable error handling.",
    },
    {
      title: "Relational Database Precision",
      description:
        "Designing normalized schemas, writing indexed SQL queries, managing migrations, and preventing N+1 performance bottlenecks.",
    },
    {
      title: "API Security & Reliability",
      description:
        "Implementing JWT/OAuth authentication, sliding-window rate limiting, honeypot spam protection, and idempotent operations.",
    },
    {
      title: "End-to-End Ownership",
      description:
        "Taking features from initial data modeling and architecture through API endpoints, responsive UI, testing, and cloud deployment.",
    },
  ],
  now: {
    building: "[EDIT ME] High-throughput backend systems, developer tooling, and modular Next.js applications.",
    learning: "[EDIT ME] Advanced distributed consensus, event-driven streaming, and low-latency database replication.",
    openTo: "Available for full-time full-stack / backend engineering roles & architectural consulting.",
  },
  hobbies: [
    "Distributed Systems",
    "Homelab Infrastructure",
    "Open Source Tooling",
    "Chess Strategy",
    "System Design Whitepapers",
    "Mechanical Keyboards",
  ],
  milestones: [
    {
      year: "[EDIT ME] 2022",
      title: "[EDIT ME] Full-Stack Foundations",
      description: "[EDIT ME] Mastered modern TypeScript, React component lifecycles, and relational database paradigms.",
    },
    {
      year: "[EDIT ME] 2023",
      title: "[EDIT ME] Production Architectures",
      description: "[EDIT ME] Engineered production-ready microservices, implemented caching tiers, and streamlined database indexes.",
    },
    {
      year: "[EDIT ME] 2024",
      title: "[EDIT ME] High-Concurrency Systems",
      description: "[EDIT ME] Shipped scalable full-stack applications with rate limiting, secure authentication, and CI/CD pipelines.",
    },
    {
      year: "[EDIT ME] 2025 – Present",
      title: "[EDIT ME] Architectural Focus",
      description: "[EDIT ME] Delivering resilient APIs, full-stack enterprise solutions, and high-performance developer experiences.",
    },
  ],
};
