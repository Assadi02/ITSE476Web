import { useState } from 'react';
import './styles/participation_guidelines.css'

const ParticipationGuidelines = () => {
  // State to manage the visibility of each instruction's content
  const [isVisible, setIsVisible] = useState({
    readGuidelines: false,
    understandMission: false,
    contributeMeaningfully: false,
    followCodeOfConduct: false,
    communicateOpenly: false,
    submitQualityCode: false,
    respectLicensing: false,
    bePatient: false,
    seekFeedback: false,
    celebrateSuccesses: false
  });

  // Function to toggle visibility of instruction content

  const toggleVisibility = (key) => {
    const updatedVisibility = Object.keys(isVisible).reduce((acc, currKey) => {
      acc[currKey] = currKey === key ? !isVisible[key] : false;
      return acc;
    }, {});
    setIsVisible(updatedVisibility);
  };

  return (
    <div>
      <h1 className="component-heading">Participation Guidelines</h1>
      <div className="participation-container">
        <h2 className="instruction-heading" onClick={() => toggleVisibility('readGuidelines')}>Read the Contribution Guidelines</h2>
        {isVisible.readGuidelines && (
          <p className="instruction-content">Please take the time to read and understand our contribution guidelines. These guidelines cover important topics like coding standards, pull request processes, and issue reporting. They serve as a roadmap for contributing to the project effectively.</p>
        )}

        <h2 className="instruction-heading" onClick={() => toggleVisibility('understandMission')}>Understand Our Mission and Goals</h2>
        {isVisible.understandMission && (
          <p className="instruction-content">Familiarize yourself with our project&apos;s mission, goals, and objectives. Understanding the purpose of our project will help you align your contributions with our vision and make a meaningful impact on our goals.</p>
        )}

        <h2 className="instruction-heading" onClick={() => toggleVisibility('contributeMeaningfully')}>Contribute Meaningfully</h2>
        {isVisible.contributeMeaningfully && (
          <p className="instruction-content">We encourage you to contribute meaningful and valuable additions to the project. Focus on areas where you can make the most impact and avoid unnecessary or frivolous changes. Quality over quantity is key.</p>
        )}

        <h2 className="instruction-heading" onClick={() => toggleVisibility('followCodeOfConduct')}>Follow Our Code of Conduct</h2>
        {isVisible.followCodeOfConduct && (
          <p className="instruction-content">We have a code of conduct in place to ensure that our community remains respectful, inclusive, and welcoming to all. Please adhere to our code of conduct at all times and treat fellow contributors with kindness and respect.</p>
        )}

        <h2 className="instruction-heading" onClick={() => toggleVisibility('communicateOpenly')}>Communicate Openly</h2>
        {isVisible.communicateOpenly && (
          <p className="instruction-content">Open communication and collaboration are fundamental to the success of our project. Feel free to ask questions, provide feedback, and discuss ideas openly with the community. Your input is valuable to us.</p>
        )}

        <h2 className="instruction-heading" onClick={() => toggleVisibility('submitQualityCode')}>Submit Quality Code</h2>
        {isVisible.submitQualityCode && (
          <p className="instruction-content">When submitting code contributions, strive for quality and excellence. Write clean, well-documented code that adheres to our coding standards and guidelines. Your contributions should enhance the overall quality of our project.</p>
        )}

        <h2 className="instruction-heading" onClick={() => toggleVisibility('respectLicensing')}>Respect Licensing and Intellectual Property</h2>
        {isVisible.respectLicensing && (
          <p className="instruction-content">Respect our project&apos;s licensing and intellectual property rights. Ensure that your contributions are appropriately licensed and comply with any licensing requirements. We take intellectual property seriously and appreciate your cooperation in this regard.</p>
        )}

        <h2 className="instruction-heading" onClick={() => toggleVisibility('bePatient')}>Be Patient and Respectful</h2>
        {isVisible.bePatient && (
          <p className="instruction-content">Patience, respect, and understanding are essential values in our community. Be patient with your fellow contributors and respect differing opinions and perspectives. We&apos;re all here to learn and grow together.</p>
        )}

        <h2 className="instruction-heading" onClick={() => toggleVisibility('seekFeedback')}>Seek Feedback and Iterate</h2>
        {isVisible.seekFeedback && (
          <p className="instruction-content">Don&apos;t hesitate to seek feedback on your contributions and iterate based on that feedback. Continuous improvement is at the heart of our project, and your willingness to learn and adapt is appreciated.</p>
        )}

        <h2 className="instruction-heading" onClick={() => toggleVisibility('celebrateSuccesses')}>Celebrate Successes</h2>
        {isVisible.celebrateSuccesses && (
          <p className="instruction-content">Let&apos;s celebrate achievements and milestones together! Recognize and appreciate the efforts of your fellow contributors, whether they&apos;re big or small. Our collective achievements are what make our project great.</p>
        )}
      </div>
    </div>
  );
};

export default ParticipationGuidelines;
