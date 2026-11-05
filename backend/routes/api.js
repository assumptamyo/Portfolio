import { Router } from 'express';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Certification from '../models/Certification.js';
import Message from '../models/Message.js';

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
  const { name, email, subject, message } = req.body;
  try {
    await Message.create({ name, email, subject, message });
    res.status(201).json({ ok: true, message: 'Thanks! Your message has been sent.' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ ok: false, message: 'Please fill in your name, a valid email and a message.' });
    }
    throw err;
  }
});

export default router;
