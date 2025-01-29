import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../redux/auth/authOperations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Невірний формат email').required('Обов’язкове поле'),
    password: Yup.string().min(6, 'Мінімум 6 символів').required('Обов’язкове поле'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <label>Email:</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <label>Password:</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;