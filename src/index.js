import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

import SignUp from "./components/SignUp";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,600&display=swap');

  body {
    font-family: Roboto, sans-serif;
  }
`;

render(
  <>
    <SignUp />
    <GlobalStyle />
  </>,
  document.getElementById("app")
);
