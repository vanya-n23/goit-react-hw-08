import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register">Реєстрація</NavLink>
      <NavLink to="/login">Логін</NavLink>
    </nav>
  );
};

export default AuthNav;