// ============================================================
// PORTFOLIO CONTENT — Anshul Kumar
// ============================================================

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "training", title: "Training" },
  { id: "certificates", title: "Certificates" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

// ---- HERO SECTION ----
export const heroData = {
  greeting: "👋 Welcome to my portfolio",
  name: "Anshul Kumar",
  roles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Java & Python Enthusiast",
    "Problem Solver",
  ],
  description:
    "I build secure, scalable web applications using the MERN stack. Passionate about clean architecture, RESTful APIs, and delivering impactful digital solutions.",
  stats: [
    { num: "2+", label: "Projects" },
    { num: "5+", label: "Technologies" },
    { num: "5+", label: "Certifications" },
  ],
  // ⚠️ USER: Replace with your Google Drive / Dropbox direct-download link to your CV PDF
  resumeLink: "/Anshul_12325598.pdf",
  // ⚠️ USER: Replace with your Google Drive / Dropbox view link to your CV PDF
  resumeViewLink: "/Anshul_12325598.pdf",
};

// ---- ABOUT SECTION ----
export const aboutData = {
  emoji: "👨‍💻",
  bio: [
    "Hi, I'm Anshul Kumar — a Computer Science undergraduate at Lovely Professional University, Punjab. I specialize in full-stack web development using the MERN stack.",
    "I've built production-grade projects including a Doctor Appointment System with multi-role authentication and a Supplier Management System with secure JWT-based governance.",
    "Beyond coding, I hold certifications from Oracle Cloud Infrastructure and Udemy, and completed summer training in Data Structures & Algorithms with an A grade.",
  ],
  details: [
    { icon: "📍", label: "Location", value: "Punjab, India" },
    { icon: "🎓", label: "Degree", value: "B.Tech CSE — LPU (2023–Present)" },
    { icon: "💼", label: "Status", value: "Open to Opportunities" },
    { icon: "📧", label: "Email", value: "anshulkashyap118@gmail.com" },
  ],
};

// ---- SKILLS SECTION ----
export const skillsData = [
  {
    icon: "💻",
    title: "Languages",
    tags: [
      { label: "Java", type: "primary" },
      { label: "JavaScript", type: "primary" },
      { label: "Python", type: "primary" },
      { label: "C++", type: "primary" },
    ],
  },
  {
    icon: "⚛️",
    title: "Frameworks",
    tags: [
      { label: "React.js", type: "primary" },
      { label: "Node.js", type: "primary" },
      { label: "Express.js", type: "primary" },
      { label: "Tailwind CSS", type: "primary" },
    ],
  },
  {
    icon: "🗄️",
    title: "Databases & Tools",
    tags: [
      { label: "MongoDB", type: "accent" },
      { label: "MySQL", type: "accent" },
      { label: "JWT", type: "accent" },
      { label: "REST APIs", type: "accent" },
      { label: "Docker", type: "accent" },
      { label: "GitHub", type: "accent" },
    ],
  },
  {
    icon: "🧠",
    title: "Learning & Problem Solving",
    tags: [
      { label: "Data Structures", type: "secondary" },
      { label: "Algorithms", type: "secondary" },
      { label: "DSA (C++)", type: "secondary" },
      { label: "Problem Solving", type: "secondary" },
      { label: "LeetCode", type: "secondary" },
    ],
  },
  {
    icon: "🌟",
    title: "Soft Skills",
    tags: [
      { label: "Quick Learner", type: "soft" },
      { label: "Team Player", type: "soft" },
      { label: "Leadership", type: "soft" },
      { label: "Adaptability", type: "soft" },
    ],
  },
];

// ---- PROJECTS SECTION ----
export const projectsData = [
  {
    id: 1,
    emoji: "🏥",
    title: "MedLink",
    description:
      "A multi-role healthcare booking platform enabling secure access for patients, doctors, and admins. Features automated slot allocation, cancellation constraints, and Cashfree payment integration.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Cashfree API"],
    category: "fullstack",
    liveLink: "#",
    codeLink: "https://github.com/AnshulKumar21/Doctor-Appointment-System",
    type: "Personal Project",
    bullets: [
      "Multi-role authentication flows for patients, doctors & admins",
      "Intelligent appointment scheduling with automated slot allocation",
      "Cashfree payment integration with state management",
      "Optimized RESTful endpoints and MongoDB schemas",
    ],
  },
  {
    id: 2,
    emoji: "🏭",
    title: "Supplier Management System",
    description:
      "A secure supplier lifecycle backend for onboarding, profile maintenance, and administrative governance. Enforced data protection via JWT authorization and validation middleware.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    category: "fullstack",
    // ⚠️ USER: Add your live demo link here
    liveLink: "#",
    // ⚠️ USER: Add your GitHub repo link here
    codeLink: "https://github.com/AnshulKumar21/Supplier-Mangement-System",
    type: "Personal Project",   // Options: "Personal Project" | "Academic Project" | "DSA Project"
    bullets: [
      "Supplier onboarding, profile management & admin governance",
      "JWT-based authorization with validation middleware",
      "Scalable MongoDB collections for centralized tracking",
      "Analytical reporting on supplier data",
    ],
  },
  {
    id: 3,
    emoji: "🎟️",
    title: "Eventora",
    description:
      "A full-stack MERN event management platform where users can browse, register, and pay for events natively. Features an admin dashboard for organizers to create and manage free & paid events, with manual booking confirmation and payment tracking.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer", "Tailwind CSS"],
    category: "fullstack",
    liveLink: "#",
    codeLink: "https://github.com/AnshulKumar21/Eventora",
    type: "Personal Project",
    bullets: [
      "JWT & bcrypt auth with mandatory 2FA Email OTP for registration and booking",
      "Role-based access — Admin (create/manage events, confirm bookings) & User (browse/book/cancel)",
      "Smart booking queue: all requests enter pending state with overbooking protection",
      "Admin analytics dashboard — live Pending Requests, Total Revenue & Confirmed Clients",
      "Automated Nodemailer email notifications on booking confirmation",
    ],
  },

  // ================================================================
  // ✅ TEMPLATE — Copy this block to add a new project
  // ================================================================
  // {
  //   id: 3,                          ← increment number each time
  //   emoji: "🚀",                    ← or use image: "/project.png"
  //   title: "Project Name",
  //   description: "2-3 line summary of what the project does.",
  //   tags: ["React", "Node.js", "MongoDB"],
  //   category: "fullstack",          ← "fullstack" | "frontend" | "backend"
  //   type: "Personal Project",       ← "Personal Project" | "Academic Project" | "DSA Project"
  //   liveLink: "#",                  ← keep "#" if not deployed
  //   codeLink: "https://github.com/AnshulKumar21/repo-name",
  //   bullets: [
  //     "Key feature or achievement 1",
  //     "Key feature or achievement 2",
  //     "Key feature or achievement 3",
  //   ],
  // },
  // ================================================================
];

export const projectCategories = ["all", "fullstack"];
// ↑ To add a new filter button, just add a string here.
// Example: ["all", "fullstack", "ml", "os", "dsa"]
// Then set the matching category on your project: category: "ml"

// ---- TRAINING SECTION ----
export const trainingData = [
  {
    icon: "⚙️",
    title: "Data Structures & Algorithms using C++",
    org: "Lovely Professional University",
    period: "July 2025",
    grade: "A Grade",
    desc: "Implemented foundational DSA in C++. Developed algorithmic problem-solving skills using Recursion and Backtracking, including building a fully functional Sudoku Solver. Improved coding efficiency by analyzing and optimizing time and space complexities in multiple problem scenarios.",
    certLink: "#",
    bullets: [
      "Developed algorithmic problem-solving skills using foundational Data Structures & Algorithms in C++",
      "Implemented efficient algorithmic solutions using Recursion and Backtracking, including building a Sudoku Solver",
      "Improved coding efficiency by analyzing and optimizing time and space complexities",
    ],
  },
];

// ---- CERTIFICATES SECTION ----
export const certificatesData = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "September 2025",
    icon: "☁️",
    // ⚠️ USER: Add your certificate verify link here
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=32D89D3B3E108EACC6F9FB4328A39C06E20FDD4EF76D0FAE28D4B452D97BB663",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    date: "September 2025",
    icon: "📊",
    // ⚠️ USER: Add your certificate verify link here
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=86D49F44F51B6D872F4B084697DE64939C11B942FD39AFDE1B3CC1C532D75759",
  },
  {
    title: "Build Generative AI Apps & Solutions with No-Code Tools",
    issuer: "Infosys Springboard",
    date: "August 2025",
    icon: "🤖",
    // ⚠️ USER: Add your certificate verify link here
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_014157683688415232146/1-c9834fd4-397d-444e-be7e-5b806e8d28f5.pdf",
  },
  {
    title: "Data Structures and Algorithms using C++",
    issuer: "LPU Training",
    date: "July 2025",
    icon: "🧩",
    // ⚠️ USER: Add your certificate verify link here
    link: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12325598_844_20_08_2025.pdf?_gl=1*1gvohq4*_gcl_au*MTQ1Njg1MDAzMy4xNzcyMTY1MjQ5",
  },
  {
    title: "The Complete Python Developer",
    issuer: "Udemy",
    date: "January 2024",
    icon: "🐍",
    // ⚠️ USER: Add your certificate verify link here
    link: "https://www.udemy.com/certificate/UC-d49335fc-4ae2-446b-bed1-069c19d2dad5/",
  },
];

// ---- EDUCATION SECTION ----
export const educationData = [
  {
    icon: "🎓",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology — Computer Science & Engineering",
    score: "CGPA: 6.1",
    period: "Aug 2023 – Present",
  },
  {
    icon: "🏫",
    institution: "Govt. Sen. Sec. School",
    location: "Jamta, Nahan, Himachal Pradesh",
    degree: "Intermediate (12th)",
    score: "Percentage: 63%",
    period: "Apr 2019 – Mar 2021",
  },
  {
    icon: "🏫",
    institution: "Govt. Sen. Sec. School",
    location: "Jamta, Nahan, Himachal Pradesh",
    degree: "Matriculation (10th)",
    score: "Percentage: 90%",
    period: "Apr 2017 – Mar 2019",
  },
];

// ---- CONTACT SECTION ----
export const contactData = {
  title: "Let's Work Together",
  description:
    "I'm actively looking for opportunities in full-stack development. If you have a project or opening that fits my skills, I'd love to connect!",
  // ⚠️ USER: EmailJS credentials — sign up at https://emailjs.com and replace these values
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },
  links: [
    {
      icon: "✉️",
      iconBg: "rgba(124,58,237,0.15)",
      label: "Email",
      value: "anshulkashyap118@gmail.com",
      href: "mailto:anshulkashyap118@gmail.com",
    },
    {
      icon: "💼",
      iconBg: "rgba(6,182,212,0.15)",
      label: "LinkedIn",
      value: "linkedin.com/in/anshu121",
      href: "https://linkedin.com/in/anshu121",
    },
    {
      icon: "🐙",
      iconBg: "rgba(245,158,11,0.15)",
      label: "GitHub",
      value: "github.com/AnshulKumar21",
      href: "https://github.com/AnshulKumar21",
    },
    {
      icon: "📱",
      iconBg: "rgba(239,68,68,0.15)",
      label: "Phone",
      value: "+91 7876511424",
      href: "tel:+917876511424",
    },
  ],
};

// ---- SOCIAL LINKS (FOOTER) ----
export const socials = [
  { icon: "🐙", label: "GitHub", href: "https://github.com/AnshulKumar21" },
  { icon: "💼", label: "LinkedIn", href: "https://linkedin.com/in/anshu121" },
  // ⚠️ USER: Replace with your actual LeetCode profile URL
  { icon: "🟡", label: "LeetCode", href: "https://leetcode.com/u/YOUR_USERNAME" },
  { icon: "✉️", label: "Email", href: "mailto:anshulkashyap118@gmail.com" },
];
