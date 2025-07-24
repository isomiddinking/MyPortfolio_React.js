import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import myImg from '../../assets/MyImg.jpg';
import { FaXTwitter, FaSkype } from 'react-icons/fa6';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';
import { IoMdPhotos } from 'react-icons/io';
import { VscSettings } from 'react-icons/vsc';
import { CgMail } from 'react-icons/cg';
import { RiMenu2Fill } from 'react-icons/ri';
import { IoMdClose } from "react-icons/io";

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    if (window.innerWidth <= 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="menyu_container" onClick={toggleSidebar}>
        {isOpen ? <IoMdClose className="menu_icon" /> : <RiMenu2Fill className="menu_icon" />}
      </div>

      <div className={`container ${isOpen ? 'open' : ''}`}>
        <div className="container_sidebar">
          <div className="img_top_box" data-aos="zoom-in" data-aos-delay="500">
            <img src={myImg} alt="profile" />
          </div>
          <h2>Isomiddin X.</h2>

          <div className="social_icons">
            <div className="social_icon_item"><a href="#"><FaXTwitter /></a></div>
            <div className="social_icon_item"><a href="#"><FaFacebook /></a></div>
            <div className="social_icon_item"><a href="#"><FaInstagram /></a></div>
            <div className="social_icon_item"><a href="#"><FaSkype /></a></div>
            <div className="social_icon_item"><a href="#"><FaLinkedin /></a></div>
          </div>

          <div className="header">
            <ul>
              <li><NavLink to="/" className={({ isActive }) => isActive ? 'ebr' : ''} onClick={handleNavClick}><IoHome /> Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? 'ebr' : ''} onClick={handleNavClick}><CiUser /> About</NavLink></li>
              <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? 'ebr' : ''} onClick={handleNavClick}><IoMdPhotos /> Portfolio</NavLink></li>
              <li><NavLink to="/services" className={({ isActive }) => isActive ? 'ebr' : ''} onClick={handleNavClick}><VscSettings /> Services</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'ebr' : ''} onClick={handleNavClick}><CgMail /> Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
