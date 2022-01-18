import React from 'react';
import './index.css';
import { Formik, Form, Field } from 'formik';

function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Field required';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Username should be an email';
    }
    return error;
  }

  
  function validatePsw(value) {
    let error;
    if (!value) {
      error = 'Field required';
    }
   return error;
  }


  
  export const App = () => (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{
          emailField: '',
          pswField: '',
        }}
        onSubmit={values => {
          alert("Login Successful");
          console.log(values);
        }}
      >
        {({ errors, touched, validateField, validateForm }) => (
          <Form name ="form">
            <div>Email:</div>
            <Field name="emailField" validate={validateEmail} />
            {errors.emailField && touched.emailField && <div style={{color:'red'}}>{errors.emailField}</div>}
            <div>Password:</div>
            <Field name="pswField" validate={validatePsw} />
            {errors.pswField && touched.pswField && <div style={{color:'red'}}>{errors.pswField}</div>}
{
  
            <button name = "submitBtn" type="submit">Submit</button>
 } </Form>
        )}
      </Formik>
    </div>
  );
        
export default App;
