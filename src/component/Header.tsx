import React from "react";
import styled from "styled-components/macro";
import Circle from "./Circle";
import Button from "./Button";

const Wrapper = styled.div`
  width:500px;
  height:auto;
  left:50%;
  top:50%;
  transform:translate(100%,100%);
`;

const FlexContainer = styled.div`
  display:flex;
  border:1px solid white;
  align-items:center;
  justify-content:space-between;
  
`;

const FlexItemList = styled.div`
  display:flex;
  flex-direction:column;
`;

const FlexItem = styled.div`
  color:white;
`;

const ScoreBordContainer = styled.div`
  width:100px;
  height:100px;
  background-color:white;
  position:relative;
  display:flex;
  text-align:center;

`;

const ScoreHeader = styled.h4`
  color:var(--dark-text);
  position:absolute;
  margin:20px 25px 0px 25px;
`;

const ScoreLabel = styled.h2`
  color:var(--dark-text);
  position:absolute;
  margin:50px 35px 0px 35px;
`;

const BottomFlexBox = styled.div`
  display:flex;
`;

function Header() {

  return (
    <Wrapper>
      <FlexContainer>
        <FlexItemList>
          {/* <FlexItem>ROCK</FlexItem>
          <FlexItem>PAPER</FlexItem>
          <FlexItem>SCISSORS</FlexItem> */}
        </FlexItemList>
        <ScoreBordContainer>
          {/* <ScoreHeader>SCORE</ScoreHeader>
          <ScoreLabel>12</ScoreLabel> */}
        </ScoreBordContainer>
       
      </FlexContainer>
      {/* <Circle/> */}
      <Button/>

    </Wrapper>
  );
}

export default Header