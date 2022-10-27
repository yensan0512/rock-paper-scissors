import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components/macro";
import MainContainer from "./component/MainContainer";
import React, { useState } from "react";
import ToggleButton from "./component/ToggleButton";
import Rules from "./component/Rules";
import Button from "./component/Button";

// const Wrapper = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-color: var(--light-radial-gradient);
// `;

const Wrapper = styled.div`
  // (({ backdropFilter }: { backdropFilter: string }) =>
  // width: 500px;
  // height: auto;
  //left: 50%;
  //top: 50%;
  //transform: translate(100%, 100%);
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: var(--light-radial-gradient);
  //backdrop-filter: {backdropFilter};
`;
//)
const FlexContainer = styled.div`
  // align-items: center;
  //padding: 20px;
`;

const BorderContainer = styled.div`
  display: flex;
  border: 1px solid white;
  padding: 10px;
  position: absolute;
  top: 7%;
  left: 7%;
  transform: translate(-8px, -5px);
  /* justify-content: stretch; */
  width: 85%;
  border-radius: 8px;
`;

const FlexItemList = styled.div(
  ({
    logoUrl,
    flexItemHeight,
  }: {
    logoUrl: string;
    flexItemHeight: string;
  }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 70%;

  content: url(${logoUrl});
  height: ${flexItemHeight};
  width: 11px;
  padding-right: 50px;
`
);

const FlexItem = styled.div`
  color: white;
`;

const ScoreBordContainer = styled.div`
  // width: 100px;
  // height: 100px;
  background-color: white;
  //position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  //text-align: center;
  flex: 30%;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ScoreHeader = styled.h4`
  color: var(--white);
  //position: absolute;
  //margin: 20px 25px 0px 25px;
  margin: 0px;
  text-align: center;
`;

const ScoreLabel = styled.h2`
  color: var(--white);
  //position: absolute;
  //margin: 50px 35px 0px 35px;
  width: 100%;
  margin: 0px;
  text-align: center;
  font-size: 60px;
`;

function App() {
  const [isRuleOpen, setIsRuleOpen] = useState<boolean>(false);
  const [isModeChoose, setIsModeChoose] = useState<boolean>(false);

  let background = "";
  if (isRuleOpen) {
    background = "blur(5px);";
  }

  let ImgUrl = "static/bg-triangle.svg";
  let logoUrl = "static/logo.svg";
  let flexItemHeight = "100px";

  if (isModeChoose) {
    ImgUrl = "static/bg-pentagon.svg";
    logoUrl = "static/logo-bonus.svg";
    flexItemHeight = "150px";
    // #pot {
    //   bottom: 15%;
    //   position: absolute;
    //   -webkit-animation: linear infinite;
    //   -webkit-animation-name: run;
    //   -webkit-animation-duration: 5s;
    // }
    // @-webkit-keyframes run {
    //   0% {
    //     left: 0;
    //   }
    //   50% {
    //     left: calc(100% - 100px);
    //    }
    //   100% {
    //     left: 0;
    //   }
    // }
  }
  return (
    <Wrapper>
      <ToggleButton onClick={() => setIsModeChoose(!isModeChoose)} />
      <BorderContainer>
        <FlexItemList logoUrl={logoUrl} flexItemHeight={flexItemHeight}>
          {/* <FlexItem>ROCK</FlexItem>
          <FlexItem>PAPER</FlexItem>
          <FlexItem>SCISSORS</FlexItem> */}
        </FlexItemList>
        <ScoreBordContainer>
          <ScoreHeader>SCORE</ScoreHeader>
          <ScoreLabel>12</ScoreLabel>
        </ScoreBordContainer>
      </BorderContainer>
      <MainContainer isModeChoose={isModeChoose} />
      <Button onClick={() => setIsRuleOpen(true)} />
      {isRuleOpen ? (
        <Rules
          isRuleOpen={isRuleOpen}
          setIsRuleOpen={() => setIsRuleOpen(false)}
          isModeChoose={isModeChoose}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default App;
