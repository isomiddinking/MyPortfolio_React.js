import React from 'react';
import { PiHandbagLight, PiLaptopLight, PiChartLineLight, PiMegaphoneLight, PiDatabaseLight, PiHeadsetLight } from "react-icons/pi";
import { FaLaptopCode, FaChartLine, FaBullhorn, FaDatabase, FaHeadset } from "react-icons/fa";
import './Services.css'


const servicesData = [
    {
        id: 1,
        icon: <PiHandbagLight />,
        title: "Lorem, ipsum.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam dolorem esse, tempore eligendi modi alias labore praesentium commodi animi expedita cupiditate repellat, illo aliquid voluptate. Reiciendis nobis dolorum quaerat!"
    },
    {
        id: 2,
        icon: <FaLaptopCode />,
        title: "Web Development",
        description: "Expert web development services tailored to your needs, from simple static sites to complex web applications, ensuring modern standards and robust performance."
    },
    {
        id: 3,
        icon: <FaChartLine />,
        title: "Data Analytics",
        description: "Transforming raw data into actionable insights, our data analytics services help businesses make informed decisions and identify key trends for growth."
    },
    {
        id: 4,
        icon: <FaBullhorn />,
        title: "Digital Marketing",
        description: "Comprehensive digital marketing strategies including SEO, social media, and content creation to enhance your online presence and reach a wider audience."
    },
    {
        id: 5,
        icon: <FaDatabase />,
        title: "Database Management",
        description: "Efficient and secure database management solutions, ensuring data integrity, optimal performance, and seamless access for your applications."
    },
    {
        id: 6,
        icon: <FaHeadset />,
        title: "Customer Support",
        description: "Providing reliable and responsive customer support to ensure your clients have a smooth experience and their queries are resolved promptly."
    }
];

const Services = () => {
    return (
        <div className='Services'>
            <div className="services_container">
                <div className="about_top">
                    <h2>Services</h2>
                    <div className="active"></div>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="services_grid_container">
                    {servicesData.map(service => (
                        <div className="services_grid" key={service.id} data-aos="fade-up">
                            <div className="icon_container">
                                <span>{service.icon}</span>
                            </div>
                            <div className="text_services">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
