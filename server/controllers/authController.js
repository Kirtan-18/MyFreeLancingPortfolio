import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

const JWT_SECRET = process.env.JWT_SECRET || 'cyberpunk_super_secret_jwt_key_2026';

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  // Kirtan / Admin fallback credentials check
  if ((username === 'kirtan' || username === 'admin' || username === 'anil') && (password === 'admin123' || password === 'admin' || password === 'kirtan123')) {
    const token = jwt.sign({ username: 'kirtan', role: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
    return res.json({ token, user: { username: 'kirtan', role: 'admin' } });
  }

  try {
    const admin = await Admin.findOne({ username });
    if (admin && (await admin.matchPassword(password))) {
      const token = jwt.sign({ id: admin._id, username: admin.username, role: admin.role }, JWT_SECRET, { expiresIn: '7d' });
      return res.json({ token, user: { username: admin.username, role: admin.role } });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
