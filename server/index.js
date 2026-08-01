import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

// Database Connection
connectDB();

// API Handshake Endpoint
app.get('/api', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'Kirtan Jani DevOps & Cloud Architect REST API',
    endpoints: {
      auth: '/api/auth/login',
      projects: '/api/projects'
    },
    dbStatus: 'Connected / Local Fallback Ready'
  });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

// Serve Static Dist in Production
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ message: 'API route not found' });
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 [Server] DevOps & Cloud REST API listening at http://localhost:${PORT}`);
});
