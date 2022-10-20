import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`

background-color: var(--light-radial-gradient);
color:white;
`;

function ToggleButton() {
  const apple = true;
  return (
    <Wrapper>
      {/* <div>{apple && <h2> Apple </h2>}</div> */}
      Apple
    </Wrapper>

  );
}

export default ToggleButton;