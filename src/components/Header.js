import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/LogoIcon.svg'
import Nav from './Nav';


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
    }
`

export default function Header() {
    return(
        <StyledHeader>
            <div className="logo">
                <Logo />
            </div>
            <Nav />
        </StyledHeader>
    )
};