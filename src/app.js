const { join } = require('path');
const compression = require('compression');
// const helmet = require('helmet');
const express = require('express');

const router = require('./controllers');

const app = express();
app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
// app.use(helmet());

app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

// ERROR HANDLING
app.use((req, res) => {
  res.status(404).json({ msg: 'PAGE NOT FOUND' });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).join({ msg: 'INTERNAL SERVER ERROR' });
});

module.exports = app;
