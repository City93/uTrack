import React from "react";
import { shallow } from "enzyme";
import TopNav from "./TopNav";

describe("TopNav", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
