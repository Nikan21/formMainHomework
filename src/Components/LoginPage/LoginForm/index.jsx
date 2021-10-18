import React from "react";
import { Formik, Form, Field } from "formik";

const initialValues = {
  email: "",
  password: "",
  checkbox: false,
};

export default function LoginForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, formikBag) => {}}
    >
        {(formikProps) =>{
            return(
                <Form>
                    <Field classNmae = 'emailInput' name = 'email'></Field>
                    <Field classNmae = 'passwordInput' name = 'password' type = 'password'></Field>
                    <Field name = 'checkbox' type = 'checkbox'></Field>
                    <a href="https://www.squadhelp.com/forgot_password.php">Forgot Password</a>
                    <button className = 'loginButton' type = 'submit'>LOGIN</button>
                </Form>
            )
        }}
    </Formik>
  );
}
