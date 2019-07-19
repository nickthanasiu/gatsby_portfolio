import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

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
    height: 15rem;
    margin-bottom: 2rem;
`;

const StyledProjectDesc = styled.p`
    font-size: 1rem;
    display: none;
`;

const ProjectCard = ({
    title,
    url,
    imgSrc,
    desc,
    tag
}) => (
    <a href={url}>
        <StyledProjectCard>
            <StyledProjectTitle>
                { title }
            </StyledProjectTitle>
            <StyledImg src={imgSrc} />
            <FaChevronDown
                style={{
                border: '1px solid red'
            }}
                onClick={() => console.log('clicky')}
            />
            <StyledProjectDesc>
                { desc }
            </StyledProjectDesc>
        </StyledProjectCard>
    </a>
);

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
};


export default ProjectCard;