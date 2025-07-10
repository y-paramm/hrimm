const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const z = require('zod');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// Auth middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, 'secret_key');
    next();
  } catch (e) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Register
app.post('/auth/register', async (req, res) => {
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(['attendee', 'vendor', 'recruiter']),
  });

  const { name, email, password, role } = schema.parse(req.body);
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
     {
      name,
      email,
      passwordHash: hashedPassword,
      role,
    },
  });

  res.status(201).json({ message: 'User created', user });
});

// Login
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, 'secret_key', { expiresIn: '1d' });
  res.json({ token, user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
