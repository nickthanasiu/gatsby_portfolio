import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
    position: relative;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 1.5rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    margin-bottom: 1rem;
    cursor: pointer;

    transition: .25s all ease;

    & span {
        margin-left: 1rem;
        font-weight: 700;
        width: 50%;
    } 

    &:hover {
        padding-left: 2rem;
        background-color: ${props => props.color === 'green' ? '#23d09c' : '#0a85ea'};
        transform: scale(1);

        & svg {
            transition: all .5 ease;
            transform: translate3d(8px, 0, 0);
        }

        & span {
            margin-left: 1.25rem;
        }
    }

    @media (min-width: 768px) {
        height: 12rem;
        width: 33%;
        max-width: 12rem;
        margin: 0 .5rem;
        flex-direction: column;
        align-items: flex-start;

        & span {
            margin-left: 1rem;
            font-weight: 700;
            width: 100%;
            font-size: 1.125rem;
        } 

        &:hover {
            padding: 1.125rem;
            transform: scale(1.1);

            & svg {
                transform: translate3d(0, 0, 0);
            }

            & span {
            
        }
        }

        
    }
`;

const StyledLink = styled.a`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (min-width: 768px) {
        position: relative;
        flex-direction: column;
        height: 70%;
        align-items: center;
        justify-content: space-around;
    }
`;

const Card = ({ children, color, url, }) => {
    return (
        
        <StyledCard color={color}>
            <StyledLink href={url}>
                { children }
            </StyledLink>

        </StyledCard>
    );
}

export default Card;