import './styles/footer.css'; // Import CSS file for styling (optional)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-media">
          <a href="https://www.facebook.com/uOBooks/" target="_blank" rel="noopener noreferrer">Facebook</a>
          
          <a href="https://twitter.com/UOBooks" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p>© 2024 UOBooks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
