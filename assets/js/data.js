export const portfolioData = {
  name: "Victor Olagboye",
  role: "Web and Mobile Engineer",
  intro:
    "I build interfaces that feel calm on the surface and fast underneath, with thoughtful UX, maintainable architecture, and measurable outcomes.",
  highlight:
    "I pair product curiosity with engineering discipline, shipping polished features without introducing messy long-term debt.",
  metrics: [
    {
      value: "3+",
      label: "Years building products",
    },
    {
      value: "12+",
      label: "Projects launched",
    },
    {
      value: "100%",
      label: "Responsive-first workflow",
    },
  ],
  about:
    "I care about details users can feel: clean hierarchy, zero-confusion flows, and interfaces that respond quickly. My default mode is building in small iterations, validating with real usage, and refining until the product feels inevitable.",
  cta: {
    primary: {
      label: "Let's Talk",
      href: "#contact",
    },
    secondary: {
      label: "See Projects",
      href: "#projects",
    },
  },
  devSignature: {
    title: "// dev-log",
    lines: [
      "const mindset = 'ship, measure, refine';",
      "optimize('clarity', 'speed', 'reliability');",
      "deploy({ quality: 'non-negotiable' });",
    ],
  },
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "Accessibility",
];

export const projects = [
  {
    id: "bookstore",
    title: "React-Native BookStore App",
    description:
      "A social reading platform where users discover books, save favorites, and share reviews in a smooth mobile-first experience.",
    longDescription:
      "Designed as a community-first reading product with quick content discovery and frictionless review flows. Focused on reducing interaction cost across the entire browse-to-review path.",
    image: "assets/project1.jpg",
    alt: "Bookstore mobile app interface preview",
    tech: ["React Native", "Expo", "Context API"],
    year: "2025",
    role: "Mobile Developer",
    highlights: [
      "Built reusable card and list primitives for consistent rendering",
      "Implemented lightweight state orchestration for favorites and reviews",
      "Tuned loading and image behavior for low-bandwidth conditions",
    ],
    liveUrl: "https://github.com/davetech07/React-Native_BookStore-App.git",
    codeUrl: "https://github.com/davetech07/React-Native_BookStore-App.git",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "An offline-first personal finance app for quick expense logging, category summaries, and trend tracking.",
    longDescription:
      "Built around daily usage speed. The app emphasizes low-friction entries and immediate visual feedback so users can maintain financial awareness without cognitive overhead.",
    image: "assets/project2.png",
    alt: "Expense tracker dashboard preview",
    tech: ["React Native", "Expo", "AsyncStorage"],
    year: "2025",
    role: "Mobile Developer",
    highlights: [
      "Implemented offline-first local storage with resilient update flow",
      "Created category rollups and trend summaries for weekly insights",
      "Designed compact UI states for quick one-hand interactions",
    ],
    liveUrl: "https://github.com/davetech07/Expense-Tracker.git",
    codeUrl: "https://github.com/davetech07/Expense-Tracker.git",
  },
  {
    id: "secure-notes",
    title: "SecureNotes",
    description:
      "A secure notes platform with protected routes, authentication, and a clean editor-focused workflow for managing personal notes.",
    longDescription:
      "A full-stack note experience that prioritizes privacy and focus. Authentication, protected routing, and editor flow were designed to keep users in a steady writing loop.",
    image: "assets/SecureNotes.png",
    alt: "Secure notes application preview",
    tech: ["React", "Node.js", "MongoDB"],
    year: "2026",
    role: "Full-stack Developer",
    highlights: [
      "Implemented auth and route guards across frontend and backend",
      "Built a structured notes model for reliable CRUD operations",
      "Shipped responsive editor and dashboard views with clear hierarchy",
    ],
    liveUrl: "https://secure-notes-six.vercel.app/",
    codeUrl: "https://github.com/davetech07",
  },
  {
    id: "lautech-chapel-website",
    title: "LAUTECH Chapel Website",
    description:
      "A multi-page church website for LAUTECH Interdenominational Chapel featuring programs, ministry units, leadership profiles, and contact flows.",
    longDescription:
      "Built to present chapel information clearly across desktop and mobile, with structured navigation for weekly/monthly programs, unit pages, media access, and giving/contact touchpoints. The implementation combines reusable design tokens and component styles with lightweight JavaScript modules for interactions like animated reveals, counters, gallery lightbox, and content utilities.",
    image: "https://lautechchapel.org.ng/assets/img/bg_image_1.png",
    alt: "LAUTECH Chapel homepage hero section",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    year: "2026",
    role: "Frontend Developer",
    highlights: [
      "Implemented a full multi-page information architecture for programs, leaders, ministry units, and media",
      "Built a consistent design system layer with reusable CSS variables and component styles",
      "Added interactive UX modules including scroll animations, counters, gallery lightbox, and enhanced navigation behavior",
    ],
    liveUrl: "https://lautechchapel.org.ng",
    codeUrl: "https://github.com/davetech07/Lautech-Chapel-Website.git",
  },
];

export const contactForm = {
  endpoint: "https://formspree.io/f/your-form-id",
  successMessage: "Message sent. Thanks for reaching out, I will reply soon.",
  errorMessage:
    "Could not send right now. Please try again or use email/WhatsApp.",
};

export const contactLinks = [
  {
    label: "Email",
    handle: "victorolagboye11@gmail.com",
    href: "mailto:victorolagboye11@gmail.com",
  },
  {
    label: "WhatsApp",
    handle: "+234 812 358 7842",
    href: "https://wa.me/2348123587842?text=Hello%20Victor%2C%20I%20came%20across%20your%20portfolio!",
  },
  {
    label: "GitHub",
    handle: "@davetech07",
    href: "https://github.com/davetech07",
  },
  {
    label: "LinkedIn",
    handle: "victor-olagboye",
    href: "https://linkedin.com/in/victor-olagboye",
  },
];
