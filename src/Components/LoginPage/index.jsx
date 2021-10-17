import React from 'react'
import Logo from './LoginLogo/index'
import SignUpButton from './LoginSignUp/index'
import './loginPage.sass'

export default function LoginPage() {
    return (
        <div className = 'loginWindow'>
            <header className = 'header'>
            <Logo />
            <SignUpButton />
            </header>
        </div>
    )
}
