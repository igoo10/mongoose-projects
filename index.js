// index.js
const express = require('express');
const connectDB = require('./config/mongoose-config');
const personRouter = require('./routes/person-router');

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Use person routes
app.use('/api/person', personRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
