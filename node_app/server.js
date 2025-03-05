const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const { env } = require('node:process');
const app = express();
const port = 3000;

// Connect to PostgreSQL database
const pool = new Pool({
  user: 'csci330',
  host: 'localhost',
  database: 'csci330',
  password: env.MYAPPPASSWORD,
  port: 5432,
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route to get data from the PostgreSQL database
app.get('/api/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
