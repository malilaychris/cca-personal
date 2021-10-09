const express = require('express');
const router = express.Router();

const database = require('../database');

router.get('/', async (req, res) => {
  try {
    const players = await database.query(
      'SELECT * FROM players'
    );
    res.status(200).json(players.rows);
  } catch(err) {
    console.error(err.message);
    res.status(400);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req. params;
    const getPlayer = await database.query(
      'SELECT * FROM players WHERE player_id = $1',
      [id]
    );
    res.status(200).json(getPlayer.rows[0]);
  } catch(err) {
    console.error(err.message);
    res.status(400);
  }
});

module.exports = router;