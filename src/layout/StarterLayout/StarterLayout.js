import React from 'react';
import * as Styled from './styles';
import { MainMenu } from '../../components/molecules/MainMenu/MainMenu';
import Footer from '../../components/organisms/Footer/Footer';

export const StarterLayout = ({children}) => {
  return (
    <>
    <Styled.Wrapper>
      <MainMenu/>
      {children}
      
    </Styled.Wrapper>
    <Footer/>
    </>
  )
}
