import React from "react";
import { shallow } from "enzyme";
import DropdownWithLabelView from "./DropdownWithLabelView";

describe("Given a DropdownWithLabelView", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <DropdownWithLabelView
          options={[]}
          onChange={jest.fn()}
          label={""}
          defaultValue={""}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
