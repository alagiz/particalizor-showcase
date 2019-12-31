import React, { useState } from "react";
import cadillac from "./cadillac.jpg";
import "./App.css";
import MovingPicture from "particalizor-3000";
import "antd/dist/antd.css";
import SliderWithLabel from "./components/slider-with-label/container/SliderWithLabel";
import { SliderValue } from "antd/es/slider";

const App: React.FC = () => {
  const [
    selectedParticleNumberValue,
    setSelectedParticleNumberValue
  ] = useState<number>(0);
  const [
    selectedParticleTraceWidthValue,
    setSelectedParticleTraceWidthValue
  ] = useState<number>(0);

  const onChange = (value: SliderValue) => {
    setSelectedParticleNumberValue(value as number);
  };
  const onTraceWidthChange = (value: SliderValue) => {
    setSelectedParticleTraceWidthValue(value as number);
  };

  console.log(selectedParticleNumberValue);

  return (
    <div className="App">
      <SliderWithLabel
        propertyName={"particleNumber"}
        selectedValue={selectedParticleNumberValue}
        onValueChange={onChange}
        label={"particle number"}
        range={{ min: 0, max: 22 }}
      />
      <SliderWithLabel
        propertyName={"particleTraceWidthValue"}
        selectedValue={selectedParticleTraceWidthValue}
        onValueChange={onTraceWidthChange}
        label={"particle trace width"}
        range={{ min: 0, max: 4 }}
      />
      <MovingPicture
        imageSource={cadillac}
        particleNumber={selectedParticleNumberValue}
        particleTraceWidth={selectedParticleTraceWidthValue}
      />
    </div>
  );
};

export default App;
