import React from 'react';
import styled from 'styled-components';
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledDevOps = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 350px;
    transition: all .2s ease-in-out;

    @media(min-width: ${({ theme }) => theme.mobile }) {
        :hover {
            transform: scale(1.05);
        }
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

    .icon-box {
        height: 260px;
        width: 330px;

        .icon {
            height: 100%;
            width: 100%;
            color: gray;
            opacity: 0.6;
        }
    }

`

export default function CloudMigrationServices() {
    return (
        <StyledDevOps>
            <h2>Migrate to the Cloud</h2>
            <div className="icon-box">
                <FontAwesomeIcon className="icon" icon={faCloudArrowUp}/>
            </div>
            <p>Lift and shift never worked for migrating on-premises workloads to the Cloud. Expert help is here to level up your cloud migration that will save costs, while increasing performance and release velocity.</p>
        </StyledDevOps>
    )
};