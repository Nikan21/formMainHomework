import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import classNames from "classnames";
import styles from './signUpForm.module.sass'

export default function SignUpForm() {

    const initialValues = {
        firstName: '',
        lastName: '',
        displayName: '',
        email: "",
        password: "",
        passwordConfirmed: "",
      };

      const onSubmit = (values, formikBag) =>{
          console.log(values)
          formikBag.resetForm()
      }

      const scheme = yup.object().required().shape({
        firstName: yup.string().matches(/^[A-z][a-z][0-9]$/, 'First Name is not valid').required('Field is empty'),
        lastName: yup.string().matches(/^[A-z][a-z][0-9]$/, 'Last Name is not valid').required('Field is empty'),
        displayName: yup.string().matches(/^[A-z][a-z][0-9]$/, 'Display Name is not valid').required('Field is empty'),
        email: yup.string().matches(/^[A-z][a-z][0-9][.@]$/, 'Email adress is not valid').required('Field is empty'),
        password: yup.string().matches(/^[A-z][a-z][0-9][.@]$/, 'Password is not valid').required('Field is empty'),
        passwordConfirmed: yup.string().oneOf([yup.ref('password')]).required('Field is empty')
      })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={scheme}
        >
            {({errors, touched})=>{
                const errorFirstName = classNames(styles.inputFirstName,{
                    [styles.errorFirstName]: errors.firstName && touched.firstName
                })
                const errorLastName = classNames(styles.inputLastName,{
                    [styles.errorLastName]: errors.lastName && touched.lastName
                })
                const errorDisplaytName = classNames(styles.inputDisplayName,{
                    [styles.errorDisplayName]: errors.displayName && touched.displayName
                })
            }}
        </Formik>
    )
}
