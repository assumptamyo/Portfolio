import SectionHeader from './SectionHeader.jsx';
import Reveal from './Reveal.jsx';
import useApi from '../useApi.js';

// Subtle 3D tilt that follows the cursor
function handleTilt(e) {
  const card = e.currentTarget;
  const { left, top, width, height } = card.getBoundingClientRect();
  const x = (e.clientX - left) / width - 0.5;
  const y = (e.clientY - top) / height - 0.5;
  card.style.setProperty('--rx', `${-y * 6}deg`);
  card.style.setProperty('--ry', `${x * 6}deg`);
}

function resetTilt(e) {
  e.currentTarget.style.setProperty('--rx', '0deg');
  e.currentTarget.style.setProperty('--ry', '0deg');
}

export default function Projects() {
  const { data: projects, loading, error } = useApi('/api/projects');

  return (
    <section className="section" id="projects">
      <SectionHeader index="04" title="Featured Projects" subtitle="Full-stack apps I've designed, built and shipped." />
      {loading && <p className="status">Loading projects…</p>}
      {error && <p className="status error">Couldn't load projects: {error}</p>}
      <div className="project-list">
        {projects.map((project, i) => (
          <Reveal as="article" className={`project ${i % 2 ? 'flip' : ''}`} key={project._id}>
            <div className="project-media" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
              <div className="thumb-index">{String(i + 1).padStart(2, '0')}</div>
              <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
            </div>
            <div className="project-info">
              <div className="used-tech">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              {project.highlights?.length > 0 && (
                <ul className="highlights">
                  {project.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              )}
              <div className="tags">
                {project.tags.map((tag) => <span className="tag-pill" key={tag}>{tag}</span>)}
              </div>
              {(project.liveUrl || project.repoUrl) && (
                <div className="project-links">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">LIVE DEMO ↗</a>}
                  {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">SOURCE CODE ↗</a>}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
