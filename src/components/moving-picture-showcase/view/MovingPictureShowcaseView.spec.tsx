import React from "react";
import { shallow } from "enzyme";
import MovingPictureShowcaseView from "./MovingPictureShowcaseView";

describe("Given a MovingPictureShowcaseView", () => {
  describe("when rendering", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <MovingPictureShowcaseView
          switchButtonTitle={""}
          uploadedImage={null}
          switchImageMode={jest.fn()}
          selectedImageMode={""}
          particleVelocityValue={1}
          particleTraceWidthValue={1}
          particleNumberValue={1}
          particleLifeTimeValue={1}
          onVelocityChange={jest.fn()}
          onTraceWidthChange={jest.fn()}
          onParticleNumberChange={jest.fn()}
          onLifeTimeChange={jest.fn()}
          onHueReverseChange={jest.fn()}
          onHueChannelChange={jest.fn()}
          onDirectionChannelChange={jest.fn()}
          hueReversedValue={false}
          hueChannelValue={"red"}
          directionReversedValue={false}
          directionHueOptions={[]}
          directionChannelValue={"hue"}
          onDirectionReverseChange={jest.fn()}
          onDrop={jest.fn()}
        />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
