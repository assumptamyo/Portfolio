import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { API_URL } from '../api.js';

const empty = { name: '', email: '', subject: '', message: '' };

const links = [
  ['EMAIL', 'assumptamyo@gmail.com', 'mailto:assumptamyo@gmail.com'],
  ['LINKEDIN', 'linkedin.com/in/assumptamyo', 'https://linkedin.com/in/assumptamyo'],
  ['GITHUB', 'github.com/assumptamyo', 'https://github.com/assumptamyo'],
];

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ state: 'idle', text: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', text: '' });
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setForm(empty);
      setStatus({ state: 'success', text: data.message });
    } catch (err) {
      setStatus({ state: 'error', text: err.message || 'Could not send message.' });
    }
  };

  return (
    <section className="section contact" id="contact">
      <Reveal>
        <div className="eyebrow-row">// 06</div>
        <h2 className="hero-title">
          <span>Let's build</span>
          <span className="accent">something</span>
          <span>together</span>
        </h2>
        <p className="hero-content">
          I'm open to full-stack roles and select freelance projects. If you're building something exciting, let's talk.
        </p>
        {links.map(([label, text, href]) => (
          <div className="link-row" key={label}>
            <span className="link-label">{label}</span>
            <span className="link-dots" />
            <a href={href} target="_blank" rel="noreferrer">{text}</a>
          </div>
        ))}
        <div className="availability-box">
          <div className="availability-label">CURRENT AVAILABILITY</div>
          <div className="availability-text">Available immediately — open to full-time &amp; contract.</div>
        </div>
      </Reveal>

      <Reveal as="form" className="form-panel" onSubmit={handleSubmit} delay={150} variant="right">
        <div className="form-title">Send a Message</div>
        <div className="form-row">
          <label>
            <span className="field-label">NAME</span>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
          </label>
          <label>
            <span className="field-label">EMAIL</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
          </label>
        </div>
        <label>
          <span className="field-label">SUBJECT</span>
          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Let's work together" />
        </label>
        <label>
          <span className="field-label">MESSAGE</span>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required />
        </label>
        <button type="submit" className="btn-send" disabled={status.state === 'sending'}>
          {status.state === 'sending' ? 'SENDING…' : 'SEND MESSAGE'}
        </button>
        {status.text && <p className={`form-status ${status.state}`}>{status.text}</p>}
      </Reveal>
    </section>
  );
}
