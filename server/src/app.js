// src/app.js - Express app instance for testing and server
import express, { json, urlencoded } from 'express';
import { static as expressStatic } from 'express';
import cors from 'cors';
import { join } from 'path';
import postRoutes from '../routes/posts.js';
import categoryRoutes from '../routes/categories.js';
import authRoutes from '../routes/auth.js';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/uploads', expressStatic(join(process.cwd(), 'uploads')));
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('MERN Blog API is running');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error',
  });
});

export default app;
