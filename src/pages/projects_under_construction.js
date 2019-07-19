import React from "react";
import styled from 'styled-components';

import Layout from "~components/layout";
import SEO from "~components/seo";
import ProjectCard from "~components/ProjectCard";

const myProjects = [
    {
        title: 'Doohnibor',
        url: 'http://doohnibor.herokuapp.com',
        imgSrc: `${require('../images/doohnibor_project_screenshot.png')}`,
        desc: 'Web app clone of Robinhood stock-trading app built with NodeJS.' +
        ' Users can (fake) buy and sell stocks, add companies to a personal watchlist, look at company profiles with relevant news, and look at portfolio and individual stock trends.' +
        ' Front-end built with React, Redux, React-Router, Redux Forms, and Passport authentication.' +
        ' Backend with Express and Mongoose/MongoDB.',
        tag: 'Toy',
    },
    {
        title: 'Transferable',
        url: 'http://transferable.co',
        imgSrc: null,
        desc: 'Early-stage education technology startup',
        tag: 'Freelance'
    },
    {
        title: 'Jobby Quest',
        url: '#',
        imgSrc: null,
        desc: 'App to help me manage job search',
        tag: 'Toy'
    },
];

const Projects = () => (
    <Layout>
        <SEO title="Projects" />
        <main>
            {myProjects.map(project => (
                <ProjectCard 
                    title={project.title}
                    url={project.url}
                    imgSrc={project.imgSrc}
                    desc={project.desc}
                    tag={project.tag}
                />
            ))}
        </main>
    </Layout>
)

export default Projects