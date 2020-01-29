import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { act } from "react-dom/test-utils";

jest.mock("./FavouriteAuthor", () => {
  const React = require("react");

  return {
    __esModule: true,
    default: React.forwardRef((props, ref) => {
      return (
        <select name="favouriteAuthor" ref={ref}>
          <option value="test-author">Test Author</option>
        </select>
      );
    })
  };
});

test("submits correctly", async () => {
  const handleCompleteMock = jest.fn();
  const signUpAPIMock = jest.fn();

  jest.doMock("./_signUp", () => ({
    __esModule: true,
    default: signUpAPIMock
  }));

  const Form = require("./Form").default;

  let wrapper;

  await act(async () => {
    wrapper = mount(<Form onComplete={handleCompleteMock} />);
    wrapper.find("input[name='fullName']").instance().value = "Lucas";
    wrapper.find("input[name='email']").instance().value = "lucas@example.com";
    wrapper.find("form").simulate("submit");
  });

  expect(signUpAPIMock).toHaveBeenCalledWith({
    email: "lucas@example.com",
    favouriteAuthor: "test-author",
    fullName: "Lucas"
  });
  expect(handleCompleteMock).toHaveBeenCalled();
});

test("matches snapshot", async () => {
  const Form = require("./Form").default;

  let wrapper;

  await act(async () => {
    wrapper = mount(<Form />);
  });

  expect(toJSON(wrapper)).toMatchSnapshot();
});
