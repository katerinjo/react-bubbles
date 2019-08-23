import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Basic = ({ touched, errors }) => {
  return (
    <Form>
      <div>
        <Field type='text' name='username' placeholder='username' />
        {touched.username && errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <Field type='password' name='password' placeholder='password' />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <button type='submit'>submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues(props) {
    return {
      username: '',
      password: '',
      subFun: props.subFun
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup
      .string()
      .required('username required'),
    role: Yup
      .string()
      .required('passwords required')
  }),

  handleSubmit(vals, { resetForm }) {
    const creds = {
      username: vals.username,
      password: vals.password
    };
    vals.subFun(creds);
    resetForm();
  }
})(Basic);