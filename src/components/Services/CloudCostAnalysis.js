import React from 'react';
import styled from 'styled-components';
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ScytledCNCFLandscape = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 10px;
    width: 80%
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    max-width: 350px;
    transition: all .2s ease-in-out;

    :hover {
        transform: scale(1.05);
    }

    h2 {
        color: ${({ theme }) => theme.colors.primary };
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }

    p {
        color: black;
        font-size: 1.1rem;
        text-align: justify;
        text-justify: inter-word;
        padding: 10px;
    }

    .icon {
        height: 35%;
        color: gray;
        opacity: 0.6;
        padding: 0 50px;
    }
`

export default function CloudCostAnalysis() {
    return (
        <ScytledCNCFLandscape>
            <h2>Navigate the CNCF Landscape</h2>
            <FontAwesomeIcon className="icon" icon={faMapLocationDot}/>
            <p>The CNCF Landscape is vast and can be confusing. Get advise on its open-source project ecosystem and what projects will fit your organization.</p>
        </ScytledCNCFLandscape>
    )
};