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

/*
  Routes
*/

// get all chapters
app.get('/api/chapters', async (req, res) => {
  try {
    const chapters = await database.query(
      'SELECT * FROM chapters'
    );

    res.json(chapters.rows);
  } catch(err) {
    console.error(err.message);
  }
});

// get chapter by ID
app.get('/api/chapters/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getChapter = await database.query(
      'SELECT * FROM chapters WHERE id = $1',
      [id]
    );

    res.json(getChapter.rows[0]);
  } catch(err) {
    console.error(err.message);
  }
});

// add chapter
app.post('/api/chapters', async (req, res) => {
  try {
    const { school, id } = req.body;
    const addChapter = await database.query(
      'INSERT INTO chapters(school, id) VALUES($1, $2) RETURNING *',
      [school, id]
    );

    res.json({
      message: `Chapter [${school}] has been added at ID: [${id}]`,
      chapter: addChapter.rows[0]
    });
  } catch(err) {
    console.error(err.message);
  }
});

// delete chapter
app.delete('/api/chapters/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const chapter = await database.query(
      'SELECT school FROM chapters WHERE id = $1',
      [id]
    );
    const deleteChapter = await database.query(
      'DELETE FROM chapters WHERE id = $1',
      [id]
    );

    res.json(`Chapter [${chapter.rows[0].school}] at ID: [${id}] has been deleted`);
  } catch(err) {
    console.error(err.message);
  }
});

// catch requests and return production index
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

// start server and listen on port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});