import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className='nac-con'>
      <NavLink className='nav-article' to="/">Home</NavLink>
      <NavLink className='nav-article' to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default Navigation;