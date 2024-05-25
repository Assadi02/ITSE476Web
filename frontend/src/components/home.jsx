import About from './about';
import ParticipationGuidelines from './participation_guidelines';
import './styles/home.css'
const Home = () => {
  return (
    <div>
      <div>
        <About />
      </div>
      <div>
        <ParticipationGuidelines />
      </div>
    </div>
  );
};

export default Home;