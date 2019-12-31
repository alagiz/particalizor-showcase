import React, { useEffect, useRef, useState } from "react";
import SliderWithLabelView from "../view/SliderWithLabelView";
import { ISliderWithLabel } from "./ISliderWithLabel";
import { SliderValue } from "antd/es/slider";

export const SliderWithLabel: React.FC<ISliderWithLabel> = ({
  label,
  range
}) => {
  const [selectedValue, setSelectedValue] = useState<SliderValue>(range.min);
  const onChange = (value: SliderValue) => setSelectedValue(value);

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
