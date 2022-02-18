import React from 'react';
import styled from 'styled-components';

export const StyledCallToAction = styled.section`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        align-items: center;
    }

    margin 50px 0px;

    h1 { 
        color:  ${({ theme }) => theme.colors.primary };
        font-size: 1.6rem;
        margin: 0px;
        padding: 10px;
        // text-shadow: 1px 1px black;
    }

    h2 {
        font-size: 1.7rem;
        color:  ${({ theme }) => theme.colors.primary };
        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.3rem;
        }

        a {
            font-weight: 400;
            text-decoration: none;
            color: white;
            background:  ${({ theme }) => theme.colors.primary };
            border-radius: 100px;
            padding: 10px 20px;
            &:hover {
                background: white;
                color: ${({ theme }) => theme.colors.primary };
            }
        }
    }

`

export default function CallToAction() {
    return (
        <StyledCallToAction>
            <h1>Ready to Make the Cloud Easy?</h1>
            <h2 className="linkButton"><a href="mailto:ryan@rosstechnologysolutions.com">Contact</a></h2>
        </StyledCallToAction>
    )
};