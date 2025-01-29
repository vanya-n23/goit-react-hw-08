import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/authOperations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Мінімум 2 символи').required('Обов’язкове поле'),
    email: Yup.string().email('Невірний формат email').required('Обов’язкове поле'),
    password: Yup.string().min(6, 'Мінімум 6 символів').required('Обов’язкове поле'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <label>Name:</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />

        <label>Email:</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />

        <label>Password:</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;