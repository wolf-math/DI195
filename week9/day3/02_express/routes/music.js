const express = require('express');
const router = express.Router();

const { getAllMusic, getAlbum } = require('../controllers/music.js');

router.get('/', getAllMusic);
router.get('/:albumID', getAlbum);

module.exports = router;
