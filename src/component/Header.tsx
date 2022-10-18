import React, { useState } from "react";
import styled from "styled-components/macro";
import Circle from "./Circle";
import Button from "./Button";

const Wrapper = styled.div`
  // width: 500px;
  // height: auto;
  //left: 50%;
  //top: 50%;
  //transform: translate(100%, 100%);
  width: 100vw;
  height: 100vh;
  background-color: var(--light-radial-gradient);
`;

const FlexContainer = styled.div`
  display: flex;
  border: 1px solid white;
  // align-items: center;
  padding: 10px;
`;

const FlexItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 50%;
`;

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
  flex: 50%;
`;

const ScoreHeader = styled.h4`
  color: var(--white);
  //position: absolute;
  //margin: 20px 25px 0px 25px;
  margin: 0px;
`;

const ScoreLabel = styled.h2`
  color: var(--white);
  //position: absolute;
  //margin: 50px 35px 0px 35px;
  width: 100%;
  margin: 0px;
`;

const BottomFlexBox = styled.div`
  display: flex;
`;

const CircleFlex = styled.div`
  display: flex;
`;

function Header() {
  return (
    <Wrapper>
      <FlexContainer>
        <FlexItemList>
          <FlexItem>ROCK</FlexItem>
          <FlexItem>PAPER</FlexItem>
          <FlexItem>SCISSORS</FlexItem>
        </FlexItemList>
        <ScoreBordContainer>
          <ScoreHeader>SCORE</ScoreHeader>
          <ScoreLabel>12</ScoreLabel>
        </ScoreBordContainer>
      </FlexContainer>
      <CircleFlex>
        <Circle ImgVal="Paper" />
        <Circle ImgVal="Rock" />
      </CircleFlex>
      <Circle ImgVal="Scissors" />
      <Button />
    </Wrapper>
  );
}

export default Header;
