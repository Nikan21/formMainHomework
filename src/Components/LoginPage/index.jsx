import React from 'react'
import Logo from './LoginLogo/index'
import SignUpButton from './LoginSignUp/index'
import MainText from './LoginMainText/index'
import LoginForm from './LoginForm/index'
import styles from './loginPage.module.sass'

export default function LoginPage() {
    return (
        <div className = {styles.loginWindow}>
            <header className = {styles.header}>
            <Logo />
            <SignUpButton />
            </header>
            <MainText />
            <LoginForm />
        </div>
    )
}
