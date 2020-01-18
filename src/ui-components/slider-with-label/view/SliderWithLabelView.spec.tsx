import React from "react";
import { shallow } from "enzyme";
import SliderWithLabelView from "./SliderWithLabelView";

describe("Given a SliderWithLabelView", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <SliderWithLabelView
          onChange={jest.fn()}
          label={""}
          inputValue={2}
          range={{ min: 0, max: 2 }}
          step={1}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
