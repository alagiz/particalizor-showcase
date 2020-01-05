import React, { useState } from "react";
import "./App.css";
import { ParticleVortex } from "particalizor-3000";
import "antd/dist/antd.css";
import SliderWithLabel from "./components/slider-with-label/container/SliderWithLabel";
import { SliderValue } from "antd/es/slider";

const ParticleVortexShowcase: React.FC = () => {
  const [
    selectedParticleNumberValue,
    setSelectedParticleNumberValue
  ] = useState<number>(2400);
  const [
    selectedParticleTraceWidthValue,
    setSelectedParticleTraceWidthValue
  ] = useState<number>(2);
  const [
    selectedParticleLifeTimeValue,
    setSelectedParticleLifeTimeValue
  ] = useState<number>(100);
  const [selectedVortexNumberValue, setSelectedVortexNumberValue] = useState<
    number
  >(7);

  const onChange = (value: SliderValue) =>
    setSelectedParticleNumberValue(value as number);

  const onTraceWidthChange = (value: SliderValue) =>
    setSelectedParticleTraceWidthValue(value as number);

  const onLifeTimeChange = (value: SliderValue) =>
    setSelectedParticleLifeTimeValue(value as number);

  const onVortexNumberChange = (value: SliderValue) =>
    setSelectedVortexNumberValue(value as number);

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
              range={{ min: 200, max: 3000 }}
              step={200}
            />
            <SliderWithLabel
              propertyName={"particleTraceWidthValue"}
              selectedValue={selectedParticleTraceWidthValue}
              onValueChange={onTraceWidthChange}
              label={"particle trace width"}
              range={{ min: 1, max: 10 }}
            />
            <SliderWithLabel
              propertyName={"particleLifeTimeValue"}
              selectedValue={selectedParticleLifeTimeValue}
              onValueChange={onLifeTimeChange}
              label={"particle life time"}
              range={{ min: 100, max: 1000 }}
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
        </div>
        <div className={"images"}>
          <div className={"image-container"}>
            <ParticleVortex
              key={Date.now()}
              imageWidth={840}
              imageHeight={384}
              vortexNumber={selectedVortexNumberValue}
              particleTraceWidth={selectedParticleTraceWidthValue}
              particleNumber={selectedParticleNumberValue}
              particleLifeTime={selectedParticleLifeTimeValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticleVortexShowcase;
