import React from 'react';
import { SiDesignernews } from 'react-icons/si';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  & svg {
    color: ${props=>props.theme.primary};
    font-size: 42px;
    border: 4px solid ${props=>props.theme.text};
    padding: 6px;
  }
`

export const Logo = () => {
  return (
  <StyledLink to="/">
    <SiDesignernews />
  </StyledLink>
  )
}
