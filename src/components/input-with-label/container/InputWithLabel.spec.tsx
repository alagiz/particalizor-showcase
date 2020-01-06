import React from "react";
import { mount, shallow } from "enzyme";
import InputWithLabel from "./InputWithLabel";
import InputWithLabelView from "../view/InputWithLabelView";

describe("Given a InputWithLabel", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <InputWithLabel
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
        <InputWithLabel
          selectedValue={""}
          onValueChange={jest.fn()}
          label={""}
          defaultValue={""}
          propertyName={""}
        />
      );

      expect(component.find(InputWithLabelView).length).toBe(1);
    });
  });
});
