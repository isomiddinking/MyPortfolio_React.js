import { useEffect } from 'react';
import './About.css';
import myImg from '../../assets/MyImg.jpg';
import { FaAngleRight } from 'react-icons/fa6';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,  // animatsiya davomiyligi (ms)
      offset: 100,     // scroll pastga tushganda boshlangan joy
      once: false,     // ❗ Har safar qayta ishlasin
      mirror: true     // ❗ Scroll yuqoriga chiqqanda ham animatsiya ishlasin
    });
  }, []);

  return (
    <div className='About' id='about'>
      <div className='about_container'>
        <div className='about_top' data-aos='fade-up'>
          <h2>About</h2>
          <div className='active'></div>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et <br />
            nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis
            commodi quidem hic quas.
          </p>
        </div>

        <div className='grids_container'>
          <div className='img_container' data-aos='zoom-in'>
            <img src={myImg} alt='My Profile' />
          </div>

          <div className='text_container' data-aos='fade-left'>
            <h2>Web Developer.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className='left_orright'>
              <div className='left' data-aos='fade-right'>
                <div className='bithday'>
                  <span><FaAngleRight /></span>
                  <h2>Birthday:</h2>
                  <p>4 Yanvar 2010</p>
                </div>
                <div className='bithday'>
                  <span><FaAngleRight /></span>
                  <h2>Phone:</h2>
                  <p>+998 50 570 1920</p>
                </div>
                <div className='bithday'>
                  <span><FaAngleRight /></span>
                  <h2>City:</h2>
                  <p>Namangan shaxar</p>
                </div>
              </div>

              <div className='right' data-aos='fade-left'>
                <div className='bithday'>
                  <span><FaAngleRight /></span>
                  <h2>Age:</h2>
                  <p>15</p>
                </div>
                <div className='bithday'>
                  <span><FaAngleRight /></span>
                  <h2>Email:</h2>
                  <p>Isomiddinxakimdjnaov@gmail.com</p>
                </div>
                <div className='bithday'>
                  <span><FaAngleRight /></span>
                  <h2>Freelance:</h2>
                  <p>Available</p>
                </div>
              </div>
            </div>

            <p className='p' data-aos='fade-up'>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
