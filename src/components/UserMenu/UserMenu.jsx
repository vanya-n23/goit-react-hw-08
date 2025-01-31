import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import './UserMenu.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className='con-um'>
      <p className='title-um'>Welcome {user.name}!</p>
      <button className='btn-um' onClick={() => dispatch(logout())}>Log out</button>
    </div>
  );
};

export default UserMenu;