import React from "react";
import { shallow } from "enzyme";
import ParticleVortexShowcaseView from "./ParticleVortexShowcaseView";

describe("Given a ParticleVortexShowcaseView", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <ParticleVortexShowcaseView
          particleTraceWidthValue={1}
          particleNumberValue={1}
          particleLifeTimeValue={1}
          onTraceWidthChange={jest.fn()}
          onParticleNumberChange={jest.fn()}
          onLifeTimeChange={jest.fn()}
          imageHeight={100}
          imageWidth={100}
          backgroundColor={"red"}
          onBackgroundColorChange={jest.fn()}
          onImageHeightChange={jest.fn()}
          onImageWidthChange={jest.fn()}
          onVortexNumberChange={jest.fn()}
          vortexNumberValue={3}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
