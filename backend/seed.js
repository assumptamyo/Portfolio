import mongoose from 'mongoose';
import Project from './models/Project.js';
import Skill from './models/Skill.js';
import Certification from './models/Certification.js';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

const skillGroups = {
  Languages: ['JavaScript', 'Python', 'Java', 'C++', 'C#'],
  Frontend: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Vite'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
  'Databases & Tools': ['MongoDB', 'MongoDB Atlas', 'Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'VS Code'],
};

const skills = Object.entries(skillGroups)
  .flatMap(([group, names]) => names.map((name) => ({ name, group })))
  .map((s, i) => ({ ...s, order: i }));

// Images are placeholders — swap in real screenshots of each project (frontend/public/images)
const projects = [
  {
    title: 'OfficeEase',
    category: 'E-Learning Platform',
    description:
      'A localized e-learning platform teaching Microsoft Word, Excel and PowerPoint, built for students in Myanmar with limited access to courses.',
    highlights: [
      'Turned book-based curricula into compact, sequential digital lessons',
      'Research paper published in IJRTI (Vol. 11, Issue 9)',
    ],
    image: '/images/project4.jpg',
    tags: ['REACT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'TAILWIND'],
  },
  {
    title: 'Unfazed',
    category: 'SaaS for Therapists',
    description:
      'A SaaS platform for therapists with real-time dashboards, secure authentication, OTP verification and integrated chat — built during my Unlox internship.',
    highlights: [
      'Secure auth with OTP verification',
      'Third-party API integrations and payment gateway workflows',
    ],
    image: '/images/project3.jpg',
    tags: ['REACT', 'NODE.JS', 'EXPRESS', 'MONGODB'],
  },
  {
    title: 'Don Coffee Shop',
    category: 'E-Commerce',
    description:
      'A full-stack e-commerce app for coffee-shop menu management and product sales, with an interactive customer feedback section.',
    highlights: ['Menu & product management', 'Comments with dynamic like / react buttons'],
    image: '/images/project2.jpg',
    tags: ['REACT', 'NODE.JS', 'EXPRESS', 'MONGODB'],
  },
].map((p, i) => ({ ...p, order: i }));

// Add `image: '/certificates/<file>.jpg'` once the photo is in frontend/public/certificates
const certifications = [
  {
    title: 'Development of a Localized E-Learning Platform for Microsoft Office Tool',
    type: 'Publication',
    issuer: 'International Journal for Research Trends and Innovation (IJRTI)',
    date: 'Sep 2026',
    description: 'Research paper published in Volume 11, Issue 9.',
  },
  {
    title: 'Unlox Edge Certification — Web Development',
    type: 'Certificate',
    issuer: 'Unlox × Outpro India',
    date: 'Oct 2026',
    description: 'Awarded on completing the Job Bridge Program.',
  },
  {
    title: 'Hult Prize On-Campus — Winning Team',
    type: 'Award',
    issuer: 'Parul University',
    date: '2023 – 2024',
    description: 'Member of the winning team at the Hult Prize On-Campus Program.',
  },
  {
    title: 'Web Wizards (Cosmos) — Projections',
    type: 'Event',
    issuer: "Parul University · Gujarat's largest tech fest",
    date: 'Feb 2024',
    description: 'Participated in the Web Wizards web development event.',
  },
].map((c, i) => ({ ...c, order: i }));

await mongoose.connect(MONGO_URI);
await Promise.all([Skill.deleteMany(), Project.deleteMany(), Certification.deleteMany()]);
await Skill.insertMany(skills);
await Project.insertMany(projects);
await Certification.insertMany(certifications);
console.log(`Seeded ${skills.length} skills, ${projects.length} projects, ${certifications.length} certifications`);
await mongoose.disconnect();
