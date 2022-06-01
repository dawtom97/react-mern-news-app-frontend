import React from 'react';
import { Subtitle } from '../../atoms/Subtitle';
import { Title } from '../../atoms/Title';
import * as Styled from './styles'

const SectionTitle = ({title,subtitle}) => {
  return (
    <Styled.Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </Styled.Wrapper>
  )
}

export default SectionTitle