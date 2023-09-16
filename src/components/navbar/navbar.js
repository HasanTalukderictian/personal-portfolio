import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import emailjs from '@emailjs/browser';


const Navbar = () => {
  
  const [showMenu, setShowMenu] = useState(false);

  return (
   <nav className='navbar'>
    <img src={logo} alt="Logo" className='logo' />
    <div className="desktopMenu">
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItemList'>Home</Link>
      <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItemList'>About</Link>
      <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItemList'>Portfolio</Link>
      <Link  activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItemList'>Clients</Link>
    </div>

    <button className='desktopMenuBtn' onClick={() =>{
      document.getElementById('contact').scrollIntoView('smooth')
    }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
    </button>

    <img src={menu} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu )} />
    <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ItemList' onClick={() => setShowMenu(false)}>Home</Link>
      <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ItemList' onClick={() => setShowMenu(false)}>About</Link>
      <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ItemList'onClick={() => setShowMenu(false)}>Portfolio</Link>
      <Link  activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='ItemList' onClick={() => setShowMenu(false)}>Clients</Link>
      <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ItemList' onClick={() => setShowMenu(false)}>Contact</Link>
    </div>
   </nav>
  )
}

export default Navbar;
