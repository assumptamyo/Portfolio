import SectionHeader from './SectionHeader.jsx';
import Reveal from './Reveal.jsx';
import useApi from '../useApi.js';

const groupIcons = {
  Languages: '{ }',
  Frontend: '</>',
  Backend: '⚙',
  'Databases & Tools': '⛁',
};

export default function Skills() {
  const { data: skills, loading, error } = useApi('/api/skills');

  const groups = skills.reduce((acc, skill) => {
    (acc[skill.group] ||= []).push(skill);
    return acc;
  }, {});

  return (
    <section className="section" id="skills">
      <SectionHeader index="02" title="Technical Skills" subtitle="The tools I use to take an idea from database to deployed UI." />
      {loading && <p className="status">Loading skills…</p>}
      {error && <p className="status error">Couldn't load skills: {error}</p>}
      <div className="skill-groups">
        {Object.entries(groups).map(([group, items], gi) => (
          <Reveal className="skill-card" key={group} delay={gi * 120}>
            <div className="skill-card-head">
              <span className="skill-icon" aria-hidden="true">{groupIcons[group]}</span>
              <h3>{group}</h3>
              <span className="skill-count">{String(items.length).padStart(2, '0')}</span>
            </div>
            <div className="chips">
              {items.map((skill, i) => (
                <span className="chip" key={skill._id} style={{ '--i': i }}>{skill.name}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
