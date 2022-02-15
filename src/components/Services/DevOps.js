import React from 'react';
import styled from 'styled-components';
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledDevOps = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 10px;
    width: 80%
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    max-width: 350px;

    h2 {
        color: ${({ theme }) => theme.colors.primary };
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }

    p {
        color: black;
        font-size: 1.1rem;
    }

    .icon {
        height: 50%;
        color: gray;
        opacity: 0.6;
    }
`

export default function DevOpsServices() {
    return (
        <StyledDevOps>
            <h2>DevOps Consulting</h2>
            <FontAwesomeIcon className="icon" icon={faUserCog}/>
            <p>Adopting DevOps best pratices has become an industry standard, but also a buzzword. We'll help you estabilish practical tools and processes to be a high performing engineering organization without the hype.</p>
        </StyledDevOps>
    )
};