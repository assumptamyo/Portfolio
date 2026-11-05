import { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import Reveal from './Reveal.jsx';
import useApi from '../useApi.js';

const typeIcons = { Publication: '📄', Certificate: '📜', Award: '🏆', Event: '⚡' };

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.title} />
        <figcaption>{item.title} · {item.issuer}</figcaption>
      </figure>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
    </div>
  );
}

export default function Achievements() {
  const { data: items, loading, error } = useApi('/api/certifications');
  const [open, setOpen] = useState(null);

  return (
    <section className="section alt" id="achievements">
      <SectionHeader index="05" title="Certifications & Achievements" subtitle="Research, certifications and recognition along the way." />
      {loading && <p className="status">Loading…</p>}
      {error && <p className="status error">Couldn't load achievements: {error}</p>}
      <div className="cert-grid">
        {items.map((item, i) => (
          <Reveal className="cert-card" key={item._id} delay={(i % 2) * 120}>
            {item.image && (
              <button className="cert-thumb" onClick={() => setOpen(item)} aria-label={`View ${item.title}`}>
                <img src={item.image} alt="" loading="lazy" />
                <span>VIEW ↗</span>
              </button>
            )}
            <div className="cert-body">
              <div className="cert-meta">
                <span className={`cert-type type-${item.type.toLowerCase()}`}>
                  <span aria-hidden="true">{typeIcons[item.type]}</span> {item.type}
                </span>
                <span className="cert-date">{item.date}</span>
              </div>
              <h3 className="cert-title">{item.title}</h3>
              <div className="cert-issuer">{item.issuer}</div>
              {item.description && <p className="cert-desc">{item.description}</p>}
              {item.link && <a className="cert-link" href={item.link} target="_blank" rel="noreferrer">READ MORE ↗</a>}
            </div>
          </Reveal>
        ))}
      </div>
      {open && <Lightbox item={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
