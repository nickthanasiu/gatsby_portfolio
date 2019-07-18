import React from "react";
import styled from 'styled-components';

import Layout from "~components/layout";
import SEO from "~components/seo";

const StyledH1 = styled.h1`
  font-size: 2.5rem;
`;

const Projects = () => (
    <Layout>
        <SEO title="Projects" />
        <StyledH1>
            Some of my projects
        </StyledH1>
    </Layout>
)

export default Projects