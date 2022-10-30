import React, { useState } from "react";
import styled from "styled-components/macro";
import Circle from "./Circle";
import Button from "./Button";
import Rules from "./Rules";
import ToggleButton from "./ToggleButton";

const Wrapper = styled.div``;

const Triangle = styled.img(
  ({ ImageUrlCSS }: { ImageUrlCSS: string }) => `
  content: url(${ImageUrlCSS});
  top: 50%;
  left: 50%;
  position:relative;
  transform: translate(-50%,100%);
`
);

const FlexContainer = styled.div`
  display:flex;
`;

const FlexItem = styled.div`
  flex:50%;
  flex-direction:column;
`;

const SelectedText = styled.h3`
  color:white;
  top:50%;
  left:50%;
  transform:translate(22%,1790%);
`;

const NewSelectedText = styled.h3`
  color:white;
  top:50%;
  left:50%;
  transform:translate(7%,1221%);
`;

const Shadow = styled.div`
  background-color:var(--radial-gradient);
  border-radius: 50%;
  width:140px;
  height:140px;
  top: 50%;
  left: 50%;
  position:relative;
  transform: translate(-50%,107%);
`;

function MainContainer({ isModeChoose }: { isModeChoose: boolean }) {
  const [isChoiceMake, setIsChoiceMake] = useState<boolean>(false);
  const [choice, setChoice] = useState("");

  let ImgUrl = "static/bg-triangle.svg";
  let logoUrl = "static/logo.svg";
  let flexItemHeight = "100px";

  if (isModeChoose) {
    ImgUrl = "static/bg-pentagon.svg";
    logoUrl = "static/logo-bonus.svg";
    flexItemHeight = "150px";
  }

  //random choice
  const easyChoice = ["Rock", "Paper", "Scissors"];
  const hardChoice = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

  const randomEasyChoice = () => {
    const len = easyChoice.length;
    const randomEasy = Math.floor(Math.random() * easyChoice.length);
    return easyChoice[randomEasy];
    // console.log(randomEasy, easyChoice[randomEasy]);
  };

  if (isChoiceMake) {

    const computerChoice = randomEasyChoice();

    return (
      <Wrapper>
        <FlexContainer>
          <FlexItem>
            <Circle
              ImgVal={choice}
              isModeChoose={isModeChoose}
              onClick={() => { setIsChoiceMake(true); setChoice(choice) }}
              value={choice}
            />
            <SelectedText>You picked {choice} !!</SelectedText>
          </FlexItem>
          <FlexItem>
            {/* <Shadow /> */}
            <Circle
              ImgVal={computerChoice}
              isModeChoose={isModeChoose}
              value={computerChoice}
            />
            <NewSelectedText>Computer picked {computerChoice} !!</NewSelectedText>
          </FlexItem>
        </FlexContainer>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Triangle ImageUrlCSS={ImgUrl} />
      <Circle
        ImgVal="Paper"
        isModeChoose={isModeChoose}
        onClick={() => { setIsChoiceMake(true); setChoice("Paper") }}
        value={choice}
      />
      <Circle
        ImgVal="Rock"
        isModeChoose={isModeChoose}
        onClick={() => { setIsChoiceMake(true); setChoice("Rock") }}
        value={choice}
      />
      <Circle
        ImgVal="Scissors"
        isModeChoose={isModeChoose}
        onClick={() => { setIsChoiceMake(true); setChoice("Scissors") }}
        value={choice}
      />
      <Circle
        ImgVal="Lizard"
        isModeChoose={isModeChoose}
        onClick={() => { setIsChoiceMake(true); setChoice("Lizard") }}
        value={choice}
      />
      <Circle
        ImgVal="Spock"
        isModeChoose={isModeChoose}
        onClick={() => { setIsChoiceMake(true); setChoice("Spock") }}
        value={choice}
      />
    </Wrapper>
  );
}

export default MainContainer;
