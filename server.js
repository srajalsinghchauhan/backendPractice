const express = require('express');
const { dbConnectionFunction } = require('./db/connection'); 
const app = express();
const userRoutes = require('./routes/userRoutes');
const port = 5000; // or any port you like

require('dotenv').config();

// Middleware
app.use(express.json());

app.use('/api',userRoutes)

// Default route
app.get('/', (req, res) => {
  res.send('Hello World from backendPractice!');
});

// Connect to MongoDB and start server
dbConnectionFunction()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to database', err);
  });
