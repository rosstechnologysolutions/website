import React from 'react';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
    border-top: 2px solid #dcdcdc;
    box-shadow 5px 1px 0 gray;
    background: ${({ theme }) => theme.colors.primary };
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    
    p {
        text-align: center;
        opacity: 10;
        margin: 0;
        padding: 10px;
    }
    
    a {
        text-decoration: none;
        color: white;
    }
`

export default function Footer() {

    return (
        <StyledFooter>
            <p>{'Copyright © '} {new Date().getFullYear()} | Ross Technology Solutions | <a href="/privacy">Privacy Policy</a></p>
        </StyledFooter>
    );
}