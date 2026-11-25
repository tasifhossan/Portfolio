export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  featuredOrder?: number;
  hidden?: boolean;
  thumbnail: string;
  tags: string[];

  // Phase 1 optional detail fields
  role?: string;
  status?: "Production" | "Deployed" | "In Progress";
  year?: string;
  liveUrl?: string;
  githubUrl?: string | { client?: string; server?: string };
  clientRepoUrl?: string; // backwards compatibility
  backendRepoUrl?: string; // backend repository URL

  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string[];
  challenges?: { title: string; detail: string }[];
  outcomes?: string[];
  gallery?: string[];
  futureImprovements?: string[];
  summary?: string;
}

export const projectsData: Project[] = [
  {
    slug: "roadresq",
    title: "RoadResQ",
    tagline: "On-demand roadside vehicle repair & emergency towing assistance platform",
    category: "On-Demand Services",
    featured: true,
    featuredOrder: 1,
    thumbnail: "/images/projects/roadresq.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "JWT",
      "Google Gemini",
      "Cloudinary",
      "SSLCommerz",
      "Vercel",
    ],
    role: "Full-Stack Developer",
    status: "Deployed",
    year: "2026",
    liveUrl: "https://roadresq-app.vercel.app",
    githubUrl: "https://github.com/tasifhossan/RoadResQ",
    backendRepoUrl: "https://github.com/tasifhossan/RoadResQ-backend",
    clientRepoUrl: "https://github.com/tasifhossan/RoadResQ",
    summary:
      "Emergency roadside assistance platform connecting stranded motorists with nearby mechanics via GPS search. Features live triage workflow tracking, frozen parts pricing, itemized invoices, and digital payments via SSLCommerz.",
    overview:
      "RoadResQ is a roadside breakdown assistance web app. Customers request help, mechanics accept jobs, and admins oversee users, payments and audit logs. It is split into a Next.js frontend and an Express/PostgreSQL backend API.",
    // TODO: add real problem
    problem: undefined,
    solution:
      "A customer registers vehicles and creates a service request with GPS coordinates, priority and optional damage photos. The backend finds available mechanics near the point. The customer assigns one, and the mechanic moves the job through statuses to COMPLETED. An invoice is then generated and paid through SSLCommerz. The customer can leave a review.",
    features: [
      "Service requests with lat/lng, priority (LOW, NORMAL, HIGH, EMERGENCY) and 8 statuses.",
      "Nearby mechanic search by radius (radiusKm, default 10) using a Haversine raw-SQL query.",
      "Mechanic job flow: accept, status updates checked against a LEGAL_TRANSITIONS map, parts used per job.",
      "Per-mechanic spare-parts inventory, with priceAtUse recorded and summed into invoice partsCost.",
      "Invoices and SSLCommerz payments, with success/fail/cancel callbacks and customer payment history.",
      "AI breakdown assistant, mechanic search intent, and admin insights using Gemini with rule-based fallbacks.",
    ],
    architecture: [
      "Auth: Email/password and Google OAuth, issuing JWT access and refresh tokens with a RefreshToken database model.",
      "Database: PostgreSQL via Prisma 5 with 14 models (User, MechanicProfile, Vehicle, ServiceRequest, SparePart, Invoice, Payment, etc.).",
      "API: REST under /api/v1 with 11 route modules, Zod validation, Helmet, and express-rate-limit; frontend calls backend via a BFF proxy.",
      "State & UI: TanStack Query for server data, Zustand for request wizard state, React Hook Form with Zod, and Tailwind CSS.",
      "Deployment: Backend deployed on Vercel with vercel.json rewrite; frontend hosted on Vercel.",
    ],
    challenges: [
      {
        title: "Transactional Mechanic Assignment",
        detail:
          "Mechanic assignment and request updates run inside a single Prisma transaction so they succeed or fail together.",
      },
    ],
    outcomes: [
      "14 Prisma models and 61 route handlers across 11 route modules.",
      "3 distinct user roles enforced in schema: CUSTOMER, MECHANIC, ADMIN.",
      "Automated tests: 3 backend test files (admin.insights, auth.google, user.summary) run via tsx.",
      "Deployed on Vercel with SSLCommerz payment gateway integration.",
    ],
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "Implement offline protocol so drivers can request assistance even when mobile data is unstable.",
      "Direct integration with regional motor insurance providers for instantaneous claim approvals.",
      "Live vehicle diagnostic scanner via OBD-II bluetooth integration to forecast mechanical failures.",
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
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "JWT",
      "Tailwind CSS",
      "Vercel",
    ],
    role: "Full-Stack Developer",
    status: "Deployed",
    year: "2026",
    liveUrl: "https://eduflow-frontend-ten.vercel.app",
    githubUrl: "https://github.com/tasifhossan/eduflow-frontend",
    backendRepoUrl: "https://github.com/tasifhossan/eduflow-backend",
    clientRepoUrl: "https://github.com/tasifhossan/eduflow-frontend",
    summary:
      "All-in-one coaching academy portal integrating student enrollment, batch scheduling, automated grading, fee ledger management, and role-based access for staff, teachers, students, and guardians.",
    overview:
      "EduFlow is a coaching-center management platform split into two repositories. The frontend is a Next.js 16 App Router application with role-based portals. The backend is an Express 5 REST API on PostgreSQL via Prisma.",
    // TODO: add real problem
    problem: undefined,
    solution:
      "One system covers branches, batches, enrollment, attendance, online and offline tests, a fee ledger with receipts, study materials, a public course catalog and a CMS. Staff, students and guardians each get their own views of the same data. An optional AI tutor and AI counseling endpoint sit behind a feature flag.",
    features: [
      "Multi-branch data scoping forcing non-super-admin users to their assigned branchId.",
      "Attendance marking, daily summaries, low-attendance alerts, and monthly batch attendance sheets.",
      "Timed online tests with autosave rate-limiting, written-answer grading, and rank calculations with tie handling.",
      "Fee ledger supporting charges, adjustments, allocations, reversals, and row-locked per-branch yearly receipt sequencing.",
      "Chapter-wise study materials with multi-file attachments and student access tracking.",
      "Public course catalog and CMS covering blog posts, FAQ, testimonials, and review moderation.",
    ],
    architecture: [
      "Auth: JWT stored in HTTP-only token cookie with Bearer header fallback, user database re-validation, and password change enforcement.",
      "Database: PostgreSQL through Prisma with 47 models and 28 enums across 28 database migrations.",
      "API: Express 5 REST API with Zod validation schemas and ~251 route registrations.",
      "Roles: 6 distinct roles in database schema: ADMIN, TEACHER, STUDENT, GUARDIAN, SUPER_ADMIN, ACCOUNTANT.",
      "Deployment: Next.js frontend deployed on Vercel; backend includes production smoke and isolation verification scripts.",
    ],
    challenges: [
      {
        title: "Branch Data Scoping & Row-Locked Receipts",
        detail:
          "Receipt numbers come from a per-branch yearly sequence updated with a row lock. Branch scoping middleware limits non-super-admin users to their own branch's data.",
      },
    ],
    outcomes: [
      "47 Prisma models, 28 database enums, and 28 migration steps.",
      "6 user roles enforced across role-based portals and route authorization middleware.",
      "77 Next.js page routes in frontend and ~251 route registrations in Express backend.",
      "Automated checks via cross-branch isolation matrix and endpoint verification test scripts.",
      "Deployed on Vercel infrastructure.",
    ],
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "Integrate local MFS payment gateways (bKash, Nagad, Rocket) for direct digital tuition settlements.",
      "Add automated SMS notification broadcasts for exam schedules and emergency notices.",
      "Expand AI counseling system with fine-tuned domain models for academic mentoring.",
    ],
  },
  {
    slug: "fix-it-now",
    title: "Fix It Now",
    tagline: "Home services marketplace booking portal & dispatch management client",
    category: "Marketplace",
    featured: true,
    featuredOrder: 3,
    thumbnail: "/images/projects/fix-it-now.png",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Express.js",
      "Prisma",
      "Zod",
      "Cloudinary",
      "JWT",
      "SSLCommerz",
      "Vercel",
    ],
    role: "Full-Stack Developer",
    status: "Deployed",
    year: "2026",
    liveUrl: "https://fix-it-now-frontend-three.vercel.app",
    githubUrl: "https://github.com/tasifhossan/FixItNow-frontend",
    backendRepoUrl: "https://github.com/tasifhossan/FixItNow",
    clientRepoUrl: "https://github.com/tasifhossan/FixItNow-frontend",
    summary:
      "On-demand home services portal connecting verified technicians for maintenance, plumbing, electrical, and appliance repairs with slot-based scheduling and SSLCommerz payments.",
    overview:
      "Fix It Now is a home services marketplace application for booking local maintenance technicians. Customers book technicians for electrical work, plumbing, cleaning, and AC repair. The project is split into a Next.js client and an Express + Prisma API.",
    // TODO: add real problem
    problem: undefined,
    solution:
      "Customers browse services and technicians, select a one-hour slot from the technician's scheduled working hours, and submit a booking request. The technician accepts or declines, the customer pays via SSLCommerz, the technician progresses the job, and the customer submits a review. Admins oversee users, categories, services, technician verification, and booking statistics.",
    features: [
      "Three user roles (CUSTOMER, TECHNICIAN, ADMIN) with dedicated dashboards and roleGuard API middleware.",
      "Slot-based booking calculated from technician weekday working hours with conflict validation.",
      "Booking lifecycle state transitions: REQUESTED, ACCEPTED/DECLINED, PAID, IN_PROGRESS, COMPLETED, CANCELLED.",
      "SSLCommerz payment gateway integration with callback handlers and server-side val_id validation.",
      "Verified customer reviews restricted to COMPLETED bookings with automated rating recalculation.",
      "Admin management portal for user block/unblock, technician verification, and service category CRUD.",
    ],
    architecture: [
      "Auth: JWT access token in Bearer header with refresh token stored in HttpOnly cookie; bcryptjs password hashing.",
      "Client Auth: Axios instance with 401 refresh token queuing; Next.js middleware role guarding.",
      "Database: PostgreSQL via Prisma 7 with @prisma/adapter-pg across 8 models and 4 enums.",
      "API: REST API under /api/v1 using Express 5 and Zod schema validation per module.",
      "Deployment: Backend configured with vercel.json; frontend client deployed on Vercel.",
    ],
    challenges: [
      {
        title: "Cross-Origin Authentication & Session Sync",
        detail:
          "Handles auth across a separate frontend and API domain using SameSite=None cookies, a request-body refresh-token fallback, and a redirect-loop guard.",
      },
    ],
    outcomes: [
      "8 Prisma models and 4 enums (Role, BookingStatus, PaymentProvider, PaymentStatus).",
      "3 user roles (CUSTOMER, TECHNICIAN, ADMIN) with isolated dashboards.",
      "51 API route handlers across 9 modules and 29 Next.js frontend page routes.",
      "Deployed on Vercel with SSLCommerz payment integration.",
    ],
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "Real-time in-app chat between customer and technician using WebSockets.",
      "Automated recurring home maintenance subscription contracts.",
      "Automated warranty claims tracking for completed repair jobs.",
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
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Google Gemini",
      "Cloudinary",
      "JWT",
      "Leaflet",
      "Vercel",
    ],
    role: "Full-Stack Developer",
    status: "Deployed",
    year: "2026",
    liveUrl: "https://muni-fix.vercel.app",
    githubUrl: "https://github.com/tasifhossan/MuniFix",
    backendRepoUrl: "https://github.com/tasifhossan/MuniFix-Backend",
    clientRepoUrl: "https://github.com/tasifhossan/MuniFix",
    summary:
      "Civic issue reporting portal for Chittagong municipality empowering citizens to report waterlogging, broken roads, and waste issues directly to city officials with automated AI categorization and resolution tracking.",
    overview:
      "MuniFix Ctg is a civic complaint and municipal infrastructure defect reporting platform built for Chattogram City Corporation. Citizens report civic issues such as waterlogging, potholes, and waste mismanagement, while municipal department workers and administrators triage, assign, and resolve them. The system consists of a Next.js frontend with Leaflet mapping and an Express backend API with PostgreSQL.",
    // TODO: add real problem
    problem: undefined,
    solution:
      "Citizens submit geo-tagged complaints with photographic evidence and descriptions from their phone or desktop browser. The backend utilizes Google Gemini AI with a local keyword fallback to automatically categorize complaints and route them to the relevant department. Department administrators and field workers update resolution statuses, upload completion photos, and citizens receive status updates.",
    features: [
      "Civic complaint submission with Leaflet GPS location picker and multi-photo upload to Cloudinary.",
      "AI-assisted department classification using Google Gemini with a local keyword fallback function for resiliency.",
      "Lifecycle status progression: pending, assigned, in_progress, resolved, cancelled with resolution proof photo attachment.",
      "Role-based access control supporting 4 distinct user roles: citizen, field_worker, dept_admin, super_admin.",
      "Department administration and dispatching with manual complaint reassignment and department-specific task filtering.",
      "In-app notification tracking and client-side notification bell with fallback to browser localStorage.",
    ],
    architecture: [
      "Auth: JWT authentication with bcrypt password hashing, phone/email OTP verification table, and role enforcement middleware.",
      "Database: PostgreSQL accessed using raw SQL connection pool via pg (8 relational tables).",
      "API: REST Express backend mounted under /api with modular controllers and Cloudinary image handling.",
      "Frontend: Next.js App Router, Tailwind CSS 4, React-Leaflet for interactive geographic mapping, and jsPDF for reports.",
      "Deployment: Backend configured for Vercel with vercel.json; frontend deployed on Vercel.",
    ],
    challenges: [
      {
        title: "AI Classification with Local Fallback",
        detail:
          "Complaints are classified by Google Gemini, with a local keyword classifier as a fallback when the call fails.",
      },
    ],
    outcomes: [
      "8 relational database tables in raw PostgreSQL schema (departments, users, complaints, assignments, etc.).",
      "4 user roles enforced: citizen, field_worker, dept_admin, super_admin.",
      "35 route handlers across 8 route modules and 37 Next.js frontend page routes.",
      "Deployed on Vercel infrastructure.",
    ],
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "Dedicated mobile application with offline report drafting for low-connectivity ward zones.",
      "Public transparency analytics dashboard showcasing ward-by-ward SLA resolution timelines.",
      "Add multilingual support (Bengali and English) for broader community accessibility.",
    ],
  },
  {
    // Hidden until the project is finished
    slug: "careflow-ai",
    title: "CareFlow AI",
    tagline: "Multi-tenant AI healthcare operations & patient management SaaS",
    category: "HealthTech SaaS",
    featured: false,
    hidden: true,
    thumbnail: "/images/projects/careflow-ai.svg",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Vercel"],
    role: "Full-Stack Developer",
    status: "In Progress",
    year: "2026",
    liveUrl: "https://careflow-ai-demo.vercel.app",
    githubUrl: "https://github.com/tasifhossan/CareFlow",
    clientRepoUrl: "https://github.com/tasifhossan/CareFlow",
    summary:
      "A clinical operations platform streamlining patient intake, appointment scheduling, and practitioner documentation workflows with responsive dashboards.",
    overview:
      "Clinical workflow orchestration and patient analytics platform with real-time FHIR sync. Features interactive admission trend forecasting, automated pathway status monitoring, and low-latency clinical alerting.",
    // TODO: add real problem
    problem: undefined,
    // TODO: add real solution
    solution: undefined,
    features: [
      "Multi-tenant clinical workflow orchestration and practitioner documentation",
      "Real-time FHIR R4 protocol synchronization for medical records",
      "Dynamic conditional validation for patient intake forms",
      "Interactive admission trend forecasting and clinical alerting",
    ],
    architecture: [
      "Next.js App Router with React and strict TypeScript",
      "Prisma ORM connected to PostgreSQL with strict tenant data isolation guards",
      "Low-latency alerting pipeline designed for clinical environments",
    ],
    challenges: [
      {
        title: "AI Classification with Local Fallback",
        detail:
          "Complaints are classified by Google Gemini, with a local keyword classifier as a fallback when the call fails.",
      },
    ],
    // TODO: add real outcomes
    outcomes: undefined,
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "Integrate automated appointment reminders via WhatsApp and regional SMS gateways.",
      "Add offline-first Progressive Web App (PWA) capabilities for rural clinics with intermittent cellular coverage.",
      "Introduce an AI-assisted clinical summary generator utilizing OpenAI or Anthropic tool-calling APIs.",
    ],
  },
  {
    slug: "buildfolio",
    title: "Buildfolio",
    tagline: "Multi-tenant portfolio builder with drag-and-drop section customization",
    category: "Developer Tools",
    featured: false,
    thumbnail: "/images/projects/buildfolio.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Cloudinary",
      "Zod",
      "Vercel",
    ],
    role: "Full-Stack Developer",
    status: "Deployed",
    year: "2026",
    liveUrl: "https://buildfolio-beta.vercel.app",
    githubUrl: "https://github.com/tasifhossan/Buildfolio",
    summary:
      "Multi-tenant portfolio builder enabling developers to create personal websites with modular draggable sections, rich-text blogging, custom SEO metadata, and dynamic subpath rendering.",
    overview:
      "Buildfolio is a multi-tenant portfolio builder web application designed for software developers and creators. Users sign up, select starter templates, dynamically arrange section layouts via drag-and-drop, and publish personalized portfolio pages with custom SEO metadata and rich text blogging. Built as an integrated Next.js application using Prisma, PostgreSQL, and NextAuth.",
    // TODO: add real problem
    problem: undefined,
    solution:
      "Users register an account, claim a personalized URL slug, select layout templates, and customize section content through a visual dashboard. A drag-and-drop interface allows reordering sections, and an integrated Tiptap editor supports writing blog articles. Changes are saved to a PostgreSQL database with instant cache revalidation and rendered dynamically at /[slug].",
    features: [
      "Visual drag-and-drop section reordering using @dnd-kit/core and @dnd-kit/sortable.",
      "Rich text blog post editor with Tiptap and render-time HTML sanitization via isomorphic-dompurify.",
      "Slug claim and history system with availability checking and rename cooldown tracking.",
      "Asset hosting via Cloudinary for custom logos and resume PDF downloads.",
      "Visitor analytics tracking recording daily pageviews and referrers per portfolio.",
      "Dynamic multi-tenant rendering serving user portfolios by route slug with metadata generation.",
    ],
    architecture: [
      "Auth: NextAuth.js with @auth/prisma-adapter using email/password authentication via bcryptjs and session persistence.",
      "Database: PostgreSQL managed via Prisma ORM using @prisma/adapter-pg with 12 models.",
      "API: Next.js App Router Route Handlers under src/app/api/ with Zod schema validation.",
      "State & UI: React 19, Tailwind CSS 4, Lucide icons, and @dnd-kit sortable context.",
      "Deployment: Deployed on Vercel with postinstall script running prisma generate.",
    ],
    challenges: [
      {
        title: "Slug History Tracking & Rename Cooldown",
        detail:
          "Past slugs are stored in a history table and renames are limited by a cooldown.",
      },
    ],
    outcomes: [
      "12 Prisma models and 8 database migrations.",
      "17 Next.js API route handlers in src/app/api/ and 7 top-level page routes.",
      "Deployed on Vercel at buildfolio-beta.vercel.app.",
    ],
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "Custom domain mapping via Cloudflare SSL for SaaS DNS proxying.",
      "Community template marketplace enabling creators to share design themes.",
      "Integrated Git commit heatmaps and GitHub repository showcase widgets.",
    ],
  },
  {
    slug: "novamart",
    title: "NovaMart",
    tagline: "Full-stack e-commerce monorepo with customer storefront, admin dashboard, and REST API",
    category: "E-Commerce",
    featured: false,
    thumbnail: "/images/projects/novamart.svg",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Vercel",
    ],
    role: "Full-Stack Developer",
    status: "Deployed",
    year: "2026",
    liveUrl: "https://novamart-eight-amber.vercel.app/",
    githubUrl: "https://github.com/tasifhossan/NovaMart",
    summary:
      "Full-stack e-commerce platform monorepo featuring a Next.js customer storefront with Stripe checkout, a Next.js admin panel with sales analytics, and an Express MongoDB REST API.",
    overview:
      "NovaMart is a full-stack e-commerce platform built as a monorepo containing three coordinated applications: a customer storefront, an administrative management dashboard, and a REST API backend. Customers browse products, manage carts, and checkout with Stripe, while store managers oversee inventory, orders, and sales metrics. Built with Next.js 16, Express, MongoDB (Mongoose), Firebase, and Stripe.",
    // TODO: add real problem
    problem: undefined,
    solution:
      "The customer storefront provides product discovery with categories, brands, price filters, user reviews, cart management, and Stripe checkout. The admin panel provides operational control over catalog taxonomy, product stock, order status updates, and sales charts. The Express API manages MongoDB data persistence, authentication, and file uploads.",
    features: [
      "Customer shopping workflow: category/brand filtering, product search, cart persistence, and wishlist management.",
      "Stripe payment integration with card element checkout handling.",
      "Admin management dashboard: catalog CRUD (categories, brands, attributes, products) and order fulfillment status updates.",
      "Dual authentication setup: Firebase client SDK for storefront customers and JWT with bcrypt in cookies for administrative staff.",
      "Analytics and sales summary reporting visualized using Recharts on the admin panel.",
      "Media upload processing using Multer saving product and category images.",
    ],
    architecture: [
      "Auth: Storefront uses Firebase client authentication; Admin panel uses JWT stored in cookies; Backend uses jsonwebtoken and bcryptjs.",
      "Database: MongoDB using Mongoose 8 with 16 data models (Order, Product, Cart, Category, User, Shop, etc.).",
      "API: REST Express backend with 12 route modules mounted under /api.",
      "Frontend: Storefront uses Next.js 16, React 19, Tailwind CSS 4, Jotai, TanStack Query; Admin panel uses Next.js 16, Ant Design 6, Recharts.",
      "Deployment: Monorepo configured for Vercel deployment with vercel.json.",
    ],
    challenges: undefined,
    outcomes: [
      "3 coordinated monorepo applications (storefront, admin panel, REST API).",
      "16 Mongoose data models and 12 Express route modules.",
      "22 page routes in storefront and 10 page routes in admin dashboard.",
      "Deployed on Vercel at novamart-eight-amber.vercel.app.",
    ],
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "Automated stock replenishment alerts and low-inventory webhooks.",
      "Real-time delivery courier tracking with map visualizations.",
      "Multi-vendor vendor payouts and commission splitting engine.",
    ],
  },
  {
    slug: "bitehouse-restaurant",
    title: "BiteHouse Restaurant",
    tagline: "Static restaurant storefront and ordering web application with table reservations",
    category: "Food & Beverage",
    featured: false,
    thumbnail: "/images/projects/bitehouse-restaurant.png",
    tags: ["React", "Vite", "Tailwind CSS", "Bootstrap", "Axios", "Vercel"],
    role: "Frontend Developer",
    status: "Deployed",
    year: "2025",
    liveUrl: "https://bitehouse-restaurant.vercel.app",
    githubUrl: "https://github.com/tasifhossan/BiteHouse-Restaurant",
    summary:
      "Static restaurant website frontend featuring browsable menu categories, client-side order flow, and local-storage table reservation booking.",
    overview:
      "BiteHouse Restaurant is a static restaurant storefront and ordering web application. Visitors can explore food categories, view item ingredients and nutritional tags, assemble an order in an in-memory cart, and submit table reservation requests. Built using React 19, Vite 7, React Router 7, Tailwind CSS 4, and Bootstrap.",
    // TODO: add real problem
    problem: undefined,
    solution:
      "The web application displays categorized restaurant food items loaded from a structured JSON dataset (menu.json). Customers can view item details, customize their cart, review the order total, reserve dining tables with date/time pickers saved to browser storage, and access an account dashboard.",
    features: [
      "Categorized menu catalog with item badges, search, price sorting, and item detail pages.",
      "Client-side shopping cart with quantity adjustments and persistent state tracking.",
      "Table reservation booking system capturing guest count, date, time, and special requests stored in localStorage.",
      "User authentication interface with protected dashboard routing.",
      "Responsive visual presentation with carousel banners using Slick Carousel and Bootstrap styling.",
    ],
    architecture: [
      "Auth: Simulated client authentication in AuthContext with email/password form handling and localStorage session tracking.",
      "Database & Data: Static JSON file (menu.json); reservations and cart state are stored in browser localStorage.",
      "API: Client-side simulated asynchronous services using Axios and local JSON.",
      "State & UI: React 19, Vite 7, React Router 7, Tailwind CSS 4, Bootstrap 5, and react-slick.",
      "Deployment: Deployed on Vercel at bitehouse-restaurant.vercel.app.",
    ],
    challenges: undefined,
    outcomes: [
      "10 application routes defined in React Router 7.",
      "Client-side state persistence for cart and reservations in localStorage.",
      "Deployed on Vercel infrastructure.",
    ],
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "Connect persistent backend database for real-time kitchen order ticket dispatch.",
      "Integrated table reservation management dashboard for restaurant staff.",
      "Online customer payment processing for takeaway orders.",
    ],
  },
  {
    slug: "first-step-preschool",
    title: "First Step Preschool",
    tagline: "Static multi-page web template for preschools and kindergartens",
    category: "Education & School",
    featured: false,
    thumbnail: "/images/projects/first-step-preschool.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Swiper"],
    role: "Frontend Developer",
    status: "Deployed",
    year: "2026",
    liveUrl: "https://tasifhossan.github.io/First-Step_Preschool/",
    githubUrl: "https://github.com/tasifhossan/First-Step_Preschool",
    summary:
      "A static multi-page website template for preschools and early childhood institutes. Built with HTML5, CSS3, Bootstrap, jQuery, and Swiper. Features pages for home, about, contact, and pre-styled login/signup forms.",
    overview:
      "A static multi-page website template for preschools and early childhood institutes. Built with HTML5, CSS3, Bootstrap, jQuery, and Swiper. Features pages for home, about, contact, and pre-styled login/signup forms.",
    problem: undefined,
    solution:
      "A multi-page responsive HTML template demonstrating structured sections for school activities, curriculum, teacher profiles, campus photo galleries, and inquiry forms.",
    features: [
      "Homepage with Swiper carousel slider, activities grid, and parent testimonials.",
      "Dedicated about page featuring mission, vision, and teacher profile cards.",
      "Contact page with embedded map placeholder, operating hours, and inquiry form.",
      "Pre-styled authentication interface pages with login and registration forms.",
      "Campus event photo gallery and activity showcase layout.",
    ],
    architecture: [
      "Frontend: Semantic HTML5, Bootstrap grid, custom CSS, Swiper carousel, and jQuery.",
      "Backend: None (static client-side template).",
      "Deployment: Hosted on GitHub Pages.",
    ],
    challenges: undefined,
    outcomes: [
      "5 interconnected static HTML pages (index, about, contact, login, signup).",
      "Deployed on GitHub Pages.",
    ],
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "Parent portal for report card downloads and school fee payments.",
      "Dynamic school events calendar with downloadable calendar invites.",
      "Interactive digital admissions application workflow.",
    ],
  },
  {
    slug: "landmarkbd",
    title: "LandMarkBD",
    tagline: "Static real estate market insights and property investment portal template",
    category: "Real Estate Portal",
    featured: false,
    thumbnail: "/images/projects/landmarkbd.png",
    tags: ["HTML5", "Tailwind CSS", "JavaScript"],
    role: "Frontend Developer",
    status: "Deployed",
    year: "2025",
    liveUrl: "https://tasifhossan.github.io/LandMarkBD/",
    githubUrl: "https://github.com/tasifhossan/LandMarkBD",
    summary:
      "A static frontend web portal showcasing property market analysis, investment guides, and real estate articles for Bangladesh. Built using semantic HTML5, Tailwind CSS, and vanilla JavaScript.",
    overview:
      "A static frontend web portal showcasing property market analysis, investment guides, and real estate articles for Bangladesh. Built using semantic HTML5, Tailwind CSS, and vanilla JavaScript.",
    problem: undefined,
    solution:
      "A responsive single-page template presenting property market summaries, featured investment highlights, regional guide sections for Dhaka and Sylhet, and an inquiry form.",
    features: [
      "Hero section with property category selection and search parameter inputs.",
      "Featured property investment cards displaying price estimates and specifications.",
      "Regional market guide cards highlighting investment potential in Dhaka and Sylhet.",
      "Editorial market analysis article grid for prospective property buyers.",
      "Responsive mobile navigation toggle implemented in vanilla JavaScript.",
    ],
    architecture: [
      "Frontend: Semantic HTML5, Tailwind CSS (via CDN), custom CSS, and vanilla JavaScript.",
      "Backend: None (static client-side template).",
      "Deployment: Hosted on GitHub Pages.",
    ],
    challenges: undefined,
    outcomes: [
      "Single-page responsive layout built with Tailwind CSS.",
      "Deployed on GitHub Pages.",
    ],
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "Interactive property mortgage affordability calculator.",
      "Regional price trend line charts with historical market benchmarks.",
      "Automated property inquiry forwarding to verified real estate agents.",
    ],
  },
  {
    slug: "nipro",
    title: "Nipro Agency",
    tagline: "Static agency website template with service showcases and portfolio gallery",
    category: "Agency & Creative",
    featured: false,
    thumbnail: "/images/projects/nipro.png",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    role: "Frontend Developer",
    status: "Deployed",
    year: "2024",
    liveUrl: "https://tasifhossan.github.io/Nipro/",
    githubUrl: "https://github.com/tasifhossan/Nipro",
    summary:
      "A static single-page website template for a fictional full-service creative agency. Built using HTML5, CSS3, and Bootstrap, featuring a sticky navigation header, hero carousel, service matrix, portfolio filter gallery, and contact form.",
    overview:
      "A static single-page website template for a fictional full-service creative agency. Built using HTML5, CSS3, and Bootstrap, featuring a sticky navigation header, hero carousel, service matrix, portfolio filter gallery, and contact form.",
    problem: undefined,
    solution:
      "A single landing page layout presenting agency creative capabilities, team member cards, filterable portfolio work items, client testimonial sliders, and an inquiry form.",
    features: [
      "Sticky navigation bar with smooth section scroll anchors.",
      "Hero promotional carousel with call-to-action buttons.",
      "Service grid with custom iconography using Pe-icon-7-stroke and Font Awesome.",
      "Filterable creative portfolio gallery showcasing completed work samples.",
      "Client testimonial carousel slider and message inquiry form.",
    ],
    architecture: [
      "Frontend: HTML5, custom CSS, Bootstrap 4 bundle, Font Awesome, and Pe-icon-7-stroke.",
      "Backend: None (static client-side template).",
      "Deployment: Hosted on GitHub Pages.",
    ],
    challenges: undefined,
    outcomes: [
      "Single-page responsive template with interactive portfolio filters and carousels.",
      "Deployed on GitHub Pages.",
    ],
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "Case study detail modal view with project deliverables breakdowns.",
      "Interactive agency service price estimator tool.",
      "Direct client meeting scheduling integration via Calendly.",
    ],
  },
  {
    slug: "e-school-landing-page",
    title: "E-School",
    tagline: "Static online learning academy landing page template with course catalogs",
    category: "Education & LMS",
    featured: false,
    thumbnail: "/images/projects/e-school.png",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    role: "Frontend Developer",
    status: "Deployed",
    year: "2024",
    liveUrl: "https://tasifhossan.github.io/E-School-Landing-page/",
    githubUrl: "https://github.com/tasifhossan/E-School-Landing-page",
    summary:
      "A static landing page template for an online education academy. Built with HTML5, CSS3, and Bootstrap, showcasing popular courses, subject category highlights, and student reviews.",
    overview:
      "A static landing page template for an online education academy. Built with HTML5, CSS3, and Bootstrap, showcasing popular courses, subject category highlights, and student reviews.",
    problem: undefined,
    solution:
      "A clean educational landing page featuring a branded header, hero registration banner, four feature pillar cards, a course selection grid with pricing and star ratings, and student testimonials.",
    features: [
      "Header navbar with course search and hero registration call-to-action.",
      "Four feature highlight cards covering computer science, engineering, business, and music.",
      "Online courses catalog grid displaying course thumbnails, badges, prices, and instructor avatars.",
      "Student review testimonial section and footer links.",
    ],
    architecture: [
      "Frontend: Semantic HTML5, Bootstrap, custom CSS, and Font Awesome kit.",
      "Backend: None (static client-side template).",
      "Deployment: Hosted on GitHub Pages.",
    ],
    challenges: undefined,
    outcomes: [
      "Responsive educational landing page layout.",
      "Deployed on GitHub Pages.",
    ],
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "Video course teaser preview modals with sample lesson clips.",
      "Student course enrollment checkout flow.",
      "Instructor application and onboarding intake form.",
    ],
  },
  {
    slug: "tinyone-landing-page",
    title: "Tinyone",
    tagline: "Static mobile application product landing page template",
    category: "Product Showcase",
    featured: false,
    thumbnail: "/images/projects/tinyone.png",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    role: "Frontend Developer",
    status: "Deployed",
    year: "2024",
    liveUrl: "https://tasifhossan.github.io/Tinyone-Landing-page/",
    githubUrl: "https://github.com/tasifhossan/Tinyone-Landing-page",
    summary:
      "A static landing page template for mobile applications. Built with HTML5, CSS3, and Bootstrap, presenting app features, device previews, and an email newsletter subscription form.",
    overview:
      "A static landing page template for mobile applications. Built with HTML5, CSS3, and Bootstrap, presenting app features, device previews, and an email newsletter subscription form.",
    problem: undefined,
    solution:
      "A minimal single-page web layout featuring a branded hero section with a smartphone mockup slider, a six-card feature highlight grid, and an email newsletter lead-capture form.",
    features: [
      "Hero slider carousel displaying app tagline and mobile screen device mockup.",
      "Six-card feature grid highlighting application capabilities with iconography.",
      "Newsletter subscription bar with email input and submit action.",
      "Social media link footer.",
    ],
    architecture: [
      "Frontend: HTML5, Bootstrap, custom CSS, and Font Awesome kit.",
      "Backend: None (static client-side template).",
      "Deployment: Hosted on GitHub Pages.",
    ],
    challenges: undefined,
    outcomes: [
      "Single-page responsive mobile app showcase template.",
      "Deployed on GitHub Pages.",
    ],
    // TODO: add real gallery
    gallery: undefined,
    futureImprovements: [
      "App Store and Google Play Store one-click direct download links.",
      "Interactive phone mockup screen swiper showcasing in-app workflows.",
      "Embedded user ratings and customer quote carousel.",
    ],
  },
];
