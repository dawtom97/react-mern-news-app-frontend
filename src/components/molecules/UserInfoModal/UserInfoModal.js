import React from "react";
import * as Styled from "./styles";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Button } from "../../atoms/Button";

const UserInfoModal = ({ user: { result } ,onClick,onLogout}) => {
  const initials = result.name.match(/\b(\w)/g).join("");
  return (
    <Styled.Wrapper>
      <div>
        <Styled.Avatar>{initials}</Styled.Avatar>
        <div>
          <h3>{result.name}</h3>
          <p>{result.email}</p>
        </div>
        <button onClick={onClick}><AiOutlineCloseCircle/></button>
      </div>
      <Button onClick={onLogout} logoutBtn>Logout</Button>
      <div>

      </div>
    </Styled.Wrapper>
  );
};

export default UserInfoModal;
