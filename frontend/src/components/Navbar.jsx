import { useEffect, useState } from 'react';
import { useActiveSection, useScrollProgress } from '../animations.js';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'];
const ids = links.map((l) => l.toLowerCase());

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);
  const progress = useScrollProgress();

  useEffect(() => setScrolled(progress > 0), [progress]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="brand">
        MYO THANDAR
      </a>
      <button className={`nav-toggle ${open ? 'open' : ''}`} aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <div className={`nav-menu ${open ? 'open' : ''}`}>
        <ul>
          {links.map((link, i) => (
            <li key={link}>
              <a
                className={`nav-link ${active === ids[i] ? 'active' : ''}`}
                href={`#${ids[i]}`}
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hire-btn" onClick={() => setOpen(false)}>HIRE ME</a>
      </div>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
    </nav>
  );
}
