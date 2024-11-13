"use client"

import { useState } from 'react';
import "../styles/global.css";
import styles from "../styles/global.module.css";

export default function Navbar () {

      const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
    return (
        <>
        <div className={styles.navbar}>
        <img 
          src="https://res.cloudinary.com/dp5fubzft/image/upload/v1728824757/logo-removebg-preview_g76l4x.png" 
          alt="Logo Mandala Budaya" 
          className={styles.logo} 
        />
        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <li><a href="/" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
        </>
    )
}