import React from 'react';
import styled from 'styled-components';
import DevOpsServices from './Services/DevOps';
import CNCFLandscapeServices from './Services/CNCFLandscape';
import CloudMigrationServices from './Services/CloudMigration';



export const StyledServices = styled.section`

  .service-cards {
    display: flex;
    flex-direction: row;
    @media(max-width: ${({ theme }) => theme.mobile }) {
      flex-direction: column;
      align-items: center;
    }
    width: 100%;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary };
    font-size: 4rem;
    text-align: center;
    margin: 0px; 20px 0px;
  }

`

export default function Services() {
  return (
    <StyledServices>
      <h1>Services</h1>
      <div className="service-cards">
        <DevOpsServices />
        <CNCFLandscapeServices />
        <CloudMigrationServices />
      </div>
    </StyledServices>
  );
};