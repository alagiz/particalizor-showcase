import React from "react";
import { IParticleVortexShowcaseView } from "./IParticleVortexShowcaseView";
import { ParticleVortex } from "particalizor-3000";
import { Styled } from "../styled";
import "antd/dist/antd.css";
import SliderWithLabel from "../../../ui-components/slider-with-label/container/SliderWithLabel";
import InputWithLabel from "../../../ui-components/input-with-label/container/InputWithLabel";

const ParticleVortexShowcaseView: React.FC<IParticleVortexShowcaseView> = ({
  onParticleNumberChange,
  onTraceWidthChange,
  onLifeTimeChange,
  onVortexNumberChange,
  onImageWidthChange,
  onImageHeightChange,
  onBackgroundColorChange,
  particleNumberValue,
  particleTraceWidthValue,
  particleLifeTimeValue,
  imageWidth,
  imageHeight,
  backgroundColor,
  vortexNumberValue
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
            range={{ min: 10, max: 1990 }}
            step={20}
          />
          <SliderWithLabel
            propertyName={"particleTraceWidthValue"}
            selectedValue={particleTraceWidthValue}
            onValueChange={onTraceWidthChange}
            label={"particle trace width"}
            range={{ min: 1, max: 800 }}
          />
          <SliderWithLabel
            propertyName={"particleLifeTimeValue"}
            selectedValue={particleLifeTimeValue}
            onValueChange={onLifeTimeChange}
            label={"particle life time"}
            range={{ min: 100, max: 7000 }}
            step={100}
          />
          <SliderWithLabel
            propertyName={"selectedVortexNumberValue"}
            selectedValue={vortexNumberValue}
            onValueChange={onVortexNumberChange}
            label={"vortex number"}
            range={{ min: 1, max: 20 }}
          />
        </Styled.PropertiesSet>
        <Styled.PropertiesSet>
          <SliderWithLabel
            propertyName={"imageWidth"}
            selectedValue={imageWidth}
            onValueChange={onImageWidthChange}
            label={"image width"}
            range={{ min: 200, max: 1200 }}
            step={100}
          />
          <SliderWithLabel
            propertyName={"imageHeight"}
            selectedValue={imageHeight}
            onValueChange={onImageHeightChange}
            label={"image height"}
            range={{ min: 200, max: 1200 }}
            step={100}
          />
          <InputWithLabel
            propertyName={"backgroundColor"}
            defaultValue={"#33344c"}
            label={"background color"}
            onValueChange={onBackgroundColorChange}
            selectedValue={backgroundColor}
          />
        </Styled.PropertiesSet>
      </Styled.PropertiesContainer>
      <Styled.Images>
        <Styled.ImageContainer>
          <ParticleVortex
            imageWidth={imageWidth}
            imageHeight={imageHeight}
            vortexNumber={vortexNumberValue}
            particleTraceWidth={particleTraceWidthValue}
            particleNumber={particleNumberValue}
            particleLifeTime={particleLifeTimeValue}
            backgroundColor={backgroundColor}
          />
        </Styled.ImageContainer>
      </Styled.Images>
    </Styled.ShowcaseComponentContainer>
  );
};

export default ParticleVortexShowcaseView;
