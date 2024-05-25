
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/uobooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define mongoose schema for announcements
const announcementSchema = new mongoose.Schema({
  title: String,
  status: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Announcement = mongoose.model('Announcement', announcementSchema);

// Function to fetch recent announcements
const getAnnouncements = async () => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 }).limit(5);
    return announcements;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch announcements');
  }
};

// Function to save user feedback
const saveIssue = async (issue) => {
  try {
    // Save feedback to MongoDB or perform other actions as needed
    console.log('Received issue:', issue);
    return { message: 'Issue received' };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to save issue');
  }
};

module.exports = {
  getAnnouncements,
  saveIssue
};
