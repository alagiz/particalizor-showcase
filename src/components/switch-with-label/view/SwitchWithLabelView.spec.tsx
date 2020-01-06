import React from "react";
import { shallow } from "enzyme";
import SwitchWithLabelView from "../view/SwitchWithLabelView";

describe("Given a SwitchWithLabelView", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <SwitchWithLabelView
          onChange={jest.fn()}
          label={""}
          defaultValue={false}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
