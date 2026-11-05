import { profile, roles, stats } from "../data.js";
import { useCountUp, useTypewriter } from "../animations.js";

const orbitTech = ["React", "Node", "Mongo", "Express"];

function Stat({ value, suffix, label, decimals = 0 }) {
  const [ref, current] = useCountUp(value);
  return (
    <div className="stat" ref={ref}>
      <div className="stat-value">
        {current.toFixed(decimals)}
        <span>{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <div className="hero section" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="eyebrow-row hero-in" style={{ "--i": 0 }}></div>

      <div className="hero-grid">
        <div>
          <p className="hero-hello hero-in" style={{ "--i": 1 }}>
            Hi, I'm {profile.name}{" "}
          </p>
          <h1 className="hero-title hero-in" style={{ "--i": 2 }}>
            <span>Full-Stack</span>
            <span className="accent">MERN</span>
            <span>Developer</span>
          </h1>
          <p
            className="typewriter hero-in"
            style={{ "--i": 3 }}
            aria-label={roles.join(", ")}
          >
            <span className="prompt">&gt;</span> {role}
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="hero-content hero-in" style={{ "--i": 4 }}>
            Final-year CSE undergraduate who builds scalable full-stack web apps
            with MongoDB, Express, React and Node.js — pairing solid backend
            engineering with clean, responsive interfaces.
          </p>
          <div className="hero-actions hero-in" style={{ "--i": 5 }}>
            <a href="#projects" className="hire-btn">
              VIEW PROJECTS
            </a>
            <a href={profile.cv} className="ghost-btn" download>
              DOWNLOAD CV ↓
            </a>
          </div>
        </div>

        <div className="hero-visual hero-in" style={{ "--i": 3 }}>
          <div className="orbit" aria-hidden="true">
            {orbitTech.map((tech, i) => (
              <span
                className="orbit-chip"
                key={tech}
                style={{ "--angle": `${i * 90}deg` }}
              >
                <span>{tech}</span>
              </span>
            ))}
          </div>
          <div className="hero-img">
            <img src="/images/no-bg.png" alt={profile.name} />
          </div>
        </div>
      </div>

      <div className="stats">
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span />
      </a>
    </div>
  );
}
