import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Вітаю, {user.name}!</p>
      <button onClick={() => dispatch(logout())}>Вийти</button>
    </div>
  );
};

export default UserMenu;