import React from "react";
import { Formik, Form, Field } from "formik";

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
                <Form>
                    <Field className = 'emailInput' name = 'email'></Field>
                    <Field className = 'passwordInput' name = 'password' type = 'password'></Field>
                    <Field name = 'checkbox' type = 'checkbox'></Field>
                    <a href="https://www.squadhelp.com/forgot_password.php">Forgot Password</a>
                    <button className = 'loginButton' type = 'submit'>LOGIN</button>
                </Form>
            )
        }}
    </Formik>
  );
}
