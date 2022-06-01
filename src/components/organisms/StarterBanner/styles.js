import styled from 'styled-components';
import { Swiper } from "swiper/react";

export const Wrapper = styled.div`
    margin:0 auto;
    display: flex;
    min-height: 100vh;
    padding: 100px 0px;
    gap:25px;
`
export const ImageBox = styled.div`
    background-image: url(${props => props.image});
    background-color: ${props=>props.theme.body};
    opacity: 0.6;
    background-position: -470px 0;
    background-size: cover;
    width:40%;
    min-width: 400px;
   // box-shadow: 0px 4px 5px 1px ${props => props.theme.mainShadow};
`
export const TextBox = styled.article`
    width:60%;
    position: relative;
    & > div {
      margin-top: 58px;
    }
    &  h1 {
      color:${props=>props.theme.text};
      font-size: 6rem;
      text-transform: uppercase;
    }
    &  p {
      font-size: 2.2rem;

      span {
        color:${props=>props.theme.primary};
        font-weight:600;
      }
    }
`

export const SwiperWrapper = styled(Swiper)`
   width:100%;
   margin:0;
   position: absolute;
   bottom: 0;
`