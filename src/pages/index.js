import React from "react";
import styled from 'styled-components';
import {
  FaGithub,
  FaChevronRight,
  FaChevronDown,
  FaFolderOpen,
} from 'react-icons/fa';

import VideoURL from '../videos/sorting_visualizer.webm';

import Layout from "~components/layout";
import SEO from "~components/seo";
import Card from "~components/card";



const StyledHeader = styled.header`
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 4rem;
`;

const StyledH1 = styled.h1`
  font-size: 2.5rem;
`;

const StyledP = styled.p`
  font-size: 1.125rem;
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
          right: 5%;
        }
`;

const StyledMain = styled.main`
  max-width: 700px;
  margin: 0 auto;
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ViewProjects = styled.div`
  font-size: .75rem;
  font-weight: 700;
  height: 3rem;
  margin-top: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  -webkit-transition: all .3s ease;
  transition: all .3s ease;

  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-animation-duration: 2.5s;
  animation-duration: 2.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;

  @media (min-width: 786px) {
    font-size: .9rem;
  }

  @-webkit-keyframes bounce {
    0%, 20%, 40%, 60%, 80%, 100% {
      -webkit-transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-5px);
    }
  }

  @keyframes bounce {
    0%, 20%, 40%, 60%, 80%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;

const StyledProjectsSection = styled.section`
  
  margin-top: 8rem;
  min-height: 100vh;
`;

const StyledProject = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 30rem;
  padding: 1rem 2rem 2rem;
  cursor: pointer;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  box-shadow: 4px 5px 10px rgba(0, 0, 0, .4);
`;

const StyledProjectTitle = styled.h3`
  margin-bottom: 2rem;
`;

const StyledProjectDescription = styled.p`
  font-size: .9rem;
  margin-top: 2rem;
  padding: 0 .5rem;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <StyledHeader>
        <StyledH1>   
            Hi, I'm <br />
            Nick Thanasiu...
          </StyledH1>
          <StyledP>
            a web developer based in
            Toledo, OH
          </StyledP>
      </StyledHeader>
  
      <StyledMain>
      <CardGrid>
          <Card 
            color={'green'}
            url="https://github.com/nickthanasiu"
            hasShadow={true}
          >
            <FaGithub size={'2rem'} />
            <span>Check out some of my code</span>
            <StyledArrowWrapper>
              <FaChevronRight size={'1.25rem'} />
            </StyledArrowWrapper>
          </Card>
          <Card 
            color={'blue'}
            url="https://resume.creddle.io/resume/gtsvve2yo8d"
            hasShadow={true}
          >
            <FaFolderOpen size={'2rem'} />
            <span>View my resume</span>
            <StyledArrowWrapper>
              <FaChevronRight size={'1.25rem'} />
            </StyledArrowWrapper>
          </Card>
          <ViewProjects onClick={() => console.log('clicky clicky')}>
            <span>View some of my projects</span>
            <FaChevronDown size={'1rem'} />
          </ViewProjects>
        </CardGrid>
        <StyledProjectsSection className="projects-section">
          <StyledProject>
            <StyledProjectTitle>
              Sorting Algorithm Visualizer
            </StyledProjectTitle>
            <video autoPlay loop width="100%">
              <source src={VideoURL} type="video/webm" />
            </video>

            <StyledProjectDescription>
            <p>Here's a brief description of the project.Here's a brief description of the project.Here's a brief description of the project.Here's a brief description of the project.Here's a brief description of the project.Here's a brief description of the project.Here's a brief description of the project.Here's a brief description of the project.Here's a brief description of the project.</p>
            </StyledProjectDescription>
          </StyledProject>
        </StyledProjectsSection>
      </StyledMain>
    </Layout>
  );
};

/*
<Card 
          color={'green'}
          url="#"
          hasShadow={false}
        >
          <span>View some of my projects</span>
          <StyledArrowWrapperBottom>
            <FaChevronDown size={'1.25rem'} />
          </StyledArrowWrapperBottom>
        </Card>*/
export default IndexPage;
