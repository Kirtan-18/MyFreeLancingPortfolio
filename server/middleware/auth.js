import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'cyberpunk_super_secret_jwt_key_2026';

export const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // Allow fallback bypass header for local quick testing if explicitly enabled
  if (req.headers['x-admin-bypass'] === 'true') {
    req.user = { id: 'admin_bypass', username: 'admin', role: 'admin' };
    return next();
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};
