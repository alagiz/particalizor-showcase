import React from "react";
import { shallow } from "enzyme";
import AppView from "./AppView";

describe("Given a AppView", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <AppView
          switchButtonTitle={""}
          showcase={""}
          switchShowcase={jest.fn()}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
