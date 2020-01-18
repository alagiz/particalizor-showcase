import React, { useState } from "react";
import MovingPictureShowcaseView from "../view/MovingPictureShowcaseView";
import { SliderValue } from "antd/es/slider";

const MovingPictureShowcase: React.FC = () => {
  const [
    selectedParticleNumberValue,
    setSelectedParticleNumberValue
  ] = useState<number>(2400);
  const [
    selectedParticleTraceWidthValue,
    setSelectedParticleTraceWidthValue
  ] = useState<number>(2);
  const [
    selectedParticleVelocityValue,
    setSelectedParticleVelocityValue
  ] = useState<number>(1);
  const [
    selectedParticleLifeTimeValue,
    setSelectedParticleLifeTimeValue
  ] = useState<number>(100);
  const [
    selectedDirectionChannelValue,
    setSelectedDirectionChannelValue
  ] = useState<string>("saturation");
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
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [selectedImageMode, setSelectedImageMode] = useState<string>(
    "given-picture"
  );

  const onChange = (value: SliderValue) =>
    setSelectedParticleNumberValue(value as number);

  const onTraceWidthChange = (value: SliderValue) =>
    setSelectedParticleTraceWidthValue(value as number);

  const onVelocityChange = (value: SliderValue) =>
    setSelectedParticleVelocityValue(value as number);

  const onLifeTimeChange = (value: SliderValue) =>
    setSelectedParticleLifeTimeValue(value as number);

  const onDirectionChannelChange = (value: string) =>
    setSelectedDirectionChannelValue(value);

  const onHueChannelChange = (value: string) => {
    setSelectedHueChannelValue(value);
  };
  const onHueReverseChange = (value: boolean) =>
    setSelectedHueReversedValue(value);

  const onDirectionReverseChange = (value: boolean) =>
    setSelectedDirectionReversedValue(value);

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

  const switchImageMode = () => {
    setSelectedImageMode(
      selectedImageMode === "given-picture"
        ? "uploaded-picture"
        : "given-picture"
    );
  };

  const switchButtonTitle =
    selectedImageMode === "given-picture"
      ? "THIS IS FIXED PICTURE MODE, CLICK TO SEE UPLOADED PICTURE MODE"
      : "THIS IS UPLOADED PICTURE MODE, CLICK TO SEE FIXED PICTURE MODE";

  const onDrop = (acceptedFiles: File[]) => setUploadedImage(acceptedFiles[0]);

  return (
    <MovingPictureShowcaseView
      directionChannelValue={selectedDirectionChannelValue}
      directionHueOptions={directionHueOptions}
      directionReversedValue={selectedDirectionReversedValue}
      hueChannelValue={selectedHueChannelValue}
      hueReversedValue={selectedHueReversedValue}
      onDirectionChannelChange={onDirectionChannelChange}
      onDirectionReverseChange={onDirectionReverseChange}
      onHueChannelChange={onHueChannelChange}
      onHueReverseChange={onHueReverseChange}
      onLifeTimeChange={onLifeTimeChange}
      onParticleNumberChange={onChange}
      onTraceWidthChange={onTraceWidthChange}
      onVelocityChange={onVelocityChange}
      particleLifeTimeValue={selectedParticleLifeTimeValue}
      particleNumberValue={selectedParticleNumberValue}
      particleTraceWidthValue={selectedParticleTraceWidthValue}
      particleVelocityValue={selectedParticleVelocityValue}
      selectedImageMode={selectedImageMode}
      onDrop={onDrop}
      switchButtonTitle={switchButtonTitle}
      switchImageMode={switchImageMode}
      uploadedImage={uploadedImage}
    />
  );
};

export default MovingPictureShowcase;
