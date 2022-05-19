import React, { useEffect, useState } from "react";
import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./styles/themes";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'

const App = () => {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(getPosts());
  },[dispatch])

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppRouter />
      <button className="switcher" onClick={themeToggler}>{theme === "light" ?<BsFillSunFill/>: <BsFillMoonFill/>}</button>
    </ThemeProvider>
    </>
  );
};

export default App;
