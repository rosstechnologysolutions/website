import React from 'react';
import styled from 'styled-components';
import DevOpsServices from './Services/DevOps';
import CNCFLandscapeServices from './Services/CNCFLandscape';


export const StyledServices = styled.section`

  margin-bottom: 100px;

  .service-cards {
    display: flex;
    flex-direction: row;
    @media(max-width: ${({ theme }) => theme.mobile }) {
      flex-direction: column;
      align-items: center;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary };
    font-size: 4rem;
    text-align: center;
    margin: 0px; 20px 0px;
    text-shadow: 0 1px 3px black;
  }

`

export default function Services() {
  return (
    <StyledServices>
      <h1>Services</h1>
      <div className="service-cards">
        <DevOpsServices />
        <CNCFLandscapeServices />
      </div>
    </StyledServices>
  );
};
