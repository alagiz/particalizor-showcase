import React, { useState } from "react";
import "./App.css";
import { ParticleVortex } from "particalizor-3000";
import "antd/dist/antd.css";
import SliderWithLabel from "./components/slider-with-label/container/SliderWithLabel";
import { SliderValue } from "antd/es/slider";
import InputWithLabel from "./components/input-with-label/container/InputWithLabel";

const ParticleVortexShowcase: React.FC = () => {
  const [
    selectedParticleNumberValue,
    setSelectedParticleNumberValue
  ] = useState<number>(30);
  const [
    selectedParticleTraceWidthValue,
    setSelectedParticleTraceWidthValue
  ] = useState<number>(600);
  const [
    selectedParticleLifeTimeValue,
    setSelectedParticleLifeTimeValue
  ] = useState<number>(1100);
  const [selectedVortexNumberValue, setSelectedVortexNumberValue] = useState<
    number
  >(3);
  const [selectedImageHeight, setSelectedImageHeight] = useState<number>(500);
  const [selectedImageWidth, setSelectedImageWidth] = useState<number>(900);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState<
    string
  >("#33344c");

  const onChange = (value: SliderValue) =>
    setSelectedParticleNumberValue(value as number);

  const onTraceWidthChange = (value: SliderValue) =>
    setSelectedParticleTraceWidthValue(value as number);

  const onLifeTimeChange = (value: SliderValue) =>
    setSelectedParticleLifeTimeValue(value as number);

  const onVortexNumberChange = (value: SliderValue) =>
    setSelectedVortexNumberValue(value as number);

  const onImageWidthChange = (value: SliderValue) =>
    setSelectedImageWidth(value as number);

  const onImageHeightChange = (value: SliderValue) =>
    setSelectedImageHeight(value as number);

  const onBackgroundColorChange = (value: string) =>
    setSelectedBackgroundColor(value as string);

  return (
    <div className={"top-container"}>
      <div className={"showcase-component-container"}>
        <div className="properties-container">
          <div className={"properties-set"}>
            <SliderWithLabel
              propertyName={"particleNumber"}
              selectedValue={selectedParticleNumberValue}
              onValueChange={onChange}
              label={"particle number"}
              range={{ min: 10, max: 2000 }}
              step={20}
            />
            <SliderWithLabel
              propertyName={"particleTraceWidthValue"}
              selectedValue={selectedParticleTraceWidthValue}
              onValueChange={onTraceWidthChange}
              label={"particle trace width"}
              range={{ min: 1, max: 800 }}
            />
            <SliderWithLabel
              propertyName={"particleLifeTimeValue"}
              selectedValue={selectedParticleLifeTimeValue}
              onValueChange={onLifeTimeChange}
              label={"particle life time"}
              range={{ min: 100, max: 7000 }}
              step={100}
            />
            <SliderWithLabel
              propertyName={"selectedVortexNumberValue"}
              selectedValue={selectedVortexNumberValue}
              onValueChange={onVortexNumberChange}
              label={"vortex number"}
              range={{ min: 1, max: 20 }}
            />
          </div>
          <div className={"properties-set"}>
            <SliderWithLabel
              propertyName={"imageWidth"}
              selectedValue={selectedImageWidth}
              onValueChange={onImageWidthChange}
              label={"image width"}
              range={{ min: 200, max: 1200 }}
              step={100}
            />
            <SliderWithLabel
              propertyName={"imageHeight"}
              selectedValue={selectedImageHeight}
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
              selectedValue={selectedBackgroundColor}
            />
          </div>
        </div>
        <div className={"images"}>
          <div className={"image-container"}>
            <ParticleVortex
              key={Date.now()}
              imageWidth={selectedImageWidth}
              imageHeight={selectedImageHeight}
              vortexNumber={selectedVortexNumberValue}
              particleTraceWidth={selectedParticleTraceWidthValue}
              particleNumber={selectedParticleNumberValue}
              particleLifeTime={selectedParticleLifeTimeValue}
              backgroundColor={selectedBackgroundColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticleVortexShowcase;
