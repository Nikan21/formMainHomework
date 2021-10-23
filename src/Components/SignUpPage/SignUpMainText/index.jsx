import React from "react";
import styles from "./signUpMainText.module.sass";

export default function SignUpMainText() {
  return (
    <div className = {styles.mainTextWrapper}>
      <h1 className={styles.textLineOne}>CREATE AN ACCOUNT</h1>
      <p className = {styles.textLineTwo}>We always keep your name and email adress private.</p>
    </div>
  );
}
