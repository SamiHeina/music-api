const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

// GET all music
router.get('/', musicController.getAllMusic);

// GET music by ID
router.get('/:id', musicController.getMusicById);

// POST new music
router.post('/', musicController.addMusic);

// PUT/PATCH update music by ID
router.put('/:id', musicController.updateMusicById);

// DELETE music by ID
router.delete('/:id', musicController.deleteMusicById);

module.exports = router;
