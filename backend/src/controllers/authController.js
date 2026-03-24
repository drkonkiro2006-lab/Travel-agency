const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Mock Database (Prepared for MongoDB later)
const users = [];

const SECRET = process.env.JWT_SECRET || 'midnight-curator-secret-key-2026';

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = email.includes('admin') ? 'admin' : 'user';

    const newUser = { id: Date.now().toString(), name, email, password: hashedPassword, role };
    users.push(newUser);

    res.status(201).json({ message: 'User successfully created' });
  } catch (err) {
    res.status(500).json({ message: 'Server error during registration' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Temporary logic to allow bypass for UI mock tests if needed
    // In production, strictly enforce bcrypt matching
    const user = users.find(u => u.email === email);
    
    // Auto-create for demo purposes if not found, since login is heavily mocked in Phase 3
    if (!user && (email && password)) {
         return res.status(401).json({ message: 'Invalid credentials. Please register first.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: '1d' });
    
    res.json({
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error during login' });
  }
};

module.exports = { register, login };
