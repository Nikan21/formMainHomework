import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import classNames from "classnames";
import styles from "./form.module.sass";

export default function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
    checkbox: false,
  };

  const onSumbit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  const scheme = yup
    .object()
    .required()
    .shape({
      email: yup
        .string()
        .matches(/[A-z][a-z][0-9][.@]/, "Email is not valid format")
        .required("Field is empty"),
      password: yup
        .string()
        .matches(/[A-z][a-z][0-9]/, "Password is not valid")
        .required("Field is empty"),
    });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSumbit}
      validationSchema={scheme}
    >
      {({ errors, touched }) => {
        const errorEmails = classNames(styles.errorEmailDefault, {
          [styles.errorEmail]: errors.email && touched.email,
        });

        const colorInputEmail = classNames(styles.emailInput, {
          [styles.errorEmailTrue]: !errors.email && touched.email,
          [styles.errorEmailFalse]: errors.email && touched.email,
        });

        const errorPassword = classNames(styles.errorPasswordDefault, {
          [styles.errorPassword]: errors.password && touched.password,
        });

        const colorInputPassword = classNames(styles.passwordInput, {
          [styles.errorPasswordTrue]: !errors.password && touched.password,
          [styles.errorPasswordFalse]: errors.password && touched.password,
        });

        return (
          <Form className={styles.form}>
            <label className={styles.labelEmail}>
              <Field
                className={colorInputEmail}
                name="email"
                type="text"
                placeholder="Email adress"
              />
              <div className={errorEmails}>
                <ErrorMessage name="email" />
              </div>
            </label>

            <label className={styles.labelPassword}>
              <Field
                className={colorInputPassword}
                name="password"
                type="password"
                placeholder="Password"
              />
              <div className={errorPassword}>
                <ErrorMessage name="password" />
              </div>
            </label>

            <div className={styles.wrapperCheckAndText}>
              <Field name="checkbox" type="checkbox" />
              <span className={styles.textNearCheckbox}>Remember Me</span>
              <a
                className={styles.forgotPass}
                href="https://www.squadhelp.com/forgot_password.php"
              >
                Forgot Password
              </a>
            </div>

            <button className={styles.loginButton} type="submit">
              LOGIN
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
