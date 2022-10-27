import React, { useState } from "react";
import styled from "styled-components/macro";
import Circle from "./Circle";
import Button from "./Button";
import Rules from "./Rules";
import ToggleButton from "./ToggleButton";

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
  top: 7%;
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

const Triangle = styled.img(({ ImageUrlCSS }: { ImageUrlCSS: string }) => `
  content: url(${ImageUrlCSS});
  top: 50%;
  left: 50%;
  position: relative;
  transform: translate(-50%, -50%);
`);

function Header() {
  const [isRuleOpen, setIsRuleOpen] = useState<boolean>(false);
  const [isChoiceMake, setIsChoiceMake] = useState<boolean>(false);

  let background = "";
  if (isRuleOpen) {
    background = "blur(5px);";
  }

  let ImgUrl = "static/bg-triangle.svg";

  if (isChoiceMake) {
    ImgUrl = "static/bg-pentagon.svg";
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
      <ToggleButton onClick={() => setIsChoiceMake(true)} />
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
      <Triangle ImageUrlCSS={ImgUrl} />
      <Circle ImgVal="Paper" onClick={() => setIsChoiceMake(true)} />
      <Circle ImgVal="Rock" onClick={() => setIsChoiceMake(true)} />
      <Circle ImgVal="Scissors" onClick={() => setIsChoiceMake(true)} />
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
