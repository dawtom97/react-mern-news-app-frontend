import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 90px;

  & > main {
    h2 {
      font-size: 2.5rem;
    }
    & > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      & > p {
        font-size: 1.5rem;
        text-decoration: underline;
      }
      & > p:last-of-type {
        font-weight: 700;
      }
    }
  }
`;

export const Map = styled(MapContainer)`
  width: 100%;
  height: 370px;
  object-fit: cover;
  border-radius: 15px;
  border: 3px solid ${(props) => props.theme.primary};
`;

export const InfoBox = styled.div`
  margin: 30px 0px 40px;
  display: flex;
  gap: 30px;

  & > div {
    flex: 1;
    padding: 15px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.bodyAlt};
    box-shadow: 0px 4px 5px 1px ${(props) => props.theme.mainShadow};

    & > p {
      font-size: 1.5rem;
    }
    & > h4 {
      font-size: 1.7rem;
    }
  }

  & > img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
    border: 3px solid ${(props) => props.theme.primary};
  }
`;
