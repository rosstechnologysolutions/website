import React from 'react';
import styled from 'styled-components';
// import NavButton from './NavButton';

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    color:  ${({ theme }) => theme.colors.primary };
    text-shadow 0 1px 5px black;

    .companyName {
        margin: 0 0 0 250px;
        font-size: 2.75rem;
        @media (max-width: ${({ theme }) => theme.tablet}) {
            font-size: 2rem;
        }
        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 1.75rem;
            width: 100vw;
            margin: 0;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

    }

    .navText {
        display: flex;
        flex-direction: row;
        align-items: center;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: none;
        }
    }

    a {
        text-decoration: none;
        color:  ${({ theme }) => theme.colors.primary };
        padding: 10px;
        &:hover {
            color: white;
            background:  ${({ theme }) => theme.colors.primary };
            border-radius: 50px;
        }
    }

    .linkButton {
        margin: 0 50px 0;
        @media (max-width: ${({ theme }) => theme.tablet}) {
            margin: 0 5px 0;
          }
    }
`

export default function Nav() {
    return (
        <StyledNav>
            {/* <NavButton /> */}
            <div>
            <h1 className="companyName">
                Ross Technology Solutions
            </h1>
            </div>
            <div className="navText">
                <h1 className="linkButton"><a href="mailto:ryan@rosstechnologysolutions.com">Contact</a></h1>
            </div>
        </StyledNav>
    )
}