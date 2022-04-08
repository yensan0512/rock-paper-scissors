import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  width:500px;
  height:auto;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
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

`;

const ScoreHeader = styled.h4`
  color:var(--dark-text);
  position:absolute;
`;

const ScoreLabel = styled.h2`
  color:var(--dark-text);
  position:absolute;
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
          <ScoreHeader />
          <ScoreLabel />
        </ScoreBordContainer>

      </FlexContainer>
    </Wrapper>
  );
}

export default Header