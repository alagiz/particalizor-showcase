import React from "react";
import { mount, shallow } from "enzyme";
import DropdownWithLabel from "./DropdownWithLabel";
import DropdownWithLabelView from "../view/DropdownWithLabelView";

describe("Given a DropdownWithLabel", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <DropdownWithLabel
          options={[]}
          selectedValue={""}
          onValueChange={jest.fn()}
          label={""}
          defaultValue={""}
          propertyName={""}
        />
      );

      expect(component).toMatchSnapshot();
    });
    it("should render MovingPictureView", () => {
      const component = mount(
        <DropdownWithLabel
          options={[]}
          selectedValue={""}
          onValueChange={jest.fn()}
          label={""}
          defaultValue={""}
          propertyName={""}
        />
      );

      expect(component.find(DropdownWithLabelView).length).toBe(1);
    });
  });
});
