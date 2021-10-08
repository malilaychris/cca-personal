const express = require('express');
const path = require('path');
const app = express();

const database = require('./database');

const PORT = 3000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// serve static files in production
app.use(express.static(path.resolve(__dirname, '../dist')));

// API routes
const chapters = require('./routes/chapters');

app.use('/api/chapters', chapters);

// catch requests and return production index
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

// start server and listen on port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});