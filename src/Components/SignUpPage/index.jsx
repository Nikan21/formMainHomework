import React from "react";
import Logo from "../HeaderLogo/index";
import SignUpButton from "./LoginSignUp/index";
import SignUpMainText from './SignUpMainText/index'
import SignUpForm from "./SignUpForm/index";
import SignUpWithGoogle from '../SignUpWithGoogle/index'

import styles from "./signUpPage.module.sass";

export default function SignUpPage() {
  return (
    <>
    <div className={styles.loginWindowOne}>
      <header className={styles.header}>
        <Logo />
        <SignUpButton />
      </header>
      <main className={styles.main}>
        <SignUpMainText />
        <SignUpForm />
        <SignUpWithGoogle />
      </main>
      <footer className={styles.footer}></footer>
    </div>
    <div className={styles.loginWindowTwo}></div>
    </>
  );
}
