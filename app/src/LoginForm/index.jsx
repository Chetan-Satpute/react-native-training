import * as yup from 'yup';
import { useFormik } from 'formik';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Invalid Password'
    )
    .required(),
});

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      rememberPassword: false,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='username'>Username</label>

      <input
        type='text'
        name='username'
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      <p>{formik.errors?.username}</p>

      <label htmlFor='password'>Password</label>

      <input
        type='password'
        name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <p>{formik.errors?.password}</p>

      <label htmlFor='rememberPassword'>
        <input
          name='rememberPassword'
          type='checkbox'
          value={formik.values.rememberPassword}
          onChange={formik.handleChange}
        />
        Remember Password
      </label>

      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default LoginForm;
