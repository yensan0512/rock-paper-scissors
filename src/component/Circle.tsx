import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const CircleLayout = styled.div(
  ({ colorItemCSS }: { colorItemCSS: string }) => `
  border-radius: 50%;
  background-color: white;
  border: 10px solid var(${colorItemCSS});
  width: 80px;
  height: 80px;
  position: relative;
`
);

const InternalImg = styled.img(
  ({ ImgUrlCSS }: { ImgUrlCSS: string }) => `
  content: url(${ImgUrlCSS});
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
);

function Circle({ ImgVal }: { ImgVal: string }) {
  let ImgUrl = "static/icon-paper.svg";
  let colorItem = "--dark-paper-gradient";

  if (ImgVal === "Rock") {
    ImgUrl = "static/icon-rock.svg";
    colorItem = "--dark-rock-gradient";
  } else if (ImgVal === "Scissors") {
    ImgUrl = "static/icon-scissors.svg";
    colorItem = "--light-scissors-gradient";
  }

  return (
    <Wrapper>
      <CircleLayout colorItemCSS={colorItem}>
        <InternalImg ImgUrlCSS={ImgUrl} />
      </CircleLayout>
    </Wrapper>
  );
}

export default Circle;
