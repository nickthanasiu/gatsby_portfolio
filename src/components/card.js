import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
    position: relative;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    box-shadow: ${props => (
        props.hasShadow ? '0 2px 4px 0 rgba(14,30,37,.12)' : 'none'
    )};
    margin-bottom: 1.375rem;
    cursor: pointer;

    transition: .25s all ease;

    & span {
        margin-left: 1rem;
        font-weight: 700;
        width: 50%;
    } 

    &:hover {
        
        padding-left: ${props => (
            props.hasShadow ? '2rem' : '1.5rem'
        )};
        background-color: ${props => (
            !props.hasShadow ? '#fff' :
            props.color === 'green' ? '#23d09c' : '#0a85ea'
        )};
        transform: ${props => (
            !props.hasShadow ? 'scale(1.05)' : 'scale(1)'
        )};

        & svg {
            transition: all .5 ease;
            transform: ${props => (
                !props.hasShadow ? 'none': 'translate3d(8px, 0, 0)'
            )}
        }

        & span {
            margin-left: ${props => (
                !props.hasShadow ? '1' : '1.25rem'
            )};
        }
    }

    @media (min-width: 768px) {    
        margin-bottom: 1.5rem;
        flex-direction: column;
        align-items: flex-start;

        & span {
            margin-left: 1rem;
            font-weight: 700;
            width: 100%;
            font-size: .9rem;
        } 

    

        &:hover {

            & svg {
                transform: translate3d(8px, 0, 0);
            }
        }
    }
`;

const StyledLink = styled.a`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: .75rem;
    justify-content: ${props => (
        props.hasShadow ? 'flex-start' : 'center'
    )};
    padding-left: ${props => (
        !props.hasShadow ? '10%' : '0'
    )};
    padding-right: ${props => (
        !props.hasShadow ? '10%' : '0'
    )};

    @media (min-width: 768px) {
        position: relative;
        font-size: .5rem;
        height: 70%;
        align-items: center;
        justify-content: space-around;
    }
`;

const Card = ({ children, color, url, hasShadow }) => {
    return (
        
        <StyledCard color={color} hasShadow={hasShadow}>
            <StyledLink href={url} hasShadow={hasShadow}>
                { children }
            </StyledLink>

        </StyledCard>
    );
}

export default Card;