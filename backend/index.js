require('dotenv').config();
const express = require('express');
const connectDB = require('./backend/config/db');
const errorHandler = require('./backend/utils/errorHandler');
const authRoutes = require('./backend/routes/authRoutes');
const taskRoutes = require('./backend/routes/taskRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Error handling middleware
app.use(errorHandler);

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
