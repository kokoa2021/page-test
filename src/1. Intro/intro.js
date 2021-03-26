import React from 'react';
import logo from './logo.png';
import "./intro.css"
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide';
import Reveal from 'react-reveal/Reveal';

function Intro(){
    return (
    <div className = "introPage">
        <Fade left cascade>
            <section className = "topBar">
                <a className = "topBarButton" href="#member"> MEMBERS</a>
                <a className = "topBarButton"> PROJECTS</a>
                <a className = "topBarButton"> CONTECT</a>
            </section> 
        </Fade>

        <section className = "introTextBox">
                <Fade right cascade>
                    <div className = "introText">
                        <Fade right cascade>
                            <h1>안녕하세요</h1>
                        </Fade>
                        <Fade right cascade>
                            <h1>저는</h1>
                        </Fade>
                        <Fade right cascade>
                            <h1>지영입니다!</h1>
                        </Fade>
                    </div>                
                </Fade>
        </section>

        <section  className="logo" >
            <Fade left cascade >
                <img src={logo}  href="#member"/>
            </Fade>
        </section>
        
    </div>
   
    );
} 

export default Intro;