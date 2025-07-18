// posts.test.mjs - Integration tests for posts API endpoints (ESM)

import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../../src/app.js';
import Post from '../../src/models/Post.js';
import User from '../../src/models/User.js';
import { generateToken } from '../../src/utils/auth.js';

let mongoServer;
let token;
let userId;
let postId;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);

  // Create a test user
  const user = await User.create({
    username: 'testuser',
    email: 'test@example.com',
    password: 'password123',
  });
  userId = user._id;
  token = generateToken(user);

  // Create a test post
  const post = await Post.create({
    title: 'Test Post',
    content: 'This is a test post content',
    author: userId,
    category: new mongoose.Types.ObjectId(),
    slug: 'test-post',
  });
  postId = post._id;
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  // Add any cleanup logic if needed
});

describe('Sample ESM Integration Test', () => {
  it('should return 200 for GET /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/MERN Blog API is running/);
  });
});
