import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components/macro";
import Header from "./component/Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  //background-color: var(--light-radial-gradient);
`;

function App() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default App;
