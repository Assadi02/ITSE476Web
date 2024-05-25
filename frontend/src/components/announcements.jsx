import './styles/announcements.css'
import { useState, useEffect } from 'react';
import axios from 'axios'; 

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  // Fetch announcements from the server
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://127.0.0.1/api/announcements');
        setAnnouncements(response.data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };
    fetchAnnouncements();
  }, []);

  return (
    <div>
      <h1 className="component-heading">Announcements</h1>
      <div className="announcements-container">
        <div className="about-section1">
        <ul>
    <li>Version 1.0.0 Released!<br/>We are thrilled to announce the launch of Version 1.0.0 of our book store system! This initial release includes all the core features you need to browse, purchase, and review your favorite books. Start exploring today!</li>
    <li>Version 1.1.0 Now Available<br/>Great news! Version 1.1.0 of our book store system is now live. This update brings several new features and improvements:<br/><ul><li>Enhanced search functionality</li><li>Improved user interface</li><li>Faster page load times</li></ul>Update now and enjoy a smoother experience!</li>
    <li>Version 1.2.0 Update Released<br/>We are excited to release Version 1.2.0, packed with new features and fixes:<br/><ul><li>Added wishlist functionality</li><li>Improved payment gateway integration</li><li>Bug fixes and performance enhancements</li></ul>Upgrade today to take advantage of these new features!</li>
  </ul>
          {announcements.map((announcement, index) => (
            <div key={index} className="announcement-card">
              <h3>{announcement.title}</h3>
              <p><strong>Date:</strong> {announcement.createdAt}</p>
              <p><strong>Status:</strong> {announcement.status}</p>
              <p><strong>Description:</strong> {announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
