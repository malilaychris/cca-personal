const express = require('express');
const router = express.Router();

const database = require('../database');

// get all chapters
router.get('/', async (req, res) => {
  try {
    const chapters = await database.query(
      'SELECT * FROM chapters ORDER BY chapter_id'
    );
    res.status(200).json(chapters.rows);
  } catch(err) {
    console.error(err.message);
    res.status(400);
  }
});

// get chapter by ID
router.get('/id/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getChapter = await database.query(
      'SELECT * FROM chapters WHERE chapter_id = $1',
      [id]
    );
    res.status(200).json(getChapter.rows[0]);
  } catch(err) {
    console.error(err.message);
    res.status(400);
  }
});

// get chapter by school name
router.get('/:chapter', async (req, res) => {
  try {
    const { chapter } = req.params;
    const getChapter = await database.query(
      'SELECT * FROM chapters WHERE page_name = $1',
      [chapter]
    );
    res.status(200).json(getChapter.rows[0]);
  } catch(err) {
    console.error(err.message);
    res.status(400);
  }
});

// // add chapter
// router.post('/api/chapters/add', async (req, res) => {
//   try {
//     const { school, id } = req.body;
//     const addChapter = await database.query(
//       'INSERT INTO chapters(school, id) VALUES($1, $2) RETURNING *',
//       [school, id]
//     );
//     res.status(200).json({
//       message: `Chapter [${school}] has been added at ID: [${id}]`,
//       chapter: addChapter.rows[0]
//     });
//   } catch(err) {
//     console.error(err.message);
//     res.status(400);
//   }
// });

// // update or modify chapter
// router.put('/api/chapters', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updateChapter = await database.query(
//       'UPDATE chapters SET -- WHERE id = $1',
//       [id]
//     );
//     const chapter = await database.query(
//       'SELECT * FROM chapters WHERE id = $1',
//       [id]
//     );
//     res.status(200).json({
//       message: `Chapter [${chapter.rows[0].school}] at ID: [${id}] has been changed.`,
//       chapter: chapter.rows[0]
//     });
//   } catch(err) {
//     console.error(err.message);
//     res.status(400);
//   }
// });

// // delete chapter
// router.delete('/api/chapters/remove/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const chapter = await database.query(
//       'SELECT school FROM chapters WHERE id = $1',
//       [id]
//     );
//     const deleteChapter = await database.query(
//       'DELETE FROM chapters WHERE id = $1',
//       [id]
//     );
//     res.status(200).json(`Chapter [${chapter.rows[0].school}] at ID: [${id}] has been deleted`);
//   } catch(err) {
//     console.error(err.message);
//     res.status(400);
//   }
// });

module.exports = router;