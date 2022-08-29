import React from "react";
import styled from "styled-components";

const ButtonRule = styled.div`
    border:1px solid var(white);

    &:hover {
        cursor:pointer;
        text-decoration-color:white;
        text-decoration-thickness:30%;
    }
`;

const Text = styled.h3`
    color:white;

`;


function Button()
{
    return(
    <ButtonRule>
       <Text> Rule</Text> 
    </ButtonRule>
    )

}

export default Button