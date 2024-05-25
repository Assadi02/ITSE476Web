import DiscussionForum from './discussion_forum';
import CodeOfConduct from './code_of_conduct';
import GitHub from './github';
import './styles/contributors.css'
const Contributors = () => {
  return (
    <div>
      <div>
        <DiscussionForum />
      </div>
      <div>
        <CodeOfConduct />
      </div>
      <div>
        <GitHub />
      </div>
    </div>
  );
};

export default Contributors;
