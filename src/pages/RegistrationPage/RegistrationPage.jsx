import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Мінімум 2 символи').required("Обов'язкове поле"),
  email: Yup.string().email('Невірний формат').required("Обов'язкове поле"),
  password: Yup.string().min(6, 'Мінімум 6 символів').required("Обов'язкове поле"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div>
      <h1>Реєстрація</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Імя:
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Email:
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label>
            Пароль:
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit">Зареєструватися</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;