import React, { useState } from "react";
import cadillac from "./cadillac.jpg";
import "./App.css";
import MovingPicture from "particalizor-3000";
import "antd/dist/antd.css";
import SliderWithLabel from "./components/slider-with-label/container/SliderWithLabel";
import { SliderValue } from "antd/es/slider";
import DropdownWithLabel from "./components/dropdown-with-label/container/DropdownWithLabel";
import SwitchWithLabel from "./components/switch-with-label/container/SwitchWithLabel";

const App: React.FC = () => {
  const [
    selectedParticleNumberValue,
    setSelectedParticleNumberValue
  ] = useState<number>(0);
  const [
    selectedParticleTraceWidthValue,
    setSelectedParticleTraceWidthValue
  ] = useState<number>(0);
  const [
    selectedParticleVelocityValue,
    setSelectedParticleVelocityValue
  ] = useState<number>(0);
  const [
    selectedParticleLifeTimeValue,
    setSelectedParticleLifeTimeValue
  ] = useState<number>(0);
  const [
    selectedDirectionChannelValue,
    setSelectedDirectionChannelValue
  ] = useState<string>("hue");
  const [selectedHueChannelValue, setSelectedHueChannelValue] = useState<
    string
  >("blue");
  const [selectedHueReversedValue, setSelectedHueReversedValue] = useState<
    boolean
  >(false);
  const [
    selectedDirectionReversedValue,
    setSelectedDirectionReversedValue
  ] = useState<boolean>(false);

  const onChange = (value: SliderValue) => {
    setSelectedParticleNumberValue(value as number);
  };
  const onTraceWidthChange = (value: SliderValue) => {
    setSelectedParticleTraceWidthValue(value as number);
  };
  const onVelocityChange = (value: SliderValue) => {
    setSelectedParticleVelocityValue(value as number);
  };
  const onLifeTimeChange = (value: SliderValue) => {
    setSelectedParticleLifeTimeValue(value as number);
  };
  const onDirectionChannelChange = (value: string) => {
    setSelectedDirectionChannelValue(value);
  };
  const onHueChannelChange = (value: string) => {
    setSelectedHueChannelValue(value);
  };
  const onHueReverseChange = (value: boolean) => {
    setSelectedHueReversedValue(value);
  };
  const onDirectionReverseChange = (value: boolean) => {
    setSelectedDirectionReversedValue(value);
  };

  const directionHueOptions = [
    {
      value: "hue",
      title: "hue"
    },
    {
      value: "saturation",
      title: "saturation"
    },
    {
      value: "light",
      title: "light"
    },
    {
      value: "red",
      title: "red"
    },
    {
      value: "green",
      title: "green"
    },
    {
      value: "blue",
      title: "blue"
    }
  ];

  return (
    <div className={"top-container"}>
      <div className="properties-container">
        <div className={"properties-set"}>
          <SliderWithLabel
            propertyName={"particleNumber"}
            selectedValue={selectedParticleNumberValue}
            onValueChange={onChange}
            label={"particle number"}
            range={{ min: 0, max: 7000 }}
            step={200}
          />
          <SliderWithLabel
            propertyName={"particleTraceWidthValue"}
            selectedValue={selectedParticleTraceWidthValue}
            onValueChange={onTraceWidthChange}
            label={"particle trace width"}
            range={{ min: 0, max: 8 }}
          />
          <SliderWithLabel
            propertyName={"particleVelocityValue"}
            selectedValue={selectedParticleVelocityValue}
            onValueChange={onVelocityChange}
            label={"particle velocity"}
            range={{ min: 0, max: 10 }}
          />
          <SliderWithLabel
            propertyName={"particleLifeTimeValue"}
            selectedValue={selectedParticleLifeTimeValue}
            onValueChange={onLifeTimeChange}
            label={"particle life time"}
            range={{ min: 0, max: 5000 }}
            step={100}
          />
        </div>
        <div className={"properties-set"}>
          <DropdownWithLabel
            propertyName={"directionChannel"}
            onValueChange={onDirectionChannelChange}
            selectedValue={selectedDirectionChannelValue}
            label={"direction"}
            defaultValue={selectedDirectionChannelValue}
            options={directionHueOptions}
          />
          <DropdownWithLabel
            propertyName={"hueChannel"}
            onValueChange={onHueChannelChange}
            selectedValue={selectedHueChannelValue}
            label={"hue channel"}
            defaultValue={selectedHueChannelValue}
            options={directionHueOptions}
          />
          <SwitchWithLabel
            propertyName={"hueReverse"}
            onValueChange={onHueReverseChange}
            label={"hue reversed"}
            defaultValue={selectedHueReversedValue}
          />
          <SwitchWithLabel
            propertyName={"directionReverse"}
            onValueChange={onDirectionReverseChange}
            label={"direction reversed"}
            defaultValue={selectedDirectionReversedValue}
          />
        </div>
      </div>
      <div className={"images"}>
        <div className={"image-container"}>
          <img src={cadillac} alt={"original"} />
        </div>
        <div className={"image-container"}>
          <MovingPicture
            imageSource={cadillac}
            particleTraceWidth={selectedParticleTraceWidthValue}
            particleVelocity={selectedParticleVelocityValue}
            particleNumber={selectedParticleNumberValue}
            particleLifeTime={selectedParticleLifeTimeValue}
            directionChannel={selectedDirectionChannelValue}
            hueChannel={selectedHueChannelValue}
            reverseHue={selectedHueReversedValue}
            reverseDirection={selectedDirectionReversedValue}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
