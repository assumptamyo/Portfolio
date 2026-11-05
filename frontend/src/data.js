// Static profile content. Skills, projects and certifications come from MongoDB (see backend/seed.js).

export const profile = {
  name: 'Myo Thandar',
  title: 'Full-Stack MERN Developer & CSE Undergraduate',
  location: 'Vadodara, India',
  from: 'Pyin Oo Lwin, Myanmar',
  email: 'assumptamyo@gmail.com',
  github: 'https://github.com/assumptamyo',
  linkedin: 'https://linkedin.com/in/assumptamyo',
  cv: '/Myo-Thandar-CV.pdf',
};

export const roles = ['MERN Stack Developer', 'React Developer', 'Node.js & API Builder', 'CSE Undergraduate'];

export const stats = [
  { value: 3, suffix: '+', label: 'Full-stack projects' },
  { value: 1, suffix: '', label: 'Research publication' },
  { value: 3, suffix: ' mo', label: 'Industry internship' },
  { value: 8.0, suffix: '', label: 'CGPA / 10', decimals: 1 },
];

export const experience = [
  {
    role: 'Junior Web Developer (Intern)',
    company: 'Unlox Company · Job Bridge Program',
    period: 'Jul 2026 — Sep 2026',
    points: [
      'Completed a 3-month internship and project-based learning programme focused on enterprise-grade web applications.',
      'Built real production features for Unfazed, a SaaS platform for therapists.',
      'Implemented secure authentication and third-party API integrations.',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
];

export const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  school: 'Parul University, Vadodara',
  period: 'Expected May 2027',
  grade: 'CGPA 8.0 / 10',
};
