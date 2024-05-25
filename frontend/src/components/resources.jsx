import './styles/resources.css'

const Resources = () => {
  return (
    <div>
      <h1 className="component-heading">Resources</h1>
      <div className="instruction-content">
        <div className="about-section1 download">
          <h2>Download</h2>
          <p>Here is the zip file for Bookstore Management System. Click to Download.</p>
          <a href="../assets/ITSE305-main.zip" download="BookstoreManagementSystem.zip" target="_blank" rel="noopener noreferrer">Bookstore Management System Repository</a>
        </div>

        <div className="about-section1">
          <h2>Description</h2>
          <p>
            The Bookstore Management System is a Java-based project developed to manage the operations of a bookstore, including inventory management, sales tracking, customer management, and more.
          </p>
        </div>

        <div className="about-section1">
          <h2>Requirements List</h2>
          <ol>
            <li>Java 17.0 or later</li>
            <li>A modern Compiler such as Visual Studio Code or IntelliJ IDEA</li>
            <li>MySQL database server</li>
            <li>Minimum of 2GB RAM</li>
            <li>At least 1GB of available storage space</li>
          </ol>
        </div>
        <div className="about-section1">
          <h2>FAQs</h2>
          <br />
          <h2>1.	How can I access my library account online?</h2>
          <p>
          You can access your library account online by visiting the library&apos;s website and logging in with your library card number and PIN. From there, you can view your account information, renew borrowed items, and place holds on books.
          </p>
          <h2>2.	How many books can I borrow at once?</h2>
          <p>
          The number of books you can borrow at once may vary depending on the library&apos;s policy. Typically, libraries allow patrons to borrow multiple items with limits on the total number of items or specific types of materials. Check with your local library for more information.
          </p>
          <h2>3.	How do I access eBooks and audiobooks from the library?</h2>
          <p>
          You can access eBooks and audiobooks through our digital library platform. Simply visit our website and log in with your library card credentials. From there, you can browse the digital collection and borrow items to read or listen to on your preferred device.
          </p>
          <h2>4.	How do I access online databases and research resources?</h2>
          <p>
          As a library member, you have access to a variety of online databases and research resources through our website. Simply log in with your library card credentials to explore our digital collections, academic journals, and other valuable resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
