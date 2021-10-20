import React from "react";
import { Formik, Form, Field } from "formik";
import styles from './Form.module.sass';

export default function LoginForm() {

  const initialValues = {
    email: "",
    password: "",
    checkbox: false,
  };
  
  const onSumbit = ((values, formikBag) =>{
    console.log(values)
    formikBag.resetForm()
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSumbit}
    >
        {(formikProps) =>{
            return(
                <Form className= {styles.form}>
                    <Field className = 'emailInput' name = 'email' placeholder = 'Email'></Field>
                    <Field className = 'passwordInput' name = 'password' type = 'password' placeholder = 'Password'></Field>
                    <Field name = 'checkbox' type = 'checkbox'></Field>
                    <a href="https://www.squadhelp.com/forgot_password.php">Forgot Password</a>
                    <button className = 'loginButton' type = 'submit'>LOGIN</button>
                </Form>
            )
        }}
    </Formik>
  );
}
