import React from 'react';
import * as Styled from './styles';
import { MainMenu } from '../../components/MainMenu/MainMenu';
import Footer from '../../components/Footer/Footer';

export const StarterLayout = ({children}) => {
  return (
    <Styled.Wrapper>
      <MainMenu/>
      {children}
      <Footer/>
    </Styled.Wrapper>
  )
}
