const projectsData = {
  ayurvedic: {
    name: "Ayurvedic",
    title: "PHP MySQL with Custom Admin Panel",
    category: "PHP / MySQL",
    techStack: "PHP, MySQL, JavaScript, Bootstrap, CSS3",
    client: "Ayurvedic Medical Clinic",
    year: "2023",
    liveUrl: "https://ayurvedic.infinityfree.me/",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-1.png",
    description:
      "An online Ayurvedic medicine catalogue and clinic management system featuring a custom administrative panel for product uploads, appointment bookings, and inventory tracking.",
    challenges:
      "Handling real-time input validation, query optimization for product searching, and securing native PHP session cookies against cross-site scripting (XSS) attacks.",
    improvements:
      "Plan to migrate the backend structure to Laravel framework to leverage security middleware, Eloquent ORM, and robust controller routing.",
  },
  trendycart: {
    name: "TrendyCart",
    title: "Ecommerce online store",
    category: "WordPress & WooCommerce",
    techStack: "WordPress, WooCommerce, Elementor Pro, PHP",
    client: "eCommerce Vendor",
    year: "2023",
    liveUrl: "https://tasif-hossan.blog/trendycart/",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-2.png",
    description:
      "A conversion-optimized online clothing store equipped with secure cart drawer checkout workflows, advanced payment integrations, and product variation grids.",
    challenges:
      "Minimizing database queries and visual assets weight to achieve an average page loading speed of under 1.5 seconds on mobile views.",
    improvements:
      "Implement Redis database query caching, set up custom search indexes, and compress image assets dynamically.",
  },
  accesspress: {
    name: "Accesspress",
    title: "Ecommerce Online Store",
    category: "WordPress & WooCommerce",
    techStack: "WordPress, WooCommerce, Elementor, PHP, MySQL",
    client: "Accesspress Brand",
    year: "2023",
    liveUrl: "https://tasif-hossan.blog/elysium/",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-16.png",
    description:
      "A comprehensive digital marketplace focusing on smooth product layout navigation, user reviews, dynamic cart updates, and direct payment gateway interfaces.",
    challenges:
      "Syncing product catalog stock levels in real time across multiple third-party suppliers via webhook APIs.",
    improvements:
      "Implement custom WooCommerce hook functions to handle asynchronous stock caching mechanisms.",
  },
  applab: {
    name: "Applab",
    title: "Web Design & Development",
    category: "HTML5 / CSS / JS",
    techStack: "HTML5, CSS3, JavaScript, jQuery, AOS.js",
    client: "Applab Inc.",
    year: "2023",
    liveUrl: "https://tasif-hossan.blog/",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-9.png",
    description:
      "A sleek, responsive promotional landing page design for an application development team, featuring micro-interactions and scroll animations.",
    challenges:
      "Creating highly smooth frame rate animations that render flawlessly across older browser versions without memory leaks.",
    improvements:
      "Rebuild the layout animations using GSAP and Lenis scroll helper to obtain hardware-accelerated smooth scrolling transitions.",
  },
  woodmart: {
    name: "Woodmart",
    title: "Ecommerce Online store",
    category: "WordPress & WooCommerce",
    techStack: "WordPress, WooCommerce, Woodmart Theme, CSS3, PHP",
    client: "Woodmart Retail Brand",
    year: "2023",
    liveUrl: "https://www.youtube.com/watch?v=nrvOyYSJad4",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-13.png",
    description:
      "An online store customized with the premium Woodmart structure, featuring responsive product filtering, user registration, and optimized checkout pages.",
    challenges:
      "Configuring multi-variable options and shipping cost calculation formulas dynamically for multiple local zones.",
    improvements:
      "Add Elasticsearch query index to replace basic database searches and support typo-tolerant auto-suggestions.",
  },
  "chittagong-news": {
    name: "Chittagong News",
    title: "WordPress Customization",
    category: "WordPress & WooCommerce",
    techStack: "WordPress, Elementor, Custom Theme Plugins, PHP",
    client: "Chittagong News Portal",
    year: "2023",
    liveUrl: "https://tasif-hossan.blog/newsportal",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-12.png",
    description:
      "A WordPress news portal layout designed for high traffic, featuring category classification, visual news grids, and social sharing functionality.",
    challenges:
      "Handling server resources allocation efficiently to prevent crashes during peak viral news event traffic spikes.",
    improvements:
      "Configure Cloudflare CDN caching and setup WP Rocket configuration scripts for caching database query results.",
  },
  elysium: {
    name: "Elysium",
    title: "Premium Theme Customization",
    category: "PHP / MySQL",
    techStack: "WordPress, Premium Elysium Theme, PHP, CSS3, JS",
    client: "Elysium Digital Portal",
    year: "2023",
    liveUrl: "https://tasif-hossan.blog/elysium/",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-15.png",
    description:
      "A highly customized professional business presentation site, focusing on smooth transitions, branding colors, and contact form validation.",
    challenges:
      "Modifying core PHP files of a premium parent theme without breaking layout consistency or losing child overrides on update.",
    improvements:
      "Isolate all changes into a child theme hierarchy and manage hooks through functions.php.",
  },
  "hello-taxi": {
    name: "Hello-Taxi",
    title: "Web Design & Development",
    category: "HTML5 / CSS / JS",
    techStack: "HTML5, CSS3, JS, Bootstrap, Google Maps API",
    client: "Hello-Taxi Local Agency",
    year: "2023",
    liveUrl: "https://tasif-hossan.blog/hello-taxi/",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-10.png",
    description:
      "A responsive portal layout for taxi services, integrating ride cost calculator estimates and interactive Google Maps pickup pin selections.",
    challenges:
      "Accurately calculating driving routes and pricing estimates using distance APIs without incurring high usage fees.",
    improvements:
      "Develop a custom local caching system for common coordinates queries to avoid duplicate API requests.",
  },
  vespa: {
    name: "Vespa",
    title: "Wp Theme customization",
    category: "WordPress & WooCommerce",
    techStack: "WordPress, Elementor, Vespa Custom Theme, CSS3",
    client: "Vespa Showroom Owner",
    year: "2023",
    liveUrl: "https://www.youtube.com/watch?v=yRxtKOcavLU",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-8.png",
    description:
      "A product gallery showcase page designed for bike models and specifications, featuring contact lead sheets and high-resolution media sliders.",
    challenges:
      "Styling responsive, aligned vertical tables to present bicycle specs uniformly across smartphones and desktops.",
    improvements:
      "Incorporate a dynamic model comparison chart enabling clients to inspect specs side-by-side.",
  },
  newsportal: {
    name: "Newsportal",
    title: "WordPress Customization",
    category: "WordPress & WooCommerce",
    techStack: "WordPress, Newspaper Theme, PHP, MySQL",
    client: "Newsportal Blogger Agency",
    year: "2023",
    liveUrl: "https://tasif-hossan.blog/",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-11.png",
    description:
      "A customized blogging dashboard configured with dynamic widget sidebars, ad spaces integration, and category page layouts.",
    challenges:
      "Structuring clean navigation maps for over 100 article category links without cluttering mobile menu viewports.",
    improvements:
      "Set up responsive mega-menus to categorize links under dynamic hover columns.",
  },
  "serene-escapes": {
    name: "SERENE ESCAPES",
    title: "Web Design",
    category: "HTML5 / CSS / JS",
    techStack: "HTML5, CSS3, JavaScript, Vanilla CSS Grid",
    client: "Serene Escapes Travel Team",
    year: "2023",
    liveUrl: "https://tasifhossan.github.io/SERENE-ESCAPES-Homepage/",
    githubUrl: "https://github.com/tasifhossan/SERENE-ESCAPES-Homepage",
    image: "assets/images/project/img-5.png",
    description:
      "A modern, premium travel landing page featuring glassmorphism header cards, grid gallery showcases, and smooth responsive hover animations.",
    challenges:
      "Aligning complex overlapping grids for travel booking cards without resorting to rigid absolute spacing values.",
    improvements:
      "Transform the page into a dynamic booking platform using MERN backend stacks.",
  },
  maxon: {
    name: "Maxon",
    title: "Premium Theme Design",
    category: "HTML5 / CSS / JS",
    techStack: "HTML5, CSS3, JavaScript, Swiper.js, jQuery",
    client: "Maxon Agency Studio",
    year: "2023",
    liveUrl: "https://tasif-hossan.blog/maxon/",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-14.png",
    description:
      "A premium corporate presentation layout styled with grid design schemes, interactive service sliders, and contact submission blocks.",
    challenges:
      "Optimizing assets delivery scripts to pass Google PageSpeed audit requirements with scores above 90.",
    improvements:
      "Implement critical path inline styling and load custom fonts asynchronously.",
  },
  tinyone: {
    name: "TinyOne",
    title: "Web Design",
    category: "HTML5 / CSS / JS",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap 5",
    client: "TinyOne SaaS Product",
    year: "2023",
    liveUrl: "https://tasifhossan.github.io/Tinyone-Landing-page/",
    githubUrl: "https://github.com/tasifhossan/Tinyone-Landing-page",
    image: "assets/images/project/img-4.png",
    description:
      "A clean, minimalistic promotional landing page styled for a mobile application startup, displaying feature lists, mockups, and client contact options.",
    challenges:
      "Rendering crisp SVG vector elements and preventing layout distortion on ultra-wide desktop monitors.",
    improvements:
      "Incorporate automated layout unit tests utilizing cypress scripts.",
  },
  "e-school": {
    name: "E-School",
    title: "Web Design",
    category: "HTML5 / CSS / JS",
    techStack: "HTML5, CSS3, JavaScript, Flexbox",
    client: "e-Learning Org",
    year: "2023",
    liveUrl: "https://tasifhossan.github.io/E-School-Landing-page/",
    githubUrl: "https://github.com/tasifhossan/E-School-Landing-page",
    image: "assets/images/project/img-3.png",
    description:
      "A user-friendly landing page layout for online education platforms, featuring course cards, registration buttons, and success history statistics.",
    challenges:
      "Maintaining a responsive horizontal card alignment on medium tablet devices without truncating courses titles.",
    improvements:
      "Build interactive client-side course category search and filter functionality.",
  },
  webfolio: {
    name: "Webfolio",
    title: "Elementor Page Builder",
    category: "WordPress & WooCommerce",
    techStack: "WordPress, Elementor, Astra, CSS3",
    client: "Freelancer Webfolio",
    year: "2023",
    liveUrl: "https://tasif-hossan.blog/",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-17.png",
    description:
      "A personal blog and agency style page created using Elementor widgets, featuring interactive slider cards, testimonials, and custom icons.",
    challenges:
      "Resolving DOM size bloat and nested column layouts created by default Elementor element templates.",
    improvements:
      "Re-code custom layouts using clean custom HTML blocks inside Elementor templates.",
  },
  minimo: {
    name: "Minimo",
    title: "Web Design",
    category: "HTML5 / CSS / JS",
    techStack: "HTML5, CSS3, JavaScript, Vanilla layouts",
    client: "Minimo Personal Brand",
    year: "2023",
    liveUrl: "https://tasifhossan.github.io/Minimo/",
    githubUrl: "https://github.com/tasifhossan",
    image: "assets/images/project/img-7.png",
    description:
      "A clean, typography-focused blog template styled with minimal visual distractions, wide margins, and high-readability fonts.",
    challenges:
      "Designing a balanced dark/light mode transition without layout stutter during dynamic style shifts.",
    improvements:
      "Implement native CSS variable bindings and state memory in local storage.",
  },
  "bubble-bash": {
    name: "BUBBLE BASH",
    title: "Web Design",
    category: "HTML5 / CSS / JS",
    techStack: "HTML5, CSS3, JavaScript, AOS animations",
    client: "Bubble Bash Gaming App",
    year: "2023",
    liveUrl: "https://tasifhossan.github.io/BUBBE-BASH-Landing-page/",
    githubUrl: "https://github.com/tasifhossan/BUBBE-BASH-Landing-page",
    image: "assets/images/project/img-6.png",
    description:
      "A colorful, vibrant promotional landing page showcasing mobile game features, characters grids, review highlights, and app store download links.",
    challenges:
      "Configuring micro-animations on interactive character cards to respond dynamically without delaying user scroll frames.",
    improvements:
      "Develop interactive mini-game demo directly playable in-browser using WebGL canvas elements.",
  },
  nipro: {
    name: "Nipro",
    title: "Web Design",
    category: "HTML5 / CSS / JS",
    techStack: "HTML5, CSS3, JavaScript",
    client: "Nipro Medical Brand",
    year: "2023",
    liveUrl: "https://tasifhossan.github.io/Nipro/",
    githubUrl: "https://github.com/tasifhossan/Nipro",
    image: "assets/images/project/img-21.png",
    description:
      "A clean and professional product landing page for a medical equipment brand, highlighting product categories, company values, and contact information.",
    challenges:
      "Presenting dense medical product information in a visually appealing layout while maintaining clarity and accessibility standards.",
    improvements:
      "Integrate a product catalogue search with live filtering and PDF datasheet download functionality.",
  },
  landmarkbd: {
    name: "LandMarkBD",
    title: "Real Estate Website",
    category: "HTML5 / CSS / JS",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap",
    client: "LandMarkBD Real Estate",
    year: "2024",
    liveUrl: "https://tasifhossan.github.io/LandMarkBD/",
    githubUrl: "https://github.com/tasifhossan/LandMarkBD",
    image: "assets/images/project/img-19.png",
    description:
      "A modern real estate listing website for Bangladeshi properties, featuring property grid cards, location filters, and agent contact forms.",
    challenges:
      "Building a flexible property card grid that adapts cleanly from large desktop views to compact mobile screens without losing key listing details.",
    improvements:
      "Add a dynamic map-based property search using Leaflet.js and integrate a backend property management dashboard.",
  },
  shopsyfy: {
    name: "Shopsyfy",
    title: "eCommerce Store",
    category: "HTML5 / CSS / JS",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap",
    client: "Shopsyfy eCommerce Brand",
    year: "2024",
    liveUrl: "https://tasifhossan.github.io/Shopsyfy",
    githubUrl: "https://github.com/tasifhossan/Shopsyfy",
    image: "assets/images/project/img-20.png",
    description:
      "A stylish online shopping storefront with product listing grids, category navigation, wishlist interactions, and a streamlined cart checkout flow.",
    challenges:
      "Designing a responsive product grid that resizes fluidly while keeping card proportions and text truncation consistent across device widths.",
    improvements:
      "Connect to a real backend API for live product inventory and implement local storage-based persistent cart functionality.",
  },
  bitehouse: {
    name: "BiteHouse",
    title: "Restaurant Website",
    category: "React.js / Next.js",
    techStack: "Next.js, React, Tailwind CSS, Vercel",
    client: "Restaurant Brand",
    year: "2024",
    liveUrl:
      "https://bitehouse-restaurant-r9bnqz55q-md-tasif-hossans-projects.vercel.app/",
    githubUrl: "https://github.com/tasifhossan/BiteHouse-Restaurant",
    image: "assets/images/project/img-18.png",
    description:
      "A modern, full-featured restaurant website with a dynamic menu system, online reservation flow, gallery showcase, and contact integration — built with Next.js for blazing-fast server-side rendering.",
    challenges:
      "Crafting a smooth, animated menu browsing experience with complex category filtering while maintaining sub-second page load times on Vercel's edge network.",
    improvements:
      "Integrate a real-time order tracking dashboard and payment gateway support for seamless in-house online ordering.",
  },
};
