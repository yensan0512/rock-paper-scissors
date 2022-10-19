import React, { useState } from "react";
import styled from "styled-components/macro";
import Circle from "./Circle";
import Button from "./Button";
import Rules from "./Rules";

const Wrapper = styled.div`
  // (({ backdropFilter }: { backdropFilter: string }) =>
  // width: 500px;
  // height: auto;
  //left: 50%;
  //top: 50%;
  //transform: translate(100%, 100%);
  width: 100%;
  height: 100%;
  position: relative;
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
  top: 3%;
  left: 7%;
  transform: translate(-8px, -5px);
  /* justify-content: stretch; */
  width: 85%;
  border-radius: 8px;
`;

const FlexItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 70%;

  content: url("static/logo.svg");
  height: 100px;
  width: 11px;
  padding-right: 50px;
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

const Triangle = styled.img`
  content: url("static/bg-triangle.svg");
  top: 50%;
  left: 50%;
  position: relative;
  transform: translate(-50%, -50%);
`;

function Header() {
  const [isRuleOpen, setIsRuleOpen] = useState<boolean>(false);

  let background = "";
  if (isRuleOpen) {
    background = "blur(5px);";
  }

  return (
    <Wrapper>
      <BorderContainer>
        <FlexItemList>
          {/* <FlexItem>ROCK</FlexItem>
          <FlexItem>PAPER</FlexItem>
          <FlexItem>SCISSORS</FlexItem> */}
        </FlexItemList>
        <ScoreBordContainer>
          <ScoreHeader>SCORE</ScoreHeader>
          <ScoreLabel>12</ScoreLabel>
        </ScoreBordContainer>
      </BorderContainer>
      <Triangle />
      <Circle ImgVal="Paper" />
      <Circle ImgVal="Rock" />
      <Circle ImgVal="Scissors" />
      <Button onClick={() => setIsRuleOpen(true)} />
      {isRuleOpen ? (
        <Rules
          isRuleOpen={isRuleOpen}
          setIsRuleOpen={() => setIsRuleOpen(false)}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default Header;
