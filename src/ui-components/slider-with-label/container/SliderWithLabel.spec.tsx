import React from "react";
import { mount, shallow } from "enzyme";
import SliderWithLabel from "./SliderWithLabel";
import SliderWithLabelView from "../view/SliderWithLabelView";

describe("Given a SliderWithLabel", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <SliderWithLabel
          onValueChange={jest.fn()}
          label={""}
          range={{ min: 0, max: 2 }}
          step={1}
          propertyName={""}
          selectedValue={1}
        />
      );

      expect(component).toMatchSnapshot();
    });
    it("should render MovingPictureView", () => {
      const component = mount(
        <SliderWithLabel
          onValueChange={jest.fn()}
          label={""}
          range={{ min: 0, max: 2 }}
          step={1}
          propertyName={""}
          selectedValue={1}
        />
      );

      expect(component.find(SliderWithLabelView).length).toBe(1);
    });
  });
});
