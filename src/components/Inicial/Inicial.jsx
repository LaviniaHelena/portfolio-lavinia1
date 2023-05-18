import React from "react";
import "./inicial.css";
import Me from "../../assets/img/lavi.jpeg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Inicial = ( ) => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Lavínia Helena</h1>
                <span className="home__education">Fullstack Developer</span>

                <HeaderSocials />

                <ScrollDown />
            </div>
            </section>
    )
}

export default Inicial