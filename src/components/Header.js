import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';


export const StyledHeader = styled.header`
    background: rgb(162,165,167);
    background: linear-gradient(180deg, rgba(43,46,47,0.9136029411764706) 0%, rgba(35,39,41,0.44021358543417366) 70%);;
    height: 100vh;

    h1 {
        margin: 0;
    }
`

export default function Header() {
    return(
        <StyledHeader>
            <Nav />
        </StyledHeader>
    )
};