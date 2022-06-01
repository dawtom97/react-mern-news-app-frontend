import React from "react";
import { charities } from "../../../constants/charities";
import SectionTitle from "../../molecules/SectionTitle/SectionTitle";
import * as Styled from "./styles";

export const CharityCardsSection = () => {
  return (
    <Styled.Wrapper>
      <SectionTitle
        title="Help for Ukraine"
        subtitle="Ukrainians in flashpoint areas urgently need humanitarian aid, but usual supply chains are currently unavailable."
      />
      <div>
        {charities.map(({ name, url, icon }) => (
          <Styled.Card key={url}>
            <h3>{name}</h3>
            <div>{icon && icon}</div>
            <a href={url} rel="noreferrer" target="_blank">
              Official Website
            </a>
          </Styled.Card>
        ))}
      </div>
    </Styled.Wrapper>
  );
};
