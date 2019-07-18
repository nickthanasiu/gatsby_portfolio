import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
    position: relative;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 1.5rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
    margin-bottom: 1rem;
    cursor: pointer;

    transition: .25s padding-left ease;

    &:hover {
        padding-left: 2rem;
        background-color: ${props => props.color === 'green' ? '#23d09c' : '#0a85ea'};

        & svg {
            transition: all .5 ease;
            transform: translate3d(8px, 0, 0);
        }

        & span {
            margin-left: 1.25rem;
        }
    }

    & span {
        margin-left: 1rem;
        font-weight: 700;
    } 
`;

const Card = ({ children, color, url, }) => {
    return (
        <a
            href={url}
            target="_blank"
        >
            <StyledCard color={color}>
                { children }
            </StyledCard>
        </a>
    
    );
}

export default Card;