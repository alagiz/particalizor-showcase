import { SliderValue } from "antd/es/slider";

export interface ISliderWithLabel {
  onValueChange: (value: SliderValue, property: string) => void;
  propertyName: string;
  selectedValue: SliderValue;
  label: string;
  step?: number;
  range: {
    min: number;
    max: number;
  };
}
