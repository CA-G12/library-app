const express = require('express');
const { join } = require('path');
const { getData, postData } = require('../database/queries');

const router = express.Router();

router.get('/books', (req, res) => {
  getData()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      res.status(500).sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
    });
});

router.post('/addBook', (req, res) => {
  console.log(7777);
  console.log(req.body);

  const { bookName, description, bookImage } = req.body;
  postData({ bookName, description, bookImage })
    .then((data) => {
      console.log(data);
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
    });
});

module.exports = router;
