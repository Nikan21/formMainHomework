import React from "react";
import styles from "./signUpWithGoogle.module.sass";
import logoGoogle from "../../../assets/images/google.svg";

export default function SignUpWithGoogle() {
  return (
    <div className={styles.googleWrap}>
      <img className={styles.googleLogo} src={logoGoogle} alt="Logo-Google" />
      <a
        className={styles.linkGoogle}
        href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fwww.squadhelp.com%2Flogin.php&client_id=78274772730-f62839c388e8b785mhfh211vr4ueva08.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=offline&approval_prompt=auto&flowName=GeneralOAuthFlow"
      >
        Sign in with Google
      </a>
    </div>
  );
}
