import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div(
  ({
    colorItemCSS,
    transformCSS,
  }: {
    colorItemCSS: string;
    transformCSS: string;
  }) => `
  border-radius: 50%;
  background-color: white;
  border: 20px solid var(${colorItemCSS});
  width: 120px;
  height: 120px;
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
  onClick,
}: {
  ImgVal: string;
  onClick: () => void;
}) {
  let ImgUrl = "static/icon-paper.svg";
  let colorItem = "--dark-paper-gradient";
  let transform = "translate(-118%,-123%);";

  if (ImgVal === "Rock") {
    ImgUrl = "static/icon-rock.svg";
    colorItem = "--dark-rock-gradient";
    transform = "translate(-51%,7%)";
  } else if (ImgVal === "Scissors") {
    ImgUrl = "static/icon-scissors.svg";
    colorItem = "--light-scissors-gradient";
    transform = "translate(18%,-124%)";
  }

  return (
    <Wrapper
      colorItemCSS={colorItem}
      transformCSS={transform}
      onClick={onClick}
    >
      <InternalImg ImgUrlCSS={ImgUrl} />
    </Wrapper>
  );
}

export default Circle;
