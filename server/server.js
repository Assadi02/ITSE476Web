
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db'); // Import database functions

const app = express();
app.use(bodyParser.json());

// Route to fetch recent announcements
app.get('/api/announcements', async (req, res) => {
  try {
    const announcements = await db.getAnnouncements();
    res.json(announcements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to handle user feedback
app.post('api/issuereported', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await db.saveIssue(message);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
