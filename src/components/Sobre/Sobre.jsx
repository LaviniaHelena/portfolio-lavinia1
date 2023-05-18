import React from "react";
import "./sobre.css";
import Image from "../../assets/img/lavi.jpeg";
import AboutBox from "./sobrebox";
import CV from "../../assets/img/Currículo Lavinia.pdf";

const Sobre = ( ) => {
    return (
       <section className="about container section" id='about'>
        <h2 className="section__title">Sobre mim</h2>

        <div className="about__container grid">
            <img src={Image} alt="" className="about__img" />

            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">Olá!  Meu nome é Lavínia  Helena Santos Oliveira, nasci dia 11 de janeiro de 2006. Tenho o objetivo de atuar na área de programação 'Fullstack', aprimorando meus conhecimentos e consequentemente meus projetos.</p>
                    
                    <a href={CV} download='' className="btn">
                        Baixar Currículo 
                        <span className="button__icon">
                        </span>
                    </a>
                </div>                       
                  
                        <div className="skills__bar">
                            <span className="skills__percentage photography"></span>
                        </div>

            </div>
        </div>
        <AboutBox />
       </section>
    )
}

export default Sobre