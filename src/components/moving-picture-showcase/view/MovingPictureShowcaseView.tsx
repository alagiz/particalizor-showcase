import React from "react";
import { IMovingPictureShowcaseView } from "./IMovingPictureShowcaseView";
import { isNil } from "ramda";
import Dropzone from "react-dropzone";
import { MovingPicture } from "particalizor-3000";
import { Styled } from "../styled";
import "antd/dist/antd.css";
import cadillac from "../../../assets/testImage.png";
import SliderWithLabel from "../../../ui-components/slider-with-label/container/SliderWithLabel";
import DropdownWithLabel from "../../../ui-components/dropdown-with-label/container/DropdownWithLabel";
import SwitchWithLabel from "../../../ui-components/switch-with-label/container/SwitchWithLabel";

const MovingPictureShowcaseView: React.FC<IMovingPictureShowcaseView> = ({
  onParticleNumberChange,
  onTraceWidthChange,
  onVelocityChange,
  onLifeTimeChange,
  onDirectionChannelChange,
  onHueChannelChange,
  onHueReverseChange,
  onDirectionReverseChange,

  onDrop,

  particleNumberValue,
  particleTraceWidthValue,
  particleVelocityValue,
  particleLifeTimeValue,
  directionChannelValue,
  hueChannelValue,
  hueReversedValue,
  directionReversedValue,

  directionHueOptions,
  switchImageMode,
  switchButtonTitle,
  selectedImageMode,
  uploadedImage
}) => {
  return (
    <Styled.ShowcaseComponentContainer>
      <Styled.PropertiesContainer>
        <Styled.PropertiesSet>
          <SliderWithLabel
            propertyName={"particleNumber"}
            selectedValue={particleNumberValue}
            onValueChange={onParticleNumberChange}
            label={"particle number"}
            range={{ min: 200, max: 7000 }}
            step={200}
          />
          <SliderWithLabel
            propertyName={"particleTraceWidthValue"}
            selectedValue={particleTraceWidthValue}
            onValueChange={onTraceWidthChange}
            label={"particle trace width"}
            range={{ min: 1, max: 10 }}
          />
          <SliderWithLabel
            propertyName={"particleVelocityValue"}
            selectedValue={particleVelocityValue}
            onValueChange={onVelocityChange}
            label={"particle velocity"}
            range={{ min: 1, max: 10 }}
          />
          <SliderWithLabel
            propertyName={"particleLifeTimeValue"}
            selectedValue={particleLifeTimeValue}
            onValueChange={onLifeTimeChange}
            label={"particle life time"}
            range={{ min: 100, max: 1000 }}
            step={100}
          />
        </Styled.PropertiesSet>
        <Styled.PropertiesSet>
          <DropdownWithLabel
            propertyName={"directionChannel"}
            onValueChange={onDirectionChannelChange}
            selectedValue={directionChannelValue}
            label={"direction"}
            defaultValue={directionChannelValue}
            options={directionHueOptions}
          />
          <DropdownWithLabel
            propertyName={"hueChannel"}
            onValueChange={onHueChannelChange}
            selectedValue={hueChannelValue}
            label={"hue"}
            defaultValue={hueChannelValue}
            options={directionHueOptions}
          />
          <SwitchWithLabel
            propertyName={"hueReverse"}
            onValueChange={onHueReverseChange}
            label={"hue reversed"}
            defaultValue={hueReversedValue}
          />
          <SwitchWithLabel
            propertyName={"directionReverse"}
            onValueChange={onDirectionReverseChange}
            label={"direction reversed"}
            defaultValue={directionReversedValue}
          />
        </Styled.PropertiesSet>
      </Styled.PropertiesContainer>
      <Styled.ImageModeSwitch onClick={switchImageMode}>
        {switchButtonTitle}
      </Styled.ImageModeSwitch>
      {selectedImageMode === "uploaded-picture" && isNil(uploadedImage) && (
        <Styled.Images>
          <Styled.ImageContainer>
            <Styled.Dashed>
              <Dropzone onDrop={onDrop}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <Styled.DropZone {...getRootProps()}>
                      <input {...getInputProps()} />
                      <Styled.DropImageText>
                        DRAG AND DROP AN IMAGE HERE, OR CLICK TO SELECT AN IMAGE
                      </Styled.DropImageText>
                    </Styled.DropZone>
                  </section>
                )}
              </Dropzone>
            </Styled.Dashed>
          </Styled.ImageContainer>
        </Styled.Images>
      )}
      {selectedImageMode === "uploaded-picture" && !isNil(uploadedImage) && (
        <Styled.Images>
          <Styled.ImageContainer>
            <Styled.Dashed>
              <Dropzone onDrop={onDrop}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <Styled.ImageContainerImg
                        src={URL.createObjectURL(uploadedImage)}
                        alt={"dropped"}
                      />
                    </div>
                  </section>
                )}
              </Dropzone>
            </Styled.Dashed>
          </Styled.ImageContainer>
          <Styled.ImageContainer>
            <MovingPicture
              key={Date.now()}
              imageSource={URL.createObjectURL(uploadedImage)}
              particleTraceWidth={particleTraceWidthValue}
              particleVelocity={particleVelocityValue}
              particleNumber={particleNumberValue}
              particleLifeTime={particleLifeTimeValue}
              directionChannel={directionChannelValue}
              hueChannel={hueChannelValue}
              reverseHue={hueReversedValue}
              reverseDirection={directionReversedValue}
            />
          </Styled.ImageContainer>
        </Styled.Images>
      )}
      {selectedImageMode === "given-picture" && (
        <Styled.Images>
          <Styled.ImageContainer>
            <Styled.ImageContainerImg src={cadillac} alt={"original"} />
          </Styled.ImageContainer>
          <Styled.ImageContainer>
            <MovingPicture
              key={Date.now()}
              imageSource={cadillac}
              particleTraceWidth={particleTraceWidthValue}
              particleVelocity={particleVelocityValue}
              particleNumber={particleNumberValue}
              particleLifeTime={particleLifeTimeValue}
              directionChannel={directionChannelValue}
              hueChannel={hueChannelValue}
              reverseHue={hueReversedValue}
              reverseDirection={directionReversedValue}
            />
          </Styled.ImageContainer>
        </Styled.Images>
      )}
    </Styled.ShowcaseComponentContainer>
  );
};

export default MovingPictureShowcaseView;
