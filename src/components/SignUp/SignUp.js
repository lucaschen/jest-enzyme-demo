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

const SignUp = () => {
  const [signUpComplete, setSignUpComplete] = useState(false);

  return (
    <Wrapper>
      {signUpComplete ? (
        <Completed />
      ) : (
        <Form
          onSignUp={() => {
            setSignUpComplete(true);
          }}
        />
      )}
    </Wrapper>
  );
};

export default SignUp;
