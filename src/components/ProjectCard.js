import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const StyledProjectCard = styled.div`
    position: relative;
    background-color: #fff;
    background-color: #031b3d;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    margin: 2rem auto 1rem; 
    cursor: pointer;
    max-width: 40rem;
    
    transition: height .25s ease;

    height: ${props => props.isExpanded === false ? '26rem' : '36rem' };

    &:hover {
        box-shadow: 4px 7px 7px 0 rgba(14,30,37,.12);
    }
`;

const StyledHeader = styled.header`
    height: 5rem;
    display: flex;
    justify-content: space-between;
`;

const StyledProjectTitle = styled.h1`
    font-size: 1.25rem;
`;

const StyledShortDesc = styled.p`
    font-size: .875rem;
    margin-top: -.375rem;
`;

const StyledTag = styled.div`
    background-color: ${props => props.tag === 'Toy' ? "#ccd9ff": "#3ddead"};
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

const StyledImg = styled.img`
    height: 15rem;
    margin: 1rem auto 2rem;
    max-width: 30rem;

    &:hover {
        opacity: 0.5;
    }
`;

const StyledProjectDesc = styled.p`
    font-size: .875rem;
    padding: 0 1.5rem;
    line-height: 1.25rem;

    transition: display 1s ease-in-out;
    display: ${props => props.isExpanded === false ? 'none': 'block' };
`;

const StyledArrowWrapper = styled.div`
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
`;

class ProjectCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };
    }

    expandProjectCard = e => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }

    render() {
        const {
            title,
            shortDesc,
            url,
            imgSrc,
            longDesc,
            tag,
        } = this.props;

        const { isExpanded } = this.state;

        return (
            <a href={url}>
                <StyledProjectCard isExpanded={isExpanded}>
            <StyledHeader>
                <div>
                    <StyledProjectTitle>
                        { title }
                    </StyledProjectTitle>
                    <StyledShortDesc>
                        { shortDesc }
                    </StyledShortDesc>
                </div>
                <StyledTag tag={tag}>
                    { tag }
                </StyledTag>
            </StyledHeader>
            <StyledImg src={imgSrc} />
            {!isExpanded ? (
                <StyledArrowWrapper
                    tag={tag}
                    onClick={e => this.expandProjectCard(e)}
                >
                <FaChevronDown />
                </StyledArrowWrapper>
            ) : (
                <>
                    <StyledProjectDesc isExpanded={isExpanded}>
                        { longDesc }
                    </StyledProjectDesc>
                    <StyledArrowWrapper
                        tag={tag}
                        onClick={e => this.expandProjectCard(e)}
                    >
                        <FaChevronUp />
                    </StyledArrowWrapper>
                </>
            )}
            
        </StyledProjectCard>
            </a>
        );
    }
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
};

export default ProjectCard;