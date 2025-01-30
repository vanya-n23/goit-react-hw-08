import { NavLink } from 'react-router-dom';
import './AuthNav.css'

const AuthNav = () => {
  return (
    <nav className='nac-con'>
      <NavLink className='nav-article' to="/register">Registration</NavLink>
      <NavLink className='nav-article' to="/login">Log in</NavLink>
    </nav>
  );
};

export default AuthNav;