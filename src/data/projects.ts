export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  featuredOrder?: number;
  thumbnail: string;
  tags: string[];
  liveUrl: string;
  clientRepoUrl: string;
  summary: string;
  challenges: string[];
  futureImprovements: string[];
}

export const projectsData: Project[] = [
  {
    slug: "careflow-ai",
    title: "CareFlow AI",
    tagline: "Multi-tenant AI healthcare operations & patient management SaaS",
    category: "HealthTech SaaS",
    featured: true,
    featuredOrder: 1,
    // [IMAGE] placeholder (can be replaced with screenshots at /public/images/projects/)
    thumbnail: "[IMAGE] /images/projects/careflow-ai.svg",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    // [LIVE URL] placeholder
    liveUrl: "[LIVE URL] https://careflow-ai-demo.vercel.app",
    // [GITHUB CLIENT URL] placeholder — client repository only
    clientRepoUrl: "[GITHUB CLIENT URL] https://github.com/tasifhossan/careflow-ai-client",
    summary:
      "A clinical operations platform streamlining patient intake, appointment scheduling, and practitioner documentation workflows with responsive dashboards.",
    challenges: [
      "[EDIT ME] Managing complex patient intake forms with dynamic conditional validation without degrading client-side rendering performance.",
      "[EDIT ME] Implementing real-time conflict-free appointment scheduling across varying doctor time slots and clinic timezones.",
      "[EDIT ME] Ensuring strict data separation and authorization guards for medical records on low-bandwidth clinic connections.",
    ],
    futureImprovements: [
      "[EDIT ME] Integrate automated appointment reminders via WhatsApp and regional SMS gateways.",
      "[EDIT ME] Add offline-first Progressive Web App (PWA) capabilities for rural clinics with intermittent cellular coverage.",
      "[EDIT ME] Introduce an AI-assisted clinical summary generator utilizing OpenAI or Anthropic tool-calling APIs.",
    ],
  },
  {
    slug: "eduflow",
    title: "EduFlow",
    tagline: "Coaching center management LMS tailored for Bangladeshi educational institutions",
    category: "EdTech LMS",
    featured: true,
    featuredOrder: 2,
    thumbnail: "/images/projects/eduflow.png",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    // [LIVE URL] placeholder
    liveUrl: "[LIVE URL] https://eduflow-lms.vercel.app",
    // [GITHUB CLIENT URL] placeholder
    clientRepoUrl: "[GITHUB CLIENT URL] https://github.com/tasifhossan/eduflow-client",
    summary:
      "All-in-one coaching academy portal integrating student enrollment, batch scheduling, SMS notifications, and fee collection tracking for regional institutions.",
    challenges: [
      "[EDIT ME] Designing an intuitive batch calendar interface that renders smoothly on budget mobile phones commonly used by academy staff.",
      "[EDIT ME] Handling bulk attendance barcode scanning with instantaneous UI feedback and duplicate scan rejection.",
      "[EDIT ME] Structuring relational queries to track multi-month fee arrears without heavy computation bottlenecks.",
    ],
    futureImprovements: [
      "[EDIT ME] Add direct payment gateway integration for automated fee collection via bKash, Nagad, and Rocket.",
      "[EDIT ME] Implement parent portal dashboards with student exam analytics, attendance heatmaps, and ranking reports.",
      "[EDIT ME] Deploy automated PDF report card generation with printable academic transcripts.",
    ],
  },
  {
    slug: "fix-it-now",
    title: "Fix It Now",
    tagline: "Home services marketplace booking portal & dispatch management client",
    category: "Marketplace Web App",
    featured: true,
    featuredOrder: 3,
    thumbnail: "/images/projects/fix-it-now.png",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    // [LIVE URL] placeholder
    liveUrl: "[LIVE URL] https://fixitnow-app.vercel.app",
    // [GITHUB CLIENT URL] placeholder
    clientRepoUrl: "[GITHUB CLIENT URL] https://github.com/tasifhossan/fix-it-now-client",
    summary:
      "A fast on-demand service booking web application connecting verified home repair contractors with residential customers, featuring dynamic dispatch and transparent pricing.",
    challenges: [
      "[EDIT ME] Synchronizing live technician availability states and preventing race conditions during peak request hours.",
      "[EDIT ME] Creating a frictionless multi-step service configuration wizard that maintains user progress across page refreshes.",
      "[EDIT ME] Designing an accessible service discovery flow with geospatial distance calculation and rating filters.",
    ],
    futureImprovements: [
      "[EDIT ME] Introduce WebSocket-based live map tracking showing real-time technician transit progress.",
      "[EDIT ME] Implement integrated in-app messaging and photo upload for pre-service damage assessments.",
      "[EDIT ME] Develop an automated customer warranty claim portal for completed repair jobs.",
    ],
  },
  {
    slug: "munifix-ctg",
    title: "MuniFix Ctg",
    tagline: "Civic complaint & municipal infrastructure defect reporting platform",
    category: "Civic Tech",
    featured: true,
    featuredOrder: 4,
    thumbnail: "/images/projects/munifix-ctg.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    // [LIVE URL] placeholder
    liveUrl: "[LIVE URL] https://munifix-ctg.vercel.app",
    // [GITHUB CLIENT URL] placeholder
    clientRepoUrl: "[GITHUB CLIENT URL] https://github.com/tasifhossan/munifix-ctg-client",
    summary:
      "A citizen engagement portal empowering residents of Chittagong to report road hazards, drainage issues, and public lighting defects directly to municipal ward departments.",
    challenges: [
      "[EDIT ME] Implementing client-side image compression to enable quick geotagged photo uploads over weak 3G network connections.",
      "[EDIT ME] Grouping proximate defect reports to automatically detect duplicate incident filings and reduce department ticket noise.",
      "[EDIT ME] Ensuring high accessibility standards (WCAG AAA) for citizens navigating on varied mobile screen sizes.",
    ],
    futureImprovements: [
      "[EDIT ME] Integrate automated push notifications informing citizens whenever a public works crew is dispatched.",
      "[EDIT ME] Build an interactive public heat map visualizing ward resolution velocity and municipal budget allocation.",
      "[EDIT ME] Add multilingual support (Bengali and English) for broader community accessibility.",
    ],
  },
  {
    slug: "roadresq",
    title: "RoadResQ",
    tagline: "On-demand roadside vehicle repair & emergency towing assistance platform",
    category: "On-Demand Services",
    featured: false,
    thumbnail: "/images/projects/roadresq.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    // [LIVE URL] placeholder
    liveUrl: "[LIVE URL] https://roadresq.vercel.app",
    // [GITHUB CLIENT URL] placeholder
    clientRepoUrl: "[GITHUB CLIENT URL] https://github.com/tasifhossan/roadresq-client",
    summary:
      "Emergency roadside assistance dispatch client connecting stranded drivers with nearest tow trucks, mobile mechanics, and emergency repair specialists.",
    challenges: [
      "[EDIT ME] Designing an ultra-minimalistic emergency request interface that functions flawlessly in stressful breakdown situations.",
      "[EDIT ME] Managing GPS location acquisition with graceful manual address fallback when device geolocation permission is denied.",
      "[EDIT ME] Keeping initial bundle payload under 180kb so the application renders in seconds on highway cellular dead-zones.",
    ],
    futureImprovements: [
      "[EDIT ME] Implement SMS fallback protocol so drivers can request assistance even when mobile data is completely exhausted.",
      "[EDIT ME] Add direct roadside insurance policy verification to enable cashless emergency claims.",
      "[EDIT ME] Integrate nearby 24/7 fuel station and EV charging point directory with real-time status.",
    ],
  },
];

export const projects = projectsData;

