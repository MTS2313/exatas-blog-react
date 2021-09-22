import React from 'react'

import NavBar from './NavBar/nav_bar';
import MainPage from './MainPage';
import MiddleMain from './MiddleMainPage/middleMainPage';
import EndPageOne from './EndPagaOne';


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
        <EndPageOne/>
        </section>
        </>
    )
}

export default Home
