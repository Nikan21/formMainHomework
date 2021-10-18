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
                    <Field name = 'email'></Field>
                    <Field name = 'password'></Field>
                    <Field name = 'checkbox' type = 'checkbox'></Field>
                </Form>
            )
        }}
    </Formik>
  );
}
