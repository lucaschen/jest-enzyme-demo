import { mount } from "enzyme";
import React from "react";
import { act } from "react-dom/test-utils";

import { SignUpSwitcher } from "./SignUp";

const Completed = () => {
  return <strong>Completed</strong>;
};

const Incomplete = () => {
  return <strong>Incomplete</strong>;
};

test("properly switches between two states", () => {
  const wrapper = mount(<SignUpSwitcher Completed={Completed} Incomplete={Incomplete} />);

  expect(wrapper.find(Incomplete).length).toBe(1);

  act(() => {
    wrapper
      .find(Incomplete)
      .props()
      .onComplete();
  });

  wrapper.update();

  expect(wrapper.find(Incomplete).length).toBe(0);
  expect(wrapper.find(Completed).length).toBe(1);
});
