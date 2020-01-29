import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { act } from "react-dom/test-utils";

jest.mock("./_fetchAuthors", () => {
  return {
    __esModule: true,
    default: async () => [
      {
        id: 1,
        name: "Test Author 1"
      },
      {
        id: 2,
        name: "Test Author 2"
      }
    ]
  };
});

test("matches snapshot", async () => {
  const FavouriteAuthor = require("./FavouriteAuthor").default;

  let wrapper;

  await act(async () => {
    wrapper = mount(<FavouriteAuthor />);
  });

  wrapper.update();

  expect(toJSON(wrapper)).toMatchSnapshot();
});
