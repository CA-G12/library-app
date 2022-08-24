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
      res.status(500).json({ msg: 'server error' });
    });
});

module.exports = router;
