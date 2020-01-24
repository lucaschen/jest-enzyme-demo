import { darken } from "polished";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import signUp from "./_signUp";
import FavouriteAuthor from "./FavouriteAuthor";

const Button = styled.button`
  appearance: none;
  background-color: #1eda1e;
  border: 0;
  color: white;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5em 0.7em;
  transition: background-color 0.5s;

  :focus {
    background-color: ${darken(0.05, "#1eda1e")};
    outline: none;
  }

  :hover {
    background-color: ${darken(0.05, "#1eda1e")};
    cursor: pointer;
  }

  :disabled {
    background-color: #aaaaaa;

    :hover {
      cursor: not-allowed;
    }
  }
`;

const ButtonRow = styled.div`
  margin-top: 0.75rem;
`;

const Input = styled.input`
  border: 1px solid transparent;
  box-sizing: border-box;
  display: block;
  font-family: inherit;
  font-size: 1.15rem;
  padding: 0.25em 0.35em;
  transition: border-color 0.5s, color 0.5s;
  width: 100%;

  :disabled {
    color: #aaaaaa;
  }

  :focus {
    border-color: #1eda1e;
    outline: none;
  }
`;

const Label = styled.label`
  display: block;

  :not(:first-child) {
    margin-top: 0.75rem;
  }
`;

const LabelText = styled.span`
  display: block;
  font-weight: 600;
  margin: 0 0 0.5rem;
`;

const Form = ({ onSignUp: pushSignUp }) => {
  const {
    formState: { isSubmitting, isValid },
    handleSubmit,
    register
  } = useForm({ mode: "onChange" });

  const onSubmit = async ({ email, favouriteAuthor, fullName }) => {
    await signUp({ email, favouriteAuthor, fullName });
    pushSignUp();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <LabelText>Full Name</LabelText>
        <Input autoFocus disabled={isSubmitting} name="fullName" ref={register({ required: true })} type="text" />
      </Label>
      <Label>
        <LabelText>Email Address</LabelText>
        <Input disabled={isSubmitting} name="email" ref={register({ required: true })} type="email" />
      </Label>
      <Label>
        <LabelText>Favourite Author</LabelText>
        <FavouriteAuthor disabled={isSubmitting} ref={register({ required: true })} />
      </Label>
      <ButtonRow>
        <Button disabled={!isValid || isSubmitting} type="submit">
          Sign Up
        </Button>
      </ButtonRow>
    </form>
  );
};

export default Form;
