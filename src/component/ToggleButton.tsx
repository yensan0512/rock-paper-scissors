import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`

background-color: var(--light-radial-gradient);
color:white;

&:hover{
  cursor:pointer;
}

`;


function ToggleButton({ onClick, isModeChoose }: { onClick: () => void; isModeChoose: boolean; }) {
  let mode = "Easy";
  if (isModeChoose) {
    mode = "Hard";
  }
  return (
    <Wrapper onClick={onClick}>
      {/* <div>{apple && <h2> Apple </h2>}</div> */}
      {mode}
    </Wrapper>

  );
}

export default ToggleButton;