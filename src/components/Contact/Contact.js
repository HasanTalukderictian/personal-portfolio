import React, { useRef } from 'react'
import './Contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import MicroSoft from '../../assets/microsoft.png';
import FaceBook from '../../assets/facebook.png';
import FaceBookIcon from '../../assets/facebook-icon.png';
import InstraIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pzv7kci', 'template_ivkaxus', form.current, 'nn8L7XlSiaAU__svm9Kyr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }; 

  return (
   <section id='contactPage'>

    <div id="cilents"> 

       <h1 className="contactPageTitle">My Clients</h1>

       <p className="clientDesc">
        I Have had the opportunity to work with a diverse group of companies.
        Some of the notable companies I have work includes
       </p>

       <div className="clientImgs">

        <img src={Walmart} alt="Walmart" className="clientImg" />
        <img src={Adobe} alt="Adobe" className="clientImg" />
        <img src={MicroSoft} alt="MicroSoft" className="clientImg" />
        <img src={FaceBook} alt="FaceBook" className="clientImg" />

       </div>
    </div>
    <div id="contact">

       <h1 className="contactPageTitle">Contact Me</h1>

       <span className="contactDesc">Please fill out the form the below
        to discuss any work opportunities</span>

        <form className='contactForm' ref={form}  onSubmit={sendEmail}>

            <input type="text" className='name' placeholder='Your Name' name='your_name'/>
            <input type="text" className="email"  placeholder='Your Email' name='your_email' />
            <textarea  className='desc' row='10' name='message' placeholder='Your Message' />
           
        </form>
        <button type='submit' value='send' className='btn'>Submit</button>

        <div className="links">

            <img src={FaceBookIcon} alt="" className="link" />
            <img src={InstraIcon} alt="" className="link" />
            <img src={TwitterIcon} alt="" className="link" />
            <img src={YoutubeIcon} alt="" className="link" />
        </div>
    </div>
   </section>
  )
}

export default Contact
