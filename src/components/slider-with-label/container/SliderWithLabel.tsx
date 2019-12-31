import React from "react";
import SliderWithLabelView from "../view/SliderWithLabelView";
import { ISliderWithLabel } from "./ISliderWithLabel";
import { SliderValue } from "antd/es/slider";

export const SliderWithLabel: React.FC<ISliderWithLabel> = ({
  propertyName,
  onValueChange,
  selectedValue,
  label,
  range
}) => {
  const onChange = (value: SliderValue) => onValueChange(value, propertyName);

  return (
    <SliderWithLabelView
      label={label}
      range={range}
      onChange={onChange}
      inputValue={selectedValue}
    />
  );
};

export default SliderWithLabel;
