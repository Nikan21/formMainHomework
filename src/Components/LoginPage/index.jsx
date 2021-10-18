import React from 'react'
import Logo from './LoginLogo/index'
import SignUpButton from './LoginSignUp/index'
import MainText from './LoginMainText/index'
import LoginForm from './LoginForm/index'
import './loginPage.sass'

export default function LoginPage() {
    return (
        <div className = 'loginWindow'>
            <header className = 'header'>
            <Logo />
            <SignUpButton />
            </header>
            <MainText />
            <LoginForm />
        </div>
    )
}
