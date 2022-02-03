import React from 'react';
import styled from 'styled-components';

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    color:  ${({ theme }) => theme.colors.primary };

    .companyName {
        margin: 0 0 0 250px;
    }

    .navText {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

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
    }
`

export default function Nav() {
    return (
        <StyledNav>
            <div>
            <h1 className="companyName">
                Ross Technology Solutions
            </h1>
            </div>
            <div className="navText">
                <h1 className="linkButton"><a href="/">Home</a></h1>
                <h1 className="linkButton"><a href="/">Services</a></h1>
                <h1 className="linkButton"><a href="/">Contact</a></h1>
            </div>
        </StyledNav>
    )
}