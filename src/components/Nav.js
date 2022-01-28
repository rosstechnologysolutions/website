import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/LogoIcon.svg'

export const StyledNav = styled.nav`
    height: 100px;

    .logo {
        height: 120px;
        width: 120px;
        position: absolute;
        margin: 10px 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 50px;
    }
`

export default function Nav() {
    return (
        <StyledNav>
            <div className="logo">
                <Logo />
            </div>
            <div >

            </div>
        </StyledNav>
    )
}