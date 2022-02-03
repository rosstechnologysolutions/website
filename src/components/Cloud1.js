import React from 'react';
import styled from 'styled-components';
import Cloud from '../assets/Cloud.svg';

export const StyledCloud1 = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin: 500px;

    .cloud {
        color: orange;
        height: 200px;
        width: 500px;
        position: absolute;
        margin: 10px 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 50px;
        fill: ${({ theme }) => theme.colors.primary };
        opacity: 0.5;
    }
    h1 {
        z-index: 1;
        display: flex;
        justify-content: center;
        position: relative;
    }
`

export default function Cloud1() {
    return (
        <StyledCloud1> 
            <div className="cloud">
                <Cloud />
            </div>
            <h1>Cloud 1</h1>
        </StyledCloud1>
    )
}