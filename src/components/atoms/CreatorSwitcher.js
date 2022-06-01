import styled from "styled-components";


export const CreatorSwitcher = styled.button`
    position: fixed;
    right: 20px;
    bottom: 70px;
    width:40px;
    height: 40px;
    border: 1px solid ${props=>props.theme.text};
    border-radius: 50%;
    background: ${props => props.theme.bodyAlt};
    box-shadow: 0px 4px 5px 1px ${props => props.theme.mainShadow};
    color: ${props=> props.theme.text}; 
    font-size: 2rem;
    line-height: 0;
    z-index: 9999;
    cursor: pointer;
`