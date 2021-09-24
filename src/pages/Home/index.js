import React from 'react'

import NavBar from './NavBar/nav_bar';
import MainPage from './MainPage';
import MiddleMain from './MiddleMainPage/middleMainPage';
import EndPageAreaOne from './EndPagaOne';
import WeAbout from './WeAbout';



function Home() {
    return (
        <>
        <header id="menubar">
        <NavBar/>
        </header>
        <section id="area_one">
        <MainPage/>
        </section>
        <section id="area_duo">
        <MiddleMain/>
        </section>
        <section id="area_three">
        <EndPageAreaOne/>
        </section>
        <section className="about_style">
        <WeAbout/>
        </section>
        </>
    )
}

export default Home
