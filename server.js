const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Route to handle webhook POST requests
app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.json({ message: 'Webhook data received', data: req.body });
});

// Route to handle GET requests to the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Webhook Server');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
