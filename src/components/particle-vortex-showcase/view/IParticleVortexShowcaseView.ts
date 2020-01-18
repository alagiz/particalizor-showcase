import { SliderValue } from "antd/es/slider";

export interface IParticleVortexShowcaseView {
  onParticleNumberChange: (value: SliderValue) => void;
  onTraceWidthChange: (value: SliderValue) => void;
  onLifeTimeChange: (value: SliderValue) => void;
  onVortexNumberChange: (value: SliderValue) => void;
  onImageWidthChange: (value: SliderValue) => void;
  onImageHeightChange: (value: SliderValue) => void;
  onBackgroundColorChange: (value: string) => void;

  particleNumberValue: number;
  particleTraceWidthValue: number;
  particleLifeTimeValue: number;
  imageWidth: number;
  imageHeight: number;
  backgroundColor: string;
  vortexNumberValue: number;
}
