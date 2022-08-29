import React from "react";
import styled from "styled-components";

const Wrapper= styled.div``;

const CircleLayout = styled.div`
    border-radius:50%;
    background-color:white;
    border:10px solid var(--light-scissors-gradient);
    width:100px;
    height:100px;
    position:relative;

`;

const InternalImg = styled.img`
    content :url("static/icon-rock.svg");
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`;






function Circle(){
    return (
        <Wrapper>
<CircleLayout>
    <InternalImg/>
</CircleLayout>
</Wrapper>

    )

}

export default Circle;