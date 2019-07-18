import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledProjectCard = styled.div`
    position: relative;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    margin-bottom: 1rem;
    cursor: pointer;
`;

const StyledProjectTitle = styled.h1`
    font-size: 1.25rem;
`;

const StyledImg = styled.img`
    border: 1px solid red;
    height: 12rem;
`;

const StyledProjectDesc = styled.p`
    font-size: 1rem;
`;

const ProjectCard = ({ title, url, imgSrc, desc }) => (
    <a href={url}>
        <StyledProjectCard>
            <StyledProjectTitle>
                { title }
            </StyledProjectTitle>
            <StyledImg src={imgSrc} />
            <StyledProjectDesc>
                { desc }
            </StyledProjectDesc>
        </StyledProjectCard>
    </a>
);

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};


export default ProjectCard;