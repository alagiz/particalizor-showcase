import React from "react";
import { Styled } from "../styled";
import { ISliderWithLabelView } from "./ISliderWithLabelView";
import { Slider } from "antd";

const SliderWithLabelView: React.FC<ISliderWithLabelView> = ({
  onChange,
  inputValue,
  label,
  range,
  step
}) => {
  return (
    <Styled.SliderLabelContainer>
      <Styled.SliderLabel>{label}</Styled.SliderLabel>
      <Styled.SliderContainer>
        <Slider
          min={range.min}
          max={range.max}
          onChange={onChange}
          value={inputValue}
          step={step}
        />
      </Styled.SliderContainer>
    </Styled.SliderLabelContainer>
  );
};

export default SliderWithLabelView;
