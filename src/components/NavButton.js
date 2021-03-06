import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

export const StyledBurger = styled.button`
    position: absolute;
    align-items: center;
    left: 2rem;
    // display: flex;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    @media (min-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }

    &:focus {
    outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ theme, open }) => open ? theme.colors.primary : "#FA623D"};
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        border-bottom: 1px solid black;

        :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const NavButton = ({ open, setOpen }) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }

NavButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default NavButton;