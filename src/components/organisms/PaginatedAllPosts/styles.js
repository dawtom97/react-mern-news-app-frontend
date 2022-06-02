import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > ul {
    display: flex;
    list-style: none;
    font-size: 1.4rem;
    margin:30px auto;
    li {
      width:50px;
      margin:2px;
      padding: 4px 0;
      cursor: pointer;
      text-align: center;
      color: ${props=>props.theme.text};
      border:2px solid ${props=>props.theme.text};
      transition: 0.4s;
      &:hover {
        background-color: ${props=>props.theme.text};
        color: ${props=>props.theme.body};
      }
      &.selected {
        background-color: ${props=>props.theme.primary};
        border-color: ${props=>props.theme.primary};
        color: ${props=>props.theme.body};
      }
      a {
        color: inherit;
        width:100%;
        height: 100%;
        display: block;
      }
    }
    li:first-of-type, li:last-of-type{
      width:80px;
    }
  }

`

export const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:30px;

  &  a {
      width:290px;
  }
`