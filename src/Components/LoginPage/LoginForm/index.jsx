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
                    <Field className = {styles.emailInput} name = 'email' placeholder = 'Email adress' required></Field>
                    <Field className = {styles.passwordInput} name = 'password' type = 'password' placeholder = 'Password' required></Field>
                    <div className = {styles.wrapperCheckAndText}>
                    <Field name = 'checkbox' type = 'checkbox' required></Field>
                    <span className = {styles.textNearCheckbox}>Remember Me</span>
                    <a className = {styles.forgotPass} href="https://www.squadhelp.com/forgot_password.php">Forgot Password</a>
                    </div>
                    <button className = {styles.loginButton} type = 'submit'>LOGIN</button>
                </Form>
            )
        }}
    </Formik>
  );
}
