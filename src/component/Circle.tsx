import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div(
  ({
    colorItemCSS,
    transformCSS,
    height,
    width,
  }: {
    colorItemCSS: string;
    transformCSS: string;
    height: string;
    width: string;
  }) => `
  border-radius: 50%;
  background-color: white;
  border: 20px solid var(${colorItemCSS});
  width: ${height};
  height: ${width};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: ${transformCSS};
`
);

const InternalImg = styled.img(
  ({ ImgUrlCSS }: { ImgUrlCSS: string }) => `
  content: url(${ImgUrlCSS});
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover{
    cursor:pointer;
  }
`
);

export function Circle({
  ImgVal,
  isModeChoose,
  onClick,
}: //onClick,
{
  ImgVal: string;
  isModeChoose: boolean;
  onClick: () => void;
}) {
  let height = "120px";
  let width = "120px";
  let ImgUrl = "static/icon-paper.svg";
  let colorItem = "--dark-paper-gradient";
  let transform = "translate(-152%,-140%)";

  let shape = "triangle";
  if (isModeChoose) {
    shape = "pentagon";
    height = "100px";
    width = "100px";

    if (ImgVal === "Rock") {
      ImgUrl = "static/icon-rock.svg";
      colorItem = "--dark-rock-gradient";
      transform = "translate(25%,80%)";
    } else if (ImgVal === "Scissors") {
      ImgUrl = "static/icon-scissors.svg";
      colorItem = "--light-scissors-gradient";
      transform = "translate(-50%,-148%)";
    } else if (ImgVal === "Lizard") {
      ImgUrl = "static/icon-lizard.svg";
      colorItem = "--light-lizard-gradient";
      transform = "translate(-130%,80%)";
    } else if (ImgVal === "Spock") {
      ImgUrl = "static/icon-spock.svg";
      colorItem = "--cyan";
      transform = "translate(-163%,-61%)";
    } else if (ImgVal === "Paper") {
      transform = "translate(63%,-67%)";
    }
  } else {
    if (ImgVal === "Rock") {
      ImgUrl = "static/icon-rock.svg";
      colorItem = "--dark-rock-gradient";
      transform = "translate(-64%,24%)";
    } else if (ImgVal === "Scissors") {
      ImgUrl = "static/icon-scissors.svg";
      colorItem = "--light-scissors-gradient";
      transform = "translate(29%,-140%)";
    }
  }

  return (
    <Wrapper
      colorItemCSS={colorItem}
      transformCSS={transform}
      height={height}
      width={width}
      onClick={onClick}
    >
      <InternalImg ImgUrlCSS={ImgUrl} />
    </Wrapper>
  );
}

export default Circle;
