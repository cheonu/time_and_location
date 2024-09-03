// src/index.js

const express = require('express');
const dayjs = require('dayjs');
const dotenv = require('dotenv');

// Load environment variables from .env file (if present)
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`Hello, world! Current server time is ${dayjs().format()}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
