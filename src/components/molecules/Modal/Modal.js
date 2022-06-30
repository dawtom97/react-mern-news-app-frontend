import React, { useState } from "react";
import * as Styled from "./styles";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Modal = ({ msg }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <AnimatePresence>
      {isActive && (
        <Styled.Wrapper as={motion.div} animate={{ y: 50 }}>
          <h3>{msg}</h3>
          <AiOutlineCloseCircle onClick={() => setIsActive(false)} />
        </Styled.Wrapper>
      )}
    </AnimatePresence>
  );
};
