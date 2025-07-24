import React, { useState, useEffect } from 'react';
import { FaLink } from "react-icons/fa";

import asaxiyImage from '../../assets/asaxiy.png';
import vcCodexCloneImage from '../../assets/vcCodexClonr.png';
import carImage from '../../assets/car.png';
import orbitaImage from '../../assets/orbita.png';

import './Portfolio.css'

const projectsData = [
    {
        id: 1,
        title: "Online Market",
        category: "Books",
        imageUrl: asaxiyImage,
        projectUrl: "https://asaxiy-uz-main-original-og01x0d2p-isomiddins-projects-3558bf11.vercel.app/",
    },
    {
        id: 2,
        title: "Vc Code Clone",
        category: "App",
        imageUrl: vcCodexCloneImage,
        projectUrl: "https://vc-code-clon.vercel.app/",
    },
    {
        id: 3,
        title: "Car Rental Landing page",
        category: "Product",
        imageUrl: carImage,
        projectUrl: "https://car-rental-landing-page-udyj.vercel.app/",
    },
    {
        id: 4,
        title: "Orbita maket",
        category: "Branding",
        imageUrl: orbitaImage,
        projectUrl: "https://quyosh-orbita-animation.vercel.app/",
    }
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projectsData);

    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredProjects(projectsData);
        } else {
            setFilteredProjects(projectsData.filter(project => project.category === activeCategory));
        }
    }, [activeCategory]);

    const categories = ['All', 'App', 'Product', 'Branding', 'Books'];

    return (
        <div className='Portfolio'>
            <div className="portfolio_container">
                <div className="about_top">
                    <h2>Portfolio</h2>
                    <div className="active"></div>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="categorys">
                    <div className="ul_category">
                        {categories.map(category => (
                            <div
                                key={category}
                                className={`liCategory ${activeCategory === category ? 'active-category' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </div>
                        ))}
                    </div>

                    <div className='Project_section' id='project'>
                        <div className="grids">
                            {filteredProjects.map(project => (
                                <div className="projects" key={project.id} data-aos="fade-up">
                                    <div className="product_img">
                                        <img src={project.imageUrl} alt={project.title} />
                                        <a
                                            href={project.projectUrl}
                                            className='project-link'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <FaLink />
                                        </a>
                                        <h2 className="project-overlay-title">{project.title}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
