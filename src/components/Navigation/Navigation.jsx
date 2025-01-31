import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import './Navigation.css'

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className="nav-con">
      <NavLink className="nav-article" to="/">Home</NavLink>
      {isLoggedIn && <NavLink className="nav-article" to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;