import React from 'react';
import * as Styled from './styles';
import { MainMenu } from '../../components/MainMenu/MainMenu';
import { banner } from "../../constants/banner";

export const SinglePostLayout = ({children}) => {
  return (
    <Styled.Wrapper image={banner.image}>
      <MainMenu/>
      <Styled.InnerWrapper>
          {children}
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  )
}
