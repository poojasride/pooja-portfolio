// Single source of truth for portfolio content.
// Edit here to update Hero, About, Skills, Experience, Projects, Contact.

export const profile = {
  name: "Pooja Sri S",
  role: "Node.js / MERN Stack Developer",
  tagline:
    "I build scalable, secure full-stack applications — robust APIs, clean React interfaces, deployed on AWS.",
  location: "Erode, Tamil Nadu, India",
  email: "pooja.sri.06.2001@gmail.com",
  phone: "+91 96778 69055",
  linkedin: "https://linkedin.com/in/poojasri-s-developer",
  github: "https://github.com/poojasride",
  resumeUrl: "#", // drop your resume PDF in /public and link here
};

export const about = {
  summary: `Results-driven Node.js / MERN Stack Developer with 2+ years of professional
experience building, deploying and maintaining scalable full-stack web
applications. Proficient in robust backend architectures with Node.js and
Express.js, and responsive interfaces with React.js. Strong expertise in
secure RESTful APIs, database performance optimization and JWT-based
authentication. Passionate about clean code and modern DevOps workflows.`,
  highlights: [
    { label: "Years of experience", value: "2+" },
    { label: "API response improved", value: "30%" },
    { label: "Production projects", value: "5+" },
    { label: "Tech stack", value: "MERN" },
  ],
};

// Skills with proficiency (used to drive animated progress bars).
export const skills = [
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "Fastify", level: 75 },
      { name: "TypeScript", level: 82 },
      { name: "REST APIs / Microservices", level: 88 },
    ],
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: [
      { name: "React.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Redux", level: 78 },
      { name: "HTML5 / CSS3", level: 90 },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    items: [
      { name: "MongoDB / Mongoose", level: 88 },
      { name: "PostgreSQL", level: 78 },
      { name: "MySQL", level: 75 },
      { name: "Redis (Caching)", level: 72 },
    ],
  },
  {
    category: "Cloud / DevOps",
    icon: "Cloud",
    items: [
      { name: "AWS (S3, EC2)", level: 80 },
      { name: "CI/CD Pipelines", level: 75 },
      { name: "Git / GitHub", level: 90 },
      { name: "Postman / Swagger", level: 85 },
    ],
  },
];

export const experience = [
  {
    company: "Skematix Technology Pvt Ltd",
    role: "Node.js Developer",
    period: "Sep 2023 – Dec 2024",
    location: "India",
    bullets: [
      "Developed full-stack features with React.js frontend and Node.js / Express.js backend services.",
      "Architected secure RESTful APIs ensuring seamless client–server integration.",
      "Optimized backend processes and database queries — improved API response time by 30%.",
      "Implemented JWT authentication, session management and role-based access control (RBAC).",
      "Integrated AWS S3 for highly available, secure file uploads and cloud storage.",
    ],
  },
  {
    company: "Adloggs Technology Pvt Ltd",
    role: "Node.js Developer",
    period: "Jul 2022 – Jul 2023",
    location: "India",
    bullets: [
      "Engineered key features for the ‘Engaje’ e-commerce platform on the MERN stack.",
      "Built scalable backend microservices in Node.js + TypeScript for maintainability and type safety.",
      "Optimized MongoDB schemas — reduced redundancy and improved load performance.",
      "Managed Git/GitHub workflows and contributed to CI/CD deployment pipelines.",
    ],
  },
];

export const projects = [
  {
    title: "Personal Finance Manager",
    category: "Full-Stack",
    description:
      "Comprehensive personal finance tracker with full CRUD for income and expenses, plus a responsive dashboard for visualizing spending trends — secured by a Node.js backend.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/poojasride/personal-finance-manager-frontend",
    githubBackend:
      "https://github.com/poojasride/personal-finance-manager-backend",
    demo: "#",
  },
  {
    title: "E-commerce Web Application",
    category: "Full-Stack",
    description:
      "Full-stack MERN e-commerce platform with dynamic product management, cart logic and automated order processing. JWT-secured routes with strict admin/customer RBAC.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    github: "https://github.com/poojasride",
    demo: "#",
  },
  {
    title: "Movie Review Platform",
    category: "Frontend",
    description:
      "Modern, responsive UI inspired by Amazon Prime — dynamic content rendering, category-wise movie cards and rich hover interactions.",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/poojasride",
    demo: "#",
  },
];

export const projectCategories = ["All", "Full-Stack", "Frontend"];

export const certifications = [
  {
    title: "Full Stack Development Certification",
    issuer: "GUVI",
  },
  {
    title: "B.Sc Computer Science (First Class)",
    issuer: "LRG College of Arts and Science, Tiruppur · 2018 – 2021",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
