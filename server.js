const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Add any other middleware or routes you need here

// Endpoint to handle Webflow webhooks
app.post('/webflow-webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  // Process the webhook data here
  res.status(200).send('Webhook received');
});

// Existing server start code
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});