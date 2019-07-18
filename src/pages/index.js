import React from "react";
import styled from 'styled-components';

import Layout from "~components/layout";
import SEO from "~components/seo";
import Card from "~components/card";

import { FaGithub, FaChevronRight, FaFolderOpen, FaTv } from 'react-icons/fa';

const StyledHeader = styled.header`
  margin-bottom: 4rem;
`;

const BlueSpan = styled.span`
  color: #0a85ea;
`;

const GreenSpan = styled.span`
  color: #23d09c;
`;

const StyledH1 = styled.h1`
  font-size: 2.5rem;
`;

const StyledP = styled.p`
  font-size: 1.3rem;
`;


const StyledArrowWrapper = styled.div`
        position: absolute;
        transition: all .5s ease-out;
        opacity: .75;

        right: 10%;
        top: 50%;

        -webkit-transform: translate3d(0,-45%,0) scale(.8);
        transform: translate3d(0,-45%,0) scale(.8);

        & > svg {
            transition: all .25s ease-out;
        }

        @media (min-width: 786px) {
          display: none;
        }
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StyledHeader>
      <StyledH1>   
          Hi, I'm <br />
          <BlueSpan>
            Nick Thanasiu...
          </BlueSpan>
        </StyledH1>
        <StyledP>
          a web developer based in
          <GreenSpan>
            {' Toledo, OH'}
          </GreenSpan>
        </StyledP>
    </StyledHeader>

    <main>
      <CardGrid>
        <Card color={'green'} url="https://github.com/nickthanasiu">
          <FaGithub size={'2rem'} />
          <span>Check out some of my code</span>
          <StyledArrowWrapper>
            <FaChevronRight size={'1.25rem'} />
          </StyledArrowWrapper>
        </Card>
        <Card color={'blue'} url="./projects">
          <FaTv size={'2rem'} />
          <span>View some of my projects</span>
          <StyledArrowWrapper>
            <FaChevronRight size={'1.25rem'} />
          </StyledArrowWrapper>
        </Card>
        <Card color={'green'} url="https://resume.creddle.io/resume/gtsvve2yo8d">
          <FaFolderOpen size={'2rem'} />
          <span>View my resume</span>
          <StyledArrowWrapper>
            <FaChevronRight size={'1.25rem'} />
          </StyledArrowWrapper>
        </Card>
      </CardGrid>
    </main>
  </Layout>
)

export default IndexPage;
