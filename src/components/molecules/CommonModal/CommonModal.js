import React from 'react';
import * as Styled from './styles';
import {motion} from 'framer-motion'

export const CommonModal = ({onClick,children,onClose}) => {
  return (
    <>
    <Styled.Wrapper onClick={onClick} as={motion.div}  animate={{y:200}}>
          {children}   
    </Styled.Wrapper>
    <Styled.Shadow onClick={onClose}/>
    </>
  )
}

