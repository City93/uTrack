import React from "react";
import { shallow } from "enzyme";
import Folders from "./Folders";

describe("Folders", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Folders />);
    expect(wrapper).toMatchSnapshot();
  });
});
