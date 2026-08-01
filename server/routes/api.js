import express from 'express';
import jwt from 'jsonwebtoken';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';
import Education from '../models/Education.js';
import Achievement from '../models/Achievement.js';
import Message from '../models/Message.js';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'cyberpunk_super_secret_jwt_key_2026';

// ----------------------------------------------------
// AUTHENTICATION
// ----------------------------------------------------
router.post('/auth/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Default admin login credentials fallback if DB not populated
  if (username === 'admin' && (password === 'admin123' || password === 'admin')) {
    const token = jwt.sign({ username: 'admin', role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({ token, user: { username: 'admin', role: 'admin' } });
  }

  try {
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
      return res.json({ token, user: { username: user.username, role: user.role } });
    }
    return res.status(401).json({ message: 'Invalid username or password' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// ----------------------------------------------------
// PROJECTS CRUD
// ----------------------------------------------------
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ priority: -1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/projects', protect, async (req, res) => {
  try {
    const project = new Project(req.body);
    const saved = await project.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/projects/:id', protect, async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/projects/:id', protect, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ----------------------------------------------------
// SKILLS CRUD
// ----------------------------------------------------
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/skills', protect, async (req, res) => {
  try {
    const skill = new Skill(req.body);
    const saved = await skill.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/skills/:id', protect, async (req, res) => {
  try {
    const updated = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/skills/:id', protect, async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: 'Skill deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ----------------------------------------------------
// EXPERIENCE CRUD
// ----------------------------------------------------
router.get('/experience', async (req, res) => {
  try {
    const exps = await Experience.find().sort({ priority: -1 });
    res.json(exps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/experience', protect, async (req, res) => {
  try {
    const exp = new Experience(req.body);
    const saved = await exp.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/experience/:id', protect, async (req, res) => {
  try {
    const updated = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/experience/:id', protect, async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ message: 'Experience entry deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ----------------------------------------------------
// EDUCATION CRUD
// ----------------------------------------------------
router.get('/education', async (req, res) => {
  try {
    const edu = await Education.find();
    res.json(edu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/education', protect, async (req, res) => {
  try {
    const edu = new Education(req.body);
    const saved = await edu.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/education/:id', protect, async (req, res) => {
  try {
    const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/education/:id', protect, async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: 'Education deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ----------------------------------------------------
// ACHIEVEMENTS & CERTIFICATIONS CRUD
// ----------------------------------------------------
router.get('/achievements', async (req, res) => {
  try {
    const ach = await Achievement.find();
    res.json(ach);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/achievements', protect, async (req, res) => {
  try {
    const ach = new Achievement(req.body);
    const saved = await ach.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/achievements/:id', protect, async (req, res) => {
  try {
    await Achievement.findByIdAndDelete(req.params.id);
    res.json({ message: 'Achievement deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ----------------------------------------------------
// MESSAGES (Contact Form)
// ----------------------------------------------------
router.get('/messages', protect, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/messages', async (req, res) => {
  try {
    const msg = new Message(req.body);
    const saved = await msg.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/messages/:id', protect, async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: 'Message deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
