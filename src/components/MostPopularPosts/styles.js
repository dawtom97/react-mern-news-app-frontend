import styled from 'styled-components';
import { Swiper } from "swiper/react";

export const Wrapper = styled.div`
  & > h2 {
      font-size:2.8rem;
  }
  & > p {
        margin-bottom: 15px;
        font-size:1.4rem;
    }
`

export const SwiperWrapper = styled(Swiper)`
width:100%;
margin:0;
`