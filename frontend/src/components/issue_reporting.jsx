import './styles/issue_reporting.css'
import { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const IssuesReporting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueTitle: '',
    issueDescription: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1/api/issuereported', formData);
      alert('Issue reported successfully!');
      setFormData({
        name: '',
        email: '',
        issueTitle: '',
        issueDescription: ''
      });
    } catch (error) {
      console.error('Error reporting issue:', error);
      alert('Failed to report issue. Please try again later.');
    }
  };

  return (
    <div>
      <h1 className="component-heading">Issue Reporting</h1>
      <div className="issues-reporting-container">
        <p>Please fill this form to report an issue.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="issueTitle">Issue Title:</label>
            <input
              type="text"
              id="issueTitle"
              name="issueTitle"
              value={formData.issueTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="issueDescription">Issue Description:</label>
            <textarea
              id="issueDescription"
              name="issueDescription"
              value={formData.issueDescription}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default IssuesReporting;
