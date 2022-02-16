import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 10px;
    background: #FA623D;
    border-radius: 50px;

    a {
        text-decoration: none !important;
        color: white;
        underline: none;
    }
`

export default function Privacy() {
    return (
        <>
        <h1>This site does not collect information on visitors.</h1>
        <StyledButton><a href='/'>Home</a></StyledButton>
        </>
    )
};
