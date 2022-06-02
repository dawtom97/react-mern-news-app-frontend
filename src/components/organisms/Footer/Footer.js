import React from "react";
import { Logo } from "../../atoms/Logo";
import { Title } from "../../atoms/Title";
import * as Styled from "./styles";
import { charities } from "../../../constants/charities";

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.InnerWrapper>
        <main>
          <div>
            <header>
              <div>
                <Logo />
                <Title>Daily News</Title>
              </div>
              <p>@All rights reserved.</p>
            </header>
          </div>

          <div>
            {" "}
            <div>
              <h2>Stand with Ukraine</h2>
              <ul>
                {charities.map(({ url, name }, key) => (
                  <li key={key}>
                    <a href={url}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>More news</h2>
              <ul>
                <li>
                  <a href="https://liveuamap.com">liveuamap.com</a>
                </li>
                <li>
                  <a href="https://www.onet.pl">Onet.pl</a>
                </li>
                <li>
                  <a href="https://www.wp.pl">Wirtualna Polska</a>
                </li>
                <li>
                  <a href="https://www.nytimes.com">New York Times</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Social Media</h2>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </main>
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  );
};

export default Footer;
