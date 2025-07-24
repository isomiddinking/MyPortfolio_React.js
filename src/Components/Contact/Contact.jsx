import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-section About">
            <div className="contact-container">
                <div className="contact-info-map-wrapper">
                    <div className="contact-info">
                        {/* Information Item: Address */}
                        <div className="info-item" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon-wrapper">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="text-content">
                                <h3>Address</h3>
                                <p>Namangan Shaxar</p>
                            </div>
                        </div>

                        {/* Information Item: Call Us */}
                        <div className="info-item" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-wrapper">
                                <FaPhone />
                            </div>
                            <div className="text-content">
                                <h3>Call Us</h3>
                                <p>+998 50 570 1920 </p>
                            </div>
                        </div>

                        {/* Information Item: Email Us */}
                        <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon-wrapper">
                                <FaEnvelope />
                            </div>
                            <div className="text-content">
                                <h3>Email Us</h3>
                                <p>IsomiddinX@gmail.com</p>
                            </div>
                        </div>

                        {/* Google Map Container */}
                        <div className="map-container" data-aos="fade-up" data-aos-delay="400">
                            <iframe
                                title="Google Map of Namangan, Uzbekistan"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48601.55106132474!2d71.6508003610991!3d40.99993358055275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc9b2750e30d1d%3A0x6e7e4a1a5b8e9d8e!2sNamangan%2C%20Namangan%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1721820000000!5m2!1sen!2sus"
                                width="100%"
                                height="290"
                                style={{ border: 0, borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-wrapper" data-aos="fade-up" data-aos-delay="500">
                    <form className="contact-form">
                        <div className="form-group-row">
                            <div className="form-group">
                                <label htmlFor="your-name" className="sr-only">Your Name</label>
                                <input type="text" id="your-name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="your-email" className="sr-only">Your Email</label>
                                <input type="email" id="your-email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject" className="sr-only">Subject</label>
                            <input type="text" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea id="message" rows="8" placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" className="send-message-button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;