import SectionHeader from './SectionHeader.jsx';
import Reveal from './Reveal.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <section className="section alt split" id="experience">
      <SectionHeader index="03" title={<>Work<br />Experience</>} />
      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal className="timeline-item" key={job.role} delay={i * 150} variant="right">
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-period">{job.period}</div>
            <h3 className="timeline-role">{job.role}</h3>
            <div className="timeline-company">{job.company}</div>
            <ul>
              {job.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <div className="tags">
              {job.tags.map((tag) => <span className="tag-pill" key={tag}>{tag}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
