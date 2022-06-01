import styled from "styled-components";

export const Wrapper = styled.article`
 width:350px;
 border-radius: 15px;
 display: flex;
 min-height: 130px;
 padding: 10px;
 gap:20px;
 position: relative;
 box-shadow: 0px 4px 5px 1px ${props => props.theme.mainShadow};
 

 & > img {
     width:120px;
     object-fit: cover;
     border-radius: 15px;
     border:2px solid ${props=>props.theme.primary}
 }

 & > svg:first-of-type {
     position: absolute;
     right:10px;
     bottom:10px;
     font-size: 16px;
     cursor: pointer;
     color:red
 }
 & > svg:last-of-type {
     position: absolute;
     right:10px;
     top:10px;
     font-size: 16px;
     cursor: pointer;
     color: ${props=>props.theme.primary};
 }
`