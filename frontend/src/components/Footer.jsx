import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <a href="#top" className="brand">
        MYO<span className="brand-dot">.</span>THANDAR
      </a>
      <div className="footer-meta">© {new Date().getFullYear()} · Built with MongoDB + Express + React + Node.js</div>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
