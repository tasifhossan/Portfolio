export interface Skill {
  name: string;
  description: string;
  iconName: string;
  // Numerical proficiency percentage (0 - 100), marked [EDIT ME]
  level: number;
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    category: "Backend",
    description: "Server-side logic, API development, and distributed systems",
    icon: "Server",
    skills: [
      { name: "Node.js", description: "Event-driven runtime for scalable microservices", iconName: "Terminal", level: 90 /* [EDIT ME] */ },
      { name: "TypeScript", description: "Strict type safety, domain modeling, and robust contracts", iconName: "Code2", level: 92 /* [EDIT ME] */ },
      { name: "Express.js", description: "RESTful architecture, custom middlewares, and route controllers", iconName: "Cpu", level: 88 /* [EDIT ME] */ },
    ],
  },
  {
    id: "frontend",
    category: "Frontend",
    description: "Modern, reactive client-side interfaces and design systems",
    icon: "Layout",
    skills: [
      { name: "Next.js", description: "App Router, Server Components, streaming SSR, and SEO", iconName: "Globe", level: 90 /* [EDIT ME] */ },
      { name: "React", description: "Hooks, compound components, state management, and reconciliation", iconName: "Boxes", level: 92 /* [EDIT ME] */ },
      { name: "Tailwind CSS", description: "Utility-first design tokens, responsive layouts, and dark mode", iconName: "Palette", level: 95 /* [EDIT ME] */ },
    ],
  },
  {
    id: "database",
    category: "Database",
    description: "Relational data modeling, query optimization, and migrations",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", description: "ACID transactions, complex indexing, CTEs, and connection pooling", iconName: "Database", level: 88 /* [EDIT ME] */ },
      { name: "Prisma ORM", description: "Type-safe database queries, schema migrations, and relational modeling", iconName: "Binary", level: 85 /* [EDIT ME] */ },
    ],
  },
  {
    id: "deployment",
    category: "Deployment",
    description: "Cloud hosting, containerization, and continuous delivery",
    icon: "Cloud",
    skills: [
      { name: "Vercel", description: "Zero-config serverless deployments, edge caching, and preview envs", iconName: "Zap", level: 92 /* [EDIT ME] */ },
      { name: "Render", description: "Managed PostgreSQL, background worker services, and web services", iconName: "ServerCrash", level: 85 /* [EDIT ME] */ },
      { name: "Railway", description: "Cloud infrastructure orchestration and ephemeral branch staging", iconName: "Radio", level: 86 /* [EDIT ME] */ },
    ],
  },
  {
    id: "tools",
    category: "Tools",
    description: "Developer tooling, editors, and collaboration workflows",
    icon: "Wrench",
    skills: [
      { name: "Git", description: "Trunk-based development, branching, and history manipulation", iconName: "GitBranch", level: 90 /* [EDIT ME] */ },
      { name: "GitHub", description: "Pull request reviews, GitHub Actions, and issue automation", iconName: "TerminalSquare", level: 92 /* [EDIT ME] */ },
      { name: "VS Code", description: "Custom developer workflows, debugging configurations, and shortcuts", iconName: "FileCode2", level: 95 /* [EDIT ME] */ },
      { name: "Postman", description: "API contract testing, environment variables, and automated suites", iconName: "Network", level: 88 /* [EDIT ME] */ },
    ],
  },
];

export const skills = skillCategories.flatMap((c) => c.skills);

