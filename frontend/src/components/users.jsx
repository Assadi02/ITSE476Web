import Resources from './resources';
import Announcements from './announcements';
import IssuesReporting from './issue_reporting';
import './styles/users.css'
const Users = () => {
  return (
    <div>
      <div>
        <Resources />
      </div>
      <div>
        <Announcements />
      </div>
      <div>
        <IssuesReporting />
      </div>
      
    </div>
  );
};

export default Users;
