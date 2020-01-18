import React, { useState } from "react";
import ParticleVortexShowcaseView from "../view/ParticleVortexShowcaseView";
import { SliderValue } from "antd/es/slider";

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
    <ParticleVortexShowcaseView
      onLifeTimeChange={onLifeTimeChange}
      onParticleNumberChange={onChange}
      onTraceWidthChange={onTraceWidthChange}
      particleLifeTimeValue={selectedParticleLifeTimeValue}
      particleNumberValue={selectedParticleNumberValue}
      particleTraceWidthValue={selectedParticleTraceWidthValue}
      vortexNumberValue={selectedVortexNumberValue}
      onVortexNumberChange={onVortexNumberChange}
      onImageWidthChange={onImageWidthChange}
      onImageHeightChange={onImageHeightChange}
      onBackgroundColorChange={onBackgroundColorChange}
      backgroundColor={selectedBackgroundColor}
      imageWidth={selectedImageWidth}
      imageHeight={selectedImageHeight}
    />
  );
};

export default ParticleVortexShowcase;
