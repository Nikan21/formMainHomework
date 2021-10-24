import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import classNames from "classnames";
import styles from "./signUpForm.module.sass";

export default function SignUpForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    password: "",
    passwordConfirmed: "",
  };

  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  const scheme = yup
    .object()
    .required()
    .shape({
      firstName: yup
        .string()
        .matches(/[A-z][a-z][0-9]/, "First Name is not valid")
        .required("Field is empty"),
      lastName: yup
        .string()
        .matches(/[A-z][a-z][0-9]/, "Last Name is not valid")
        .required("Field is empty"),
      displayName: yup
        .string()
        .matches(/[A-z][a-z][0-9]/, "Display Name is not valid")
        .required("Field is empty"),
      email: yup
        .string()
        .matches(/[A-z][a-z][0-9][.@]/, "Email adress is not valid")
        .required("Field is empty"),
      password: yup
        .string()
        .matches(/[A-z][a-z][0-9]/, "Password is not valid")
        .required("Field is empty"),
      passwordConfirmed: yup.string().oneOf([yup.ref("password")]),
    });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={scheme}
    >
      {({ errors, touched }) => {
        const errorFirstName = classNames(styles.defaultFirstName, {
          [styles.errorFirstName]: errors.firstName && touched.firstName,
        });
        const errorLastName = classNames(styles.defaultLastName, {
          [styles.errorLastName]: errors.lastName && touched.lastName,
        });
        const errorDisplayName = classNames(styles.defaultDisplayName, {
          [styles.errorDisplayName]: errors.displayName && touched.displayName,
        });
        const errorEmail = classNames(styles.defaultEmail, {
          [styles.errorEmail]: errors.email && touched.email,
        });
        const errorPassword = classNames(styles.defaultPassword, {
          [styles.errorPassword]: errors.password && touched.password,
        });
        const errorConfirmPassword = classNames(styles.defaultConfirmPassword, {
          [styles.errorConfirmPassword]:
            errors.confirmPassword && touched.confirmPassword,
        });

        const colorInputFirstName = classNames(styles.inputFirstName, {
          [styles.colorInputFirstNameTrue]:
            !errors.firstName && touched.firstName,
          [styles.colorInputFirstNameFalse]:
            errors.firstName && touched.firstName,
        });
        const colorInputLastName = classNames(styles.inputLastName, {
          [styles.colorInputLastNameTrue]: !errors.lastName && touched.lastName,
          [styles.colorInputLastNameFalse]: errors.lastName && touched.lastName,
        });
        const colorInputDisplayName = classNames(styles.inputDisplayName, {
          [styles.colorInputDisplayNameTrue]:
            !errors.displayName && touched.displayName,
          [styles.colorInputDisplayNameFalse]:
            errors.displayName && touched.displayName,
        });
        const colorInputEmail = classNames(styles.inputEmail, {
          [styles.colorInputEmailTrue]: !errors.email && touched.email,
          [styles.colorInputEmailFalse]: errors.email && touched.email,
        });
        const colorInputPassword = classNames(styles.inputPassword, {
          [styles.colorInputPasswordTrue]: !errors.password && touched.password,
          [styles.colorInputPasswordFalse]: errors.password && touched.password,
        });
        const colorInputConfirmPassword = classNames(
          styles.inputConfirmPassword,
          {
            [styles.colorInputConfirmPasswordTrue]:
              !errors.confirmPassword && touched.confirmPassword,
            [styles.colorInputConfirmPasswordFalse]:
              errors.confirmPassword && touched.confirmPassword,
          }
        );

        return (
          <Form className={styles.form}>
            <label className={styles.labelFirstAndLastName}>
              <Field
                className={colorInputFirstName}
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <div className={errorFirstName}>
                <ErrorMessage name="firstName" />
              </div>
              <Field
                className={colorInputLastName}
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              <div className={errorLastName}>
                <ErrorMessage name="lastName" />
              </div>
            </label>

            <label className={styles.labelDisplayNameAndEmail}>
              <Field
                className={colorInputDisplayName}
                name="displayName"
                type="text"
                placeholder="Display Name"
              />
              <div className={errorDisplayName}>
                <ErrorMessage name="displayName" />
              </div>
              <Field
                className={colorInputEmail}
                name="email"
                type="text"
                placeholder="Email Adress"
              />
              <div className={errorEmail}>
                <ErrorMessage name="email" />
              </div>
            </label>

            <label className={styles.labelPasswords}>
              <Field
                className={colorInputPassword}
                name="password"
                type="text"
                placeholder="Password"
              />
              <div className={errorPassword}>
                <ErrorMessage name="password" />
              </div>
              <Field
                className={colorInputConfirmPassword}
                name="confirmPassword"
                type="text"
                placeholder="Password Confirmation"
              />
              <div className={errorConfirmPassword}>
                <ErrorMessage name="confirmPassword" />
              </div>
            </label>

            <label className={styles.radioTextWrapper}>
              <div className={styles.radioWrapper}>
                <Field
                  className={styles.radio}
                  name="radio"
                  type="radio"
                  value="first"
                />
              </div>
              <div className={styles.textWrapper}>
                <p className={styles.firstLineTextRadio}>Join As a Buyer</p>
                <p className={styles.secondLineTextRadio}>
                  I am looking for a Name, Logo or Tagline for my business,
                  brand or product.
                </p>
              </div>
            </label>
            <label className={styles.radioTextWrapper}>
              <div className={styles.radioWrapper}>
                <Field
                  className={styles.radio}
                  name="radio"
                  type="radio"
                  value="second"
                />
              </div>
              <div className={styles.textWrapper}>
                <p className={styles.firstLineTextRadio}>
                  Join As a Creative or Marketplace Seller
                </p>
                <p className={styles.secondLineTextRadio}>
                  I plan to submit name ideas, Logo designs or sell names in
                  Domain Marketplace.
                </p>
              </div>
            </label>
            <label className={styles.checkboxWrapper}>
              <Field name="checkbox" type="checkbox"></Field>
              <p className={styles.textNearCheckbox}>
                Allow Squadhelp to send marketing/promotional offers from time
                to time
              </p>
            </label>
            <button className={styles.loginButton} type="submit">
              Create account
            </button>
            <span className={styles.textWithLink}>
              By clicking this button, you agree to our{" "}
              <a
                className={styles.link}
                href="https://www.squadhelp.com/Terms&Conditions"
              >
                Terms of Service.
              </a>
            </span>
          </Form>
        );
      }}
    </Formik>
  );
}
