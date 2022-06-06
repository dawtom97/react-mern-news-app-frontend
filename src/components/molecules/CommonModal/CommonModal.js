import React from 'react';
import * as Styled from './styles'

export const CommonModal = ({onClick,children,onClose}) => {
  return (
    <>
    <Styled.Wrapper onClick={onClick}>
          {children}   
    </Styled.Wrapper>
    <Styled.Shadow onClick={onClose}/>
    </>
  )
}

