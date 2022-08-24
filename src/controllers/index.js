const express = require('express');
const { getData } = require('../database/queries');

const router = express.Router();

router.get('/books', (req, res) => {
  getData()
    .then((data) => {
      console.log(data);
      res.json(data.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: 'server error' });
    });
});

module.exports = router;
