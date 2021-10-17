import React from 'react'
import Logo from './LoginLogo/index'
import SignUpButton from './LoginSignUp/index'
import './loginPage.sass'

export default function LoginPage() {
    return (
        <body className = 'loginWindow'>
            <Logo />
            <SignUpButton />
        </body>
    )
}
