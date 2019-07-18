import React from "react";
import styled from 'styled-components';

import Layout from "~components/layout";
import SEO from "~components/seo";
import ProjectCard from "~components/ProjectCard";

const StyledH1 = styled.h1`
  font-size: 2.5rem;
`;

const myProjects = [
    {
        title: 'Doohnibor',
        url: 'http://doohnibor.herokuapp.com',
        imgSrc: null,
        desc: 'A cool project w/ stock trading'
    },
    {
        title: 'Transferable',
        url: 'http://transferable.co',
        imgSrc: null,
        desc: 'Early-stage education technology startup'
    },
    {
        title: 'Jobby Quest',
        url: '#',
        imgSrc: null,
        desc: 'App to help me manage job search'
    },
];

const Projects = () => (
    <Layout>
        <SEO title="Projects" />
        <header>
            <StyledH1>
                Projects
            </StyledH1>
        </header>

        <main>
            {myProjects.map(project => (
                <ProjectCard 
                    title={project.title}
                    url={project.url}
                    imgSrc={project.imgSrc}
                    desc={project.desc}
                />
            ))}
        </main>
    </Layout>
)

export default Projects