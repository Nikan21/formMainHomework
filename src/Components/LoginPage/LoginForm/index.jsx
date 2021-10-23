import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from 'yup'
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

  const scheme = yup.object().required().shape({
    email: yup.string().email().required('Field is empty'),
    password: yup.string().matches(/[A-z][a-z][0-9]/).required('Field is empty'),
    checkbox: yup.boolean().required('Field is empty')
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSumbit}
      validationSchema = {scheme}
    >
        {(formikProps) =>{
            return(
                <Form className= {styles.form}>
                    <Field className = {styles.emailInput} name = 'email' placeholder = 'Email adress'/>
                    <Field className = {styles.passwordInput} name = 'password' type = 'password' placeholder = 'Password'/>
                    <div className = {styles.wrapperCheckAndText}>
                    <Field name = 'checkbox' type = 'checkbox'/>
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
