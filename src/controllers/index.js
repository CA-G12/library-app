const express = require('express');
const { getData, postData } = require('../database/queries');

const router = express.Router();

router.get('/books', (req, res) => {
  getData()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.status(500).json({ msg: 'server error' });
    });
});

router.post('/addBook', (req, res) => {
  const {
    book_name, description, book_image, book_author,
  } = req.body;
  postData({ book_name, description, book_image })
    .then((data) => {
      res.redirect('/');
    })
    .catch((err) => res.status(500).json({ msg: 'server error' }));
});

module.exports = router;
