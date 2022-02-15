import React from 'react';
import styled from 'styled-components';
import DevOpsServices from './Services/DevOps';

export const StyledServices = styled.section`

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
      <h1>Serivces</h1>
      <DevOpsServices />
    </StyledServices>
  );
};
