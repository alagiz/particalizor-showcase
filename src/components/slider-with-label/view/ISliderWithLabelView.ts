import { SliderValue } from "antd/es/slider";

export interface ISliderWithLabelView {
  onChange: (value: SliderValue) => void;
  inputValue: SliderValue;
  label: string;
  range: {
    min: number;
    max: number;
  };
}
