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
        <div className="announcement-cards">
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
