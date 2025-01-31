import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import * as Yup from 'yup';
import './LoginPage.css'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Невірний формат').required("Обов'язкове поле"),
  password: Yup.string().min(6, 'Мінімум 6 символів').required("Обов'язкове поле"),
});

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div className='container-lp'>
      <h1>Log in</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className='form-lp'>
          <label className='label-lp'>
            Email:
            <Field className='input-lp' type="email" name="email" />
            <ErrorMessage className='error-masage-lp' name="email" component="div" />
          </label>
          <label className='label-lp'>
            Password:
            <Field className='input-lp' type="password" name="password" />
            <ErrorMessage className='error-masage-lp' name="password" component="div" />
          </label>
          <button className='btn-lp' type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;