import React, { useState } from "react";
import styled from "styled-components";

import Completed from "./Completed";
import Form from "./Form";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  margin: 2rem auto 0;
  padding: 1rem;
  width: 30rem;
`;

export const SignUpSwitcher = ({ Completed, Incomplete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return isCompleted ? <Completed /> : <Incomplete onComplete={() => setIsCompleted(true)} />;
};

const SignUp = () => {
  return (
    <Wrapper>
      <SignUpSwitcher Completed={Completed} Incomplete={Form} />
    </Wrapper>
  );
};

export default SignUp;
