const music = require('../data.js');

const getAllMusic = (req, res) => {
  res.json(music);
};

const getAlbum = (req, res) => {
  const id = Number(req.params.albumID);
  const album = music.find((alb) => alb.id === id);

  if (!album) {
    return res.status(404).send('Album not found');
  }
  res.json(album);
};

module.exports = { getAllMusic, getAlbum };
