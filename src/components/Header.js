import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/IconOrange.svg'
import Nav from './Nav';
// import CallToAction from './CallToAction';


export const StyledHeader = styled.header`
    background: rgb(57,57,64);
    background: linear-gradient(180deg, rgba(57,57,64,1) 0%, rgba(21,21,68,0.48783263305322133) 100%, rgba(255,255,255,1) 100%);
    height: 100vh;

    h1 {
        margin: 0;
    }

    .logo {
        height: 120px;
        width: 120px;
        position: absolute;
        margin: 10px 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 50px;
        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: none;
          }
    }

    .tag-line {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 5rem;
        color:  ${({ theme }) => theme.colors.primary };
    }
`

export default function Header() {
    return(
        <StyledHeader>
            <div className="logo">
                <Logo />
            </div>
            <Nav />
            <h1 className="tag-line">Making the Cloud Easy</h1>
        </StyledHeader>
    )
};