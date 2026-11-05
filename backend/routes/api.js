import { Router } from 'express';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Certification from '../models/Certification.js';
import Message from '../models/Message.js';
import { sendContactEmail } from '../mailer.js';

const router = Router();

router.get('/projects', async (req, res) => {
  res.json(await Project.find().sort('order'));
});

router.get('/skills', async (req, res) => {
  res.json(await Skill.find().sort('order'));
});

router.get('/certifications', async (req, res) => {
  res.json(await Certification.find().sort('order'));
});

router.post('/contact', async (req, res) => {
  const { name, email, subject, message, website } = req.body;
  const thanks = { ok: true, message: 'Thanks! Your message has been sent.' };

  // Honeypot: real visitors never see the "website" field, bots fill it in
  if (website) return res.status(201).json(thanks);

  let saved;
  try {
    saved = await Message.create({ name, email, subject, message });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ ok: false, message: 'Please fill in your name, a valid email and a message.' });
    }
    throw err;
  }

  // The message is already saved, so an email failure shouldn't fail the request
  try {
    await sendContactEmail(saved);
  } catch (err) {
    console.error('Contact email failed:', err.message);
  }

  res.status(201).json(thanks);
});

export default router;
