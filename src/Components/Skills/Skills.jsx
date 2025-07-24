import React, { useEffect, useRef, useState, useCallback } from 'react';
import AOS from 'aos'; // AOS ni import qiling
import 'aos/dist/aos.css'; // AOS CSS ni import qiling
import './Skill.css';

const Skills = () => {
  const skillsRef = useRef(null);
  const [htmlProgress, setHtmlProgress] = useState(0);
  const [cssProgress, setCssProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
     // AOS.init() endi loyihaning asosiy kirish nuqtasida (masalan, main.jsx/index.js) chaqirilishi kerak.
     // Bu yerda faqatgina agar kontent dinamik yuklansa yoki o'zgarsa, AOS ni yangilash uchun AOS.refresh() ni ishlatish maqsadga muvofiq.
     AOS.refresh();
   }, []);

  const animateProgress = useCallback((target, setter, duration = 1000) => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      setter(Math.floor(percentage * target));
      if (percentage < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, []);

  // Skill progress bar animatsiyasini AOS ga bog'laymiz
  // Bu funksiya AOS animatsiyasi tugagandan so'ng ishga tushadi
  const startProgressBarAnimations = useCallback(() => {
    if (!animationStarted) {
      setAnimationStarted(true);
      animateProgress(90, setHtmlProgress);
      animateProgress(80, setCssProgress);
      animateProgress(40, setJsProgress);
    }
  }, [animationStarted, animateProgress]);

  useEffect(() => {
    // Skills komponenti ekranga kirganda AOS elementlari animatsiyani boshlaydi.
    // Progress barlar uchun alohida animatsiyani ishga tushiramiz.
    // AOS o'zi elementni DOMga qo'shish va animatsiyasini boshqaradi.
    // Bizning progress animatsiyamiz AOS animatsiyasi tugagandan keyin boshlanishi kerak.
    // Lekin oddiyroq yo'li - agar element ko'rinishga kirsa, progressni boshlash.
    // Shuning uchun, avvalgi `handleScroll` logikasini qoldiramiz.
    // AOS o'zining `data-aos` atributlari orqali elementlarning kirib kelish animatsiyasini boshqaradi.

    // AOS bilan birga, progress barlarni ham scrollga qarab animatsiya qilish uchun
    // Intersection Observer ishlatish yoki AOS eventlaridan foydalanish mumkin.
    // Hozirgi holatda, biz `skills_list` diviga `data-aos` qo'shamiz
    // va progress barlar shu AOS animatsiyasi tugagandan keyin boshlanadi.
    // Eng sodda yechim:
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted) {
            startProgressBarAnimations();
          }
        });
      },
      {
        threshold: 0.5, // 50% ko'rinarli bo'lganda
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [animationStarted, startProgressBarAnimations]);


  return (
    <div className='Skills' ref={skillsRef}>
      <div className="skills_container">
        <div className="about_top" data-aos="fade-up"> {/* Bosh qismga AOS qo'shdik */}
          <h2>Skills</h2>
          <div className="active"></div>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="skills_list" data-aos="fade-up" data-aos-delay="200"> {/* Skill ro'yxatiga AOS qo'shdik */}
          <div className="skill_item">
            <h3>HTML</h3>
            <div className="animation_bar">
              <div className="progress_fill" style={{ width: `${htmlProgress}%` }}></div>
              <span className="progress_percentage">{htmlProgress}%</span>
            </div>
          </div>

          <div className="skill_item">
            <h3>CSS</h3>
            <div className="animation_bar">
              <div className="progress_fill" style={{ width: `${cssProgress}%` }}></div>
              <span className="progress_percentage">{cssProgress}%</span>
            </div>
          </div>

          <div className="skill_item">
            <h3>JavaScript</h3>
            <div className="animation_bar">
              <div className="progress_fill" style={{ width: `${jsProgress}%` }}></div>
              <span className="progress_percentage">{jsProgress}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;