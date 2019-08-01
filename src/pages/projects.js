import React from "react";
import styled from 'styled-components';

import Layout from "~components/layout";
import SEO from "~components/seo";
import ProjectCard from "../components/ProjectCard";

// @TODO: Replace project images with screen capture videos

const myProjects = [
    {
        title: 'Doohnibor',
        shortDesc: 'Clone of the Robinhood stock trading web-app',
        url: 'http://doohnibor.herokuapp.com',
        imgSrc: `${require('../images/doohnibor_project_screenshot.png')}`,
        longDesc: 'Web app clone of Robinhood stock-trading app built with NodeJS.' +
        ' Users can (fake) buy and sell stocks, add companies to a personal watchlist, look at company profiles with relevant news, and look at portfolio and individual stock trends.' +
        ' Front-end built with React, Redux, React-Router, and Redux Forms.' +
        ' Backend with Express and Mongoose/MongoDB.',
        tag: 'Toy',
    },
    {
        title: 'Transferable',
        url: 'http://transferable.co',
        imgSrc: `${require('../images/transferable_project_screenshot.png')}`,
        shortDesc: 'Early-stage education technology startup',
        longDesc: 'I conducted a website refresh for an early-stage education technology startup.' +
        ' Designed user interface layouts and converted into interactive React application. Integrated application front-end with Strapi API for content management.' +
        ' Advised client on planning for future application buildout.',
        tag: 'IRL',
    },
    /*
    {
        title: 'Jobby Quest',
        url: '#',
        imgSrc: null,
        desc: 'App to help me manage job search',
        tag: 'Toy'
    },
    */
];

const StyledHeader = styled.header`
    margin-bottom: 5rem;
`;

const StyledTag = styled.div`
    background-color: ${props => props.toy ? "#ccd9ff": "#3ddead"};
    color: #000;
    font-size: .875rem;
    width: 4rem;
    height: 2rem;
    padding: .25rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledKeyRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding-left: .5rem;
`;

const StyledKeyParagraph = styled.p`
    font-size: .875rem;
    margin-left: 1rem;
`;


const Projects = () => (
    <Layout>
        <SEO title="Projects" />
        <StyledHeader>
            <h3>Projects Key</h3>
            <StyledKeyRow>
                <StyledTag toy>
                    Toy
                </StyledTag>
                <StyledKeyParagraph>
                    Projects I've built just for fun / my own enrichment
                </StyledKeyParagraph>
            </StyledKeyRow>
            <StyledKeyRow>
                <StyledTag>
                    IRL
                </StyledTag>
                <StyledKeyParagraph>
                    Freelance work
                </StyledKeyParagraph>
            </StyledKeyRow>
        </StyledHeader>
        <main>
            {myProjects.map(project => (
                <ProjectCard 
                    title={project.title}
                    url={project.url}
                    imgSrc={project.imgSrc}
                    shortDesc={project.shortDesc}
                    longDesc={project.longDesc}
                    tag={project.tag}
                />
            ))}
        </main>
    </Layout>
)

export default Projects