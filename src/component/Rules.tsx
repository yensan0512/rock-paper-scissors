import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  background-color: white;
  width: 450px;
  height: 450px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  opacity: 1;
`;

const FlexContainer = styled.div`
  display: flex;
  //justify-content: space-around;
`;

const Title = styled.div`
  font-size: 20px;
  padding: 20px;
  flex: 90%;
  font-weight: bold;
`;

const ImgBtn = styled.img`
  content: url("static/close.png");
  width: 35px;
  height: 35px;
  padding: 20px;
  flex: 10%;

  &:hover {
    cursor: pointer;
  }
`;

const ImgRule = styled.img(
  ({ isOpen }: { isOpen: boolean }) => `
  content: url("static/image-rules.svg");
  width: 380px;
  height: 380px;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -43%);
  visibility: ${isOpen ? "visible" : "hidden"};
`
);

function Rules({
  isRuleOpen,
  setIsRuleOpen,
}: {
  isRuleOpen: boolean;
  setIsRuleOpen: (b: boolean) => void;
}) {
  return (
    <Wrapper>
      <FlexContainer>
        <Title>RULES</Title>
        <ImgBtn onClick={() => setIsRuleOpen(false)}></ImgBtn>
      </FlexContainer>
      <ImgRule isOpen={isRuleOpen} />
    </Wrapper>
  );
}

export default Rules;
