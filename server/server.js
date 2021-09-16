const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});