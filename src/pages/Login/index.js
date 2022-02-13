import React from 'react'

import NavBar from '../Home/NavBar/nav_bar'
import LoginTapOne from './TapOne/LoginTapOne'
import "./Styles/LoginTapOne.css"

function Login() {
    return (
        <>
        <section className="section_login">
            <header id="menubar">
                <NavBar/>
            </header>
            <LoginTapOne/>
        </section>
        </>
    )
}

export default Login
