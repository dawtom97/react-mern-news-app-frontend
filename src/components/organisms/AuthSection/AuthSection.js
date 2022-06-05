import React from 'react'
import { AuthForm } from '../../molecules/AuthForm/AuthForm';
import { banner } from "../../../constants/banner";
import * as Styled from './styles'

export const AuthSection = () => {
  return (
    <Styled.Wrapper image={banner.image}>
        <AuthForm/>
    </Styled.Wrapper>
  )
}
