import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import * as Yup from 'yup';
import './RegistrationPage.css'

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, 'min 2 letters').required("please fill in the field"),
  email: Yup.string().email('Invalid format').required("please fill in the field"),
  password: Yup.string().min(6, 'min 6 letters').required("please fill in the field"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div className='container-rp'>
      <h1>Registration</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <Form className='form-rp'> 
          <label className='label-rp'>
            Name:
            <Field className='input-rp' type="text" name="name" />
            <ErrorMessage className='error-masage-rp' name="name" component="div" />
          </label>
          <label className='label-rp'>
            Email:
            <Field className='input-rp' type="email" name="email" />
            <ErrorMessage className='error-masage-rp' name="email" component="div" />
          </label>
          <label className='label-rp'>
            Password:
            <Field className='input-rp' type="password" name="password" />
            <ErrorMessage className='error-masage-rp' name="password" component="div" />
          </label>
          <button className='btn-rp' type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;