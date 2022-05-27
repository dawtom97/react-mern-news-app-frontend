import React from 'react';
import { charities } from '../../constants/charities';
import * as Styled from './styles';

export const CharityCardsSection = () => {
  return (
    <Styled.Wrapper>
        <h2>Help for Ukraine</h2>
        <p>Ukrainians in flashpoint areas urgently need humanitarian aid, but usual supply chains are currently unavailable. </p>
        <div>
            {charities.map(({name,url,icon})=>(
                <Styled.Card key={url}>
                    <h3>{name}</h3>
                    <div>
                       {icon && icon}
                    </div>
                    <a href={url} rel="noreferrer" target="_blank">Official Website</a>           
                </Styled.Card>
            ))}
        </div>
    </Styled.Wrapper>
  )
}
