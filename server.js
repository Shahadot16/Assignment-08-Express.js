const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Express.js Server'
  });
});

app.get('/about', (req, res) => {
  res.json({
    message: 'This is About Page'
  });
});

app.get('/contact', (req, res) => {
  res.json({
    message: 'This is Contact Page'
  });
});

app.get('/services', (req, res) => {
  res.json({
    message: 'Our Services'
  });
});

app.get('/students', (req, res) => {
  res.json({
    message: 'Student List'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
