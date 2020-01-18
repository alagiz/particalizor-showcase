import React from "react";
import { mount, shallow } from "enzyme";
import MovingPictureShowcase from "./MovingPictureShowcase";
import MovingPictureShowcaseView from "../view/MovingPictureShowcaseView";

describe("Given a MovingPictureShowcase", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(<MovingPictureShowcase />);

      expect(component).toMatchSnapshot();
    });
    it("should render MovingPictureView", () => {
      const component = mount(<MovingPictureShowcase />);

      expect(component.find(MovingPictureShowcaseView).length).toBe(1);
    });
  });
});
