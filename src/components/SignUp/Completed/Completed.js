import React from "react";
import styled from "styled-components";

const Message = styled.span`
  font-size: 1.5rem;
`;

const Tick = styled.div`
  font-size: 8rem;
  line-height: 1;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem 0;
`;

const Completed = () => {
  return (
    <Wrapper>
      <Tick>✅</Tick>
      <Message>Sign Up Complete!</Message>
    </Wrapper>
  );
};

export default Completed;
