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
  transform: translate(44%,105%);
`
);

function MainContainer({ isModeChoose }: { isModeChoose: boolean }) {
  const [isChoiceMake, setIsChoiceMake] = useState<boolean>(false);

  let ImgUrl = "static/bg-triangle.svg";
  let logoUrl = "static/logo.svg";
  let flexItemHeight = "100px";

  if (isModeChoose) {
    ImgUrl = "static/bg-pentagon.svg";
    logoUrl = "static/logo-bonus.svg";
    flexItemHeight = "150px";
  }

  if (isChoiceMake) {
    return (
      <Wrapper>
        <Circle
          ImgVal="Paper"
          isModeChoose={isModeChoose}
          onClick={() => setIsChoiceMake(true)}
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Triangle ImageUrlCSS={ImgUrl} />
      <Circle
        ImgVal="Paper"
        isModeChoose={isModeChoose}
        onClick={() => setIsChoiceMake(true)}
      />
      <Circle
        ImgVal="Rock"
        isModeChoose={isModeChoose}
        onClick={() => setIsChoiceMake(true)}
      />
      <Circle
        ImgVal="Scissors"
        isModeChoose={isModeChoose}
        onClick={() => setIsChoiceMake(true)}
      />
      <Circle
        ImgVal="Lizard"
        isModeChoose={isModeChoose}
        onClick={() => setIsChoiceMake(true)}
      />
      <Circle
        ImgVal="Spock"
        isModeChoose={isModeChoose}
        onClick={() => setIsChoiceMake(true)}
      />
    </Wrapper>
  );
}

export default MainContainer;
