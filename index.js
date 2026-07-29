const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Express server',
    route: '/'
  });
});

app.get('/status', (req, res) => {
  res.json({
    status: 'OK',
    uptimeSeconds: process.uptime().toFixed(2)
  });
});

app.get('/info', (req, res) => {
  res.json({
    app: 'Simple Express Server',
    version: '1.0.0',
    description: 'This route returns basic application info'
  });
});

app.get('/data', (req, res) => {
  res.json({
    data: [1, 2, 3, 4, 5],
    count: 5
  });
});

app.get('/help', (req, res) => {
  res.json({
    help: 'Use /, /status, /info, /data, and /help to get JSON responses',
    availableRoutes: ['/', '/status', '/info', '/data', '/help']
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
