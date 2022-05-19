import React from 'react';
import * as Styled from './styles';
import { MainMenu } from '../../components/MainMenu/MainMenu';

export const StarterLayout = ({children}) => {
  return (
    <Styled.Wrapper>
      <MainMenu/>
      {children}
    </Styled.Wrapper>
  )
}
