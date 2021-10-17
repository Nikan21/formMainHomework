import React from 'react'
import Logo from './LoginHeader/LoginLogo/index'
import SignUpButton from './LoginHeader/LoginSignUp/index'
import './loginPage.sass'

export default function LoginPage() {
    return (
        <body className = 'loginWindow'>
            <Logo />
            <SignUpButton />
        </body>
    )
}
