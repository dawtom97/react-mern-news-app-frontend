import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import * as Styled from './styles';
import {SiDesignernews} from 'react-icons/si'

export const MainMenu = () => {
  return (
    <Styled.Wrapper>
        <Link to="/"><SiDesignernews/></Link>
        <ul>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/">Live</NavLink>
           <NavLink to="/">Account</NavLink>
           <NavLink to="/">Credits</NavLink>
        </ul>
    </Styled.Wrapper>
  )
}
