import React from "react";
import styled from "styled-components/macro";

const ButtonRule = styled.div`
  border: 1px solid white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 453%);
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    text-decoration-color: white;
    text-decoration-thickness: 30%;
  }
`;

const Text = styled.h3`
  color: white;
  padding-left: 50px;
  padding-right: 50px;
`;

function Button({ onClick }: { onClick: () => void }) {
  return (
    <ButtonRule onClick={onClick}>
      <Text> RULES</Text>
    </ButtonRule>
  );
}

export default Button;
