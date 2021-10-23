import React from "react";
import styles from "./signButton.module.sass";

export default function SignUpButton() {
  return (
    <a className={styles.signUpButton} href="/signUp">
      Signup
    </a>
  );
}
