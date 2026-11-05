import SectionHeader from './SectionHeader.jsx';
import Reveal from './Reveal.jsx';
import { education, profile } from '../data.js';

const info = [
  ['Based in', profile.location],
  ['From', profile.from],
  ['Work Mode', 'Remote · Hybrid · On-site'],
  ['Availability', 'Immediately'],
];

export default function About() {
  return (
    <section className="section alt split" id="about">
      <SectionHeader index="01" title={<>About<br />Me</>} />
      <div>
        <Reveal as="p" className="lead">
          I'm a final-year Computer Science student and MERN stack developer who loves turning complex problems
          into clean, scalable software.
        </Reveal>
        <Reveal as="p" delay={100}>
          I specialise in full-stack architecture — React interfaces on the front, Node.js and Express APIs on the
          back, MongoDB underneath. I care about algorithmic problem-solving, clean code and practical solutions,
          and I have a foundation in AI/ML and Data Science that I'm keen to bring into real products.
        </Reveal>
        <Reveal as="p" delay={200}>
          Originally from Myanmar and now studying in India. Outside of code, I enjoy crocheting and travelling to
          new places.
        </Reveal>

        <div className="about-cards">
          <Reveal className="info-grid" delay={250}>
            {info.map(([label, value]) => (
              <div className="info-block" key={label}>
                <div className="info-label">{label}</div>
                <div className="info-value">{value}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="edu-card" delay={350} variant="right">
            <div className="edu-icon" aria-hidden="true">🎓</div>
            <div>
              <div className="edu-period">{education.period}</div>
              <div className="edu-degree">{education.degree}</div>
              <div className="edu-school">{education.school}</div>
              <div className="edu-grade">{education.grade}</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
