import icon from '../assets/new_icon.png'
import { NavLink } from 'react-router-dom'
import './styles/nav.css'

const NavigationBar = () => {
    
  return (
    <div>
      <nav>
        <img src={icon} alt="Project Logo" />
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/users"><li>Users</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/contributors"><li>Contributors</li></NavLink>
      </nav>
    </div>
  )
}

export default NavigationBar;