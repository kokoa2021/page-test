import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide';
import Reveal from 'react-reveal/Reveal';
import "./member.css"

class Subject extends Component {
    render() {
        return (
            <div className = "text">
                <header className = "member">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.text1}</h2>
                    {this.props.text2}
                </header>

            </div>
        )
    }
}

function Member(){
    return (
<div className = "memberPage textStyle1" id = "member">
        <Slide bottom>
        <section className = "memberBox textStyle">
                <section className = "box">
                   <Subject title="소개1" text1="내용1" text2="소갯말1" />
                </section>
                <section className = "box">
                    <Subject title="소개1" text1="내용1" text2="소갯말1" />
                </section>
                <section className = "box">
                  <Subject title="소개1" text1="내용1" text2="소갯말1" />
                </section>
                <section className = "box">
                    <Subject title="소개1" text1="내용1" text2="소갯말1" />
                </section>        
        </section>        
        </Slide>
    </div>
   
    );
} 

export default Member;