import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/authOperations';
import { selectIsRefreshing } from '../../redux/auth/authSelectors';
import Layout from '../Layout';
import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';
import HomePage from '../../pages/HomePage/HomePage';
import RegisterPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Завантаження...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute component={RegisterPage} />} />
        <Route path="/login" element={<RestrictedRoute component={LoginPage} />} />
        <Route path="/contacts" element={<PrivateRoute component={ContactsPage} />} />
      </Route>
    </Routes>
  );
};

export default App;