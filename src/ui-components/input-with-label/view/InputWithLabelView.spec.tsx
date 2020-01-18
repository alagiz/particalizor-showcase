import React from "react";
import { shallow } from "enzyme";
import InputWithLabelView from "./InputWithLabelView";

describe("Given a InputWithLabelView", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <InputWithLabelView onChange={jest.fn()} label={""} defaultValue={""} />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
