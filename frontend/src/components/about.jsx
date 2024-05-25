import './styles/about.css'

const About = () => {
  return (
    <div>
      <h1 className="component-heading">About</h1>
      <div className="about-container">
        <div className="about-section">
          <h2>Mission Statement</h2>
          <p>
            We are a community centered around a diverse collection of books, carefully chosen to enrich the learning journey of readers who value knowledge above material wealth. Our space fosters peaceful coexistence among individuals passionate about humanity’s development, where the best reads, company, and coffee converge to create an inviting atmosphere where books take center stage and every encounter sparks a journey.
          </p>
          <p>
            At the UOB Bookstore, our purpose is to support students. We aim to positively impact each student by providing resources, products, and services that nurture personal and academic growth, empowering Bears to make meaningful contributions to the world. Every purchase made at the bookstore is reinvested into enhancing the university and student experience. Join us in championing student success!
          </p>
        </div>

        <div className="about-section">
          <h2>Team</h2>
          <p>
            We are a group of four Software Project students working on this website as a project for an Open Source Project Course. Our team members bring diverse skills and experiences to the table, allowing us to tackle challenges creatively and effectively.
          </p>
          <p>
            Our main goal is to create an open-source website for a library system. This project builds upon the knowledge and skills we acquired in previous courses, where we implemented a library system. By making our website open source, we aim to contribute to the software development community and provide a valuable resource for libraries and their patrons.
          </p>
          <p>
            We are passionate about creating high-quality software that is accessible, user-friendly, and meets the needs of our users. Through collaboration and dedication, we strive to deliver a website that not only fulfills the requirements of our course but also makes a positive impact on the community.
          </p>
          <p>Following are our core team members;</p>
          <ol>
            <li>Omar Assadi - 202006835</li>
            <li>Neama Abdulmajed - 202012617</li>
            <li>Mustafa Mohammed - 2020006930</li>
            <li>Sakenah Mansor - 202010498</li>
          </ol>
        </div>

        <div className="about-section">
          <h2>Project Type</h2>
          <p>This project is an Open Source Project. You can use it for free.</p>
        </div>

        <div className="about-section">
          <h2>Features List</h2>
          <ol>
            <li>Buying a Book</li>
            <li>(Planned) Book borrowing management</li>
            <li>User authentication and authorization</li>
            <li>(planned) Search functionality for books</li>
            <li>Ability to add and remove books</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
