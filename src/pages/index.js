import React from "react";
import styled from 'styled-components';
import {
  FaGithub,
  FaChevronRight,
  FaChevronDown,
  FaFolderOpen,
} from 'react-icons/fa';

import SortingVideoURL from '../videos/sorting_visualizer.webm';
import DoohniborVideoURL from '../videos/doohnibor.webm';
import TransferableVideoURL from '../videos/transferable.webm';

import Layout from "~components/layout";
import SEO from "~components/seo";
import Card from "~components/card";



const StyledHeader = styled.header`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
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
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  border: 1px solid red;

  padding: 0 1rem;
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
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
  min-height: 100vh;
  margin-top: 8rem;
  margin: 8rem -50% 0;
  padding: 5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledProject = styled.div`
  background-color: #000;
  background-color: rgb(23, 21, 21);
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  min-height: 30rem;
  margin-bottom: 6rem;
  
  padding: 1rem 2rem 2rem;
  cursor: pointer;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;


  @media (max-width: 786px) {
    border: 1px solid red;
  }
`;

const StyledProjectTitle = styled.h3`
  margin-bottom: 2rem;
  font-size: 1.375rem;
  font-weight: 700;
`;

const StyledProjectDescription = styled.p`
  font-size: .875rem;
  max-width: 500px;
`;

const SkillTagsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const SkillTag = styled.div`
  background-color: rgb(166, 192, 254);
  color: rgb(7, 81, 191);
  margin-right: 1rem;
  padding: .25rem .5rem;
  font-size: .75rem;
`;

const ViewProjectSection = styled.div`
  padding-top: 1rem;
`;

const ViewProjectLink = styled.a`
  box-sizing: border-box; 
  cursor: pointer;
  background-color: ${props => (
    props.primary ? 'rgb(7, 81, 191)' : 'inherit'
  )};
  color: ${props => props.primary ? '#fff' : 'rgb(7, 81, 191)'};
  border: 1px solid rgb(7, 81, 191);
  margin-right: 1rem;
  padding: .5rem 1rem;
  font-size: .75rem;
`
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
            <video autoPlay loop muted width="100%">
              <source src={SortingVideoURL} type="video/webm" />
            </video>
            <SkillTagsSection>
              <SkillTag>
                Javascript / ES6
              </SkillTag>
              <SkillTag>
                React
              </SkillTag>
              <SkillTag>
                Redux
              </SkillTag>
              <SkillTag >
                Styled Components
              </SkillTag>
            </SkillTagsSection>
            <StyledProjectDescription>
              A tool to help understand various sorting algorithms by visualizing
              how the algorithms iterate over an array. Built with React, Redux, and
              Styled Components. This project was my first foray into React's Hooks API,
              and it utilizes the Context API to implement a dark mode. 
            </StyledProjectDescription>
            <ViewProjectSection>
              <ViewProjectLink href="#" primary>
                View Project
              </ViewProjectLink>
              <ViewProjectLink href="#">
                View Code
              </ViewProjectLink>
            </ViewProjectSection>
          </StyledProject>
          <StyledProject>
            <StyledProjectTitle>
              Doohnibor (Robinhood Clone)
            </StyledProjectTitle>
            <video autoPlay loop muted width="100%">
              <source src={DoohniborVideoURL} type="video/webm" />
            </video>
            <SkillTagsSection>
              <SkillTag >
                Javascript / ES6
              </SkillTag>
              <SkillTag>
                React
              </SkillTag>
              <SkillTag>
                Redux
              </SkillTag>
              <SkillTag >
                CSS/SCSS
              </SkillTag>
              <SkillTag >
                Node.js
              </SkillTag>
              <SkillTag >
                Express
              </SkillTag>
              <SkillTag >
                MongoDB
              </SkillTag>
            </SkillTagsSection>
            <StyledProjectDescription>
              A tool to help understand various sorting algorithms by visualizing
              how the algorithms iterate over an array. Built with React, Redux, and
              Styled Components. This project was my first foray into React's Hooks API,
              and it utilizes the Context API to implement a dark mode. 
            </StyledProjectDescription>
            <ViewProjectSection>
              <ViewProjectLink href="#" primary>
                View Project
              </ViewProjectLink>
              <ViewProjectLink href="#">
                View Code
              </ViewProjectLink>
            </ViewProjectSection>
          </StyledProject>
          <StyledProject>
            <StyledProjectTitle>
              Transferable
            </StyledProjectTitle>
            <video autoPlay loop muted width="100%">
              <source src={TransferableVideoURL} type="video/webm" />
            </video>
            <SkillTagsSection>
              <SkillTag >
                Javascript / ES6
              </SkillTag>
              <SkillTag>
                Gatsby
              </SkillTag>
              <SkillTag >
                CSS/SCSS
              </SkillTag>
              <SkillTag>
                Node.js
              </SkillTag>
              <SkillTag>
                Strapi (Headless CMS)
              </SkillTag>
              
            </SkillTagsSection>
            <StyledProjectDescription>
              A tool to help understand various sorting algorithms by visualizing
              how the algorithms iterate over an array. Built with React, Redux, and
              Styled Components. This project was my first foray into React's Hooks API,
              and it utilizes the Context API to implement a dark mode. 
            </StyledProjectDescription>
            <ViewProjectSection>
              <ViewProjectLink href="#" primary>
                View Project
              </ViewProjectLink>
              <ViewProjectLink href="#">
                View Code
              </ViewProjectLink>
            </ViewProjectSection>
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
