import React from "react";
import { mount, shallow } from "enzyme";
import SwitchWithLabel from "./SwitchWithLabel";
import SwitchWithLabelView from "../view/SwitchWithLabelView";

describe("Given a SwitchWithLabel", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <SwitchWithLabel
          onValueChange={jest.fn()}
          label={""}
          propertyName={""}
          defaultValue={false}
        />
      );

      expect(component).toMatchSnapshot();
    });
    it("should render MovingPictureView", () => {
      const component = mount(
        <SwitchWithLabel
          onValueChange={jest.fn()}
          label={""}
          propertyName={""}
          defaultValue={false}
        />
      );

      expect(component.find(SwitchWithLabelView).length).toBe(1);
    });
  });
});
