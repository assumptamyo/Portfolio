import Reveal from './Reveal.jsx';

export default function SectionHeader({ index, title, subtitle }) {
  return (
    <Reveal className="section-header">
      <div className="eyebrow-row">
        <span>// {index}</span>
        <span className="eyebrow-line" />
      </div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}
