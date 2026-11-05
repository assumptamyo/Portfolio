// Emails contact-form messages to the site owner via Resend's HTTP API.
// Uses HTTPS rather than SMTP, so it works on hosts that block mail ports.

const escape = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export async function sendContactEmail({ name, email, subject, message }) {
  const { RESEND_API_KEY, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.warn('Email not sent: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.');
    return;
  }

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;color:#1f2937">
      <h2 style="margin:0 0 16px;color:#319795">New message from your portfolio</h2>
      <p style="margin:4px 0"><b>Name:</b> ${escape(name)}</p>
      <p style="margin:4px 0"><b>Email:</b> <a href="mailto:${escape(email)}">${escape(email)}</a></p>
      <p style="margin:4px 0"><b>Subject:</b> ${escape(subject) || '—'}</p>
      <div style="margin-top:16px;padding:16px;background:#f3f4f6;border-radius:8px;white-space:pre-wrap">${escape(message)}</div>
      <p style="margin-top:16px;font-size:12px;color:#6b7280">Hit Reply to answer ${escape(name)} directly.</p>
    </div>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Portfolio: ${subject || `Message from ${name}`}`,
      html,
      text: `From: ${name} <${email}>\nSubject: ${subject || '—'}\n\n${message}`,
    }),
  });

  if (!res.ok) throw new Error(`Resend error ${res.status}: ${await res.text()}`);
}
