import './styles/code_of_conduct.css'

const CodeOfConduct = () => {
  return (
    <div>
      <h1 className="component-heading">Code of Conduct</h1>
      <div className="instruction-content">
        <p>
          As contributors and maintainers of the Bookstore Management System project, and in the interest of fostering an open and welcoming community, we pledge to respect all people who contribute through reporting issues, posting feature requests, updating documentation, submitting pull requests, and other activities.
        </p>
        <p>
          We are committed to providing a friendly, safe, and inclusive environment for all, regardless of age, gender identity and expression, sexual orientation, disability, physical appearance, race, ethnicity, religion (or lack thereof), or technology choices.
        </p>
        <div className="about-section1">
          <h3>Examples of unacceptable behavior by participants include:</h3>
          <ul>
            <li>The use of sexualized language or imagery</li>
            <li>Personal attacks</li>
            <li>Trolling or insulting/derogatory comments</li>
            <li>Public or private harassment</li>
            <li>Publishing others&apos; private information, such as physical or electronic addresses, without explicit permission</li>
            <li>Other unethical or unprofessional conduct</li>
          </ul>
        </div>
        <div className="about-section1">
          <h3>Project maintainers have the right and responsibility to:</h3>
          <ul>
            <li>Remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned with this Code of Conduct</li>
            <li>Ban temporarily or permanently any contributor for behaviors that they deem inappropriate, threatening, offensive, or harmful</li>
          </ul>
        </div>
        <div className="about-section1">
          <h3>Scope</h3>
          <p>
            This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project email address, posting via an official social media account, or acting as an appointed representative at an online or offline event.
          </p>
        </div>
        <div className="about-section1">
          <h3>Enforcement</h3>
          <p>
            Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [contact email]. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.
          </p>
          <p>
            Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project&apos;s leadership.
          </p>
        </div>
        <div className="about-section1">
          <h3>Attribution</h3>
          <p>
            This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html">https://www.contributor-covenant.org/version/1/4/code-of-conduct.html</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;