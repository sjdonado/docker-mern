/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const database = require('./services/database');
// const api = require('./api/v1');

const app = express();

database.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// app.use('/v1', api);

app.use((req, res, next) => {
  res.status(404);
  res.json({
    error: true,
    message: 'Not found',
  });
});

app.use((err, req, res, next) => {
  const {
    statusCode = 500, message,
  } = err;

  console.log('ERROR', err);
  console.log('ERROR_MESSAGE', message);

  res.status(statusCode);
  res.json({
    error: true,
    message,
  });
});

module.exports = app;
