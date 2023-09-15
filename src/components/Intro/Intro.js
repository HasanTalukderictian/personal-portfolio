import React from 'react'
import './Intro.css';
import bg from '../../assets/mypic (2).png';
import { Link } from 'react-scroll';
import hireMe from '../../assets/hireme.png';

const Intro = () => {
  return (
   <section id='intro'>
    <div className="introContent">
    <span className="hello">Hello, </span>
    <span className="introText">I'm <span className="introName">Hasan Talukder</span><br />
    WebSite Designer & Developer</span>
    <p className="introPara">I am  a skilled web designer and developer with experience in creating <br /> visually appcaling and user friendly website. </p>
    <Link><button className="btn"><img className='btnImg' src={hireMe} alt="hire me" />Hire Me</button></Link>

    </div>

   <img src={bg}alt="Profile Pic" className="bg" />
   </section>
  )
}

export default Intro
