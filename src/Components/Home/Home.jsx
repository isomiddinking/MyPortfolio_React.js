import React, { useEffect, useState } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

const roles = ['Frontend Developer', 'React Developer', 'JavaScript Developer'];

const Home = () => {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        AOS.refresh(); // AOS komponent refresh
    }, []);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let typingSpeed = isDeleting ? 50 : 100;
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.slice(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
                if (charIndex + 1 === currentRole.length) {
                    setIsDeleting(true);
                    typingSpeed = 2000;
                }
            } else {
                setText(currentRole.slice(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                if (charIndex === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                    typingSpeed = 500;
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <div>
        <div className='home-container'>
            <h2 data-aos="fade-right" data-aos-delay="200">Isomiddin Xakimjanov</h2>
            <h3 data-aos="fade-up" data-aos-delay="400">
                I'm <span className='typing' data-aos="fade-left" data-aos-delay="600">{text}</span>
                <span className='cursor'></span>
            </h3>

           
        </div>
        <About />
        <Skills />
        <Portfolio/>
        <Services/>
        <Contact/>
        </div>

    );
};

export default Home;
