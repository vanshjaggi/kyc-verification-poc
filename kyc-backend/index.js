const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// Aadhaar/PAN mock validation route
app.post('/validate-id', async (req, res) => {
  const { type, id } = req.body;

  // Basic mock logic (replace with actual API call if improvement needed)
  if (!id) return res.status(400).json({ valid: false, reason: 'Empty ID' });

  const isValidFormat =
    type === 'aadhaar'
      ? /^[0-9]{12}$/.test(id)
      : /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(id);

  if (!isValidFormat) {
    return res.json({ valid: false, reason: 'Invalid format' });
  }

  // Simulate API response
  return res.json({ valid: true });
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
