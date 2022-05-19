import styled from "styled-components";

export const Wrapper = styled.div`
   margin:0 auto;
   width:100%;
   background-image: url(${props=>props.image});
   min-height: 100vh;

`
export const InnerWrapper = styled.main`
   width:850px;
   min-height: 450px;
   margin: 0 auto;
   background-color: ${props=>props.theme.body};
`