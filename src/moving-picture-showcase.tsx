import React, { useState } from "react";
import cadillac from "./testImage.png";
import "./App.css";
import { MovingPicture } from "particalizor-3000";
import "antd/dist/antd.css";
import SliderWithLabel from "./components/slider-with-label/container/SliderWithLabel";
import { SliderValue } from "antd/es/slider";
import DropdownWithLabel from "./components/dropdown-with-label/container/DropdownWithLabel";
import SwitchWithLabel from "./components/switch-with-label/container/SwitchWithLabel";
import { isNil } from "ramda";
import Dropzone from "react-dropzone";

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

  return (
    <div className={"showcase-component-container"}>
      <div className="properties-container">
        <div className={"properties-set"}>
          <SliderWithLabel
            propertyName={"particleNumber"}
            selectedValue={selectedParticleNumberValue}
            onValueChange={onChange}
            label={"particle number"}
            range={{ min: 200, max: 7000 }}
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
            propertyName={"particleVelocityValue"}
            selectedValue={selectedParticleVelocityValue}
            onValueChange={onVelocityChange}
            label={"particle velocity"}
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
            label={"hue"}
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
      <div className={"image-mode-switch"} onClick={switchImageMode}>
        {switchButtonTitle}
      </div>
      {selectedImageMode === "uploaded-picture" && isNil(uploadedImage) && (
        <div className={"images"}>
          <div className={"image-container dashed"}>
            <Dropzone
              onDrop={(acceptedFiles: File[]) =>
                setUploadedImage(acceptedFiles[0])
              }
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div className={"drop-zone"} {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className={"drop-image-text"}>
                      DRAG AND DROP AN IMAGE HERE, OR CLICK TO SELECT AN IMAGE
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
        </div>
      )}
      {selectedImageMode === "uploaded-picture" && !isNil(uploadedImage) && (
        <div className={"images"}>
          <div className={"image-container dashed"}>
            <Dropzone
              onDrop={(acceptedFiles: File[]) =>
                setUploadedImage(acceptedFiles[0])
              }
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <img
                      src={URL.createObjectURL(uploadedImage)}
                      alt={"dropped"}
                    />
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className={"image-container"}>
            <MovingPicture
              key={Date.now()}
              imageSource={URL.createObjectURL(uploadedImage)}
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
      )}
      {selectedImageMode === "given-picture" && (
        <div className={"images"}>
          <div className={"image-container"}>
            <img src={cadillac} alt={"original"} />
          </div>
          <div className={"image-container"}>
            <MovingPicture
              key={Date.now()}
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
      )}
    </div>
  );
};

export default MovingPictureShowcase;
