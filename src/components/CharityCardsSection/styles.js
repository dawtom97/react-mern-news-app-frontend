import styled from "styled-components";

export const Wrapper = styled.section`
    margin-bottom: 30px;
    & > h2 {
      font-size:2.8rem;
      margin-top:50px;
    }
    & > p {
        margin-bottom: 15px;
        font-size:1.4rem;
    }
    & > div {
        display: flex;
        flex-wrap:wrap;
        gap:20px;
    }

`

export const Card = styled.article`
    background-color: ${props=>props.theme.bodyAlt};
    width:18%;
    min-width: 200px;
    min-height: 200px;
    padding: 15px;
    text-align: center;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & > div {
        font-size:5.5rem;
        margin:15px 0;
    }

    &:hover {
        box-shadow: 0px 4px 5px 1px ${props => props.theme.mainShadow};
    }

    & > h3 {
        font-size: 1.6rem;
    }

    & > a {
        color:${props=>props.theme.primary};
        font-size:1.6rem;
        padding-bottom: 2px;
        border-bottom: 2px solid ${props=>props.theme.primary};
        transition: 0.4s;
        width:70%;

        &:hover {
            border-color: ${props=>props.theme.text};
            color:${props=>props.theme.text};
        }
    }
`