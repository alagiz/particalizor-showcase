import { SliderValue } from "antd/es/slider";

export interface IMovingPictureShowcaseView {
  onParticleNumberChange: (value: SliderValue) => void;
  onTraceWidthChange: (value: SliderValue) => void;
  onVelocityChange: (value: SliderValue) => void;
  onLifeTimeChange: (value: SliderValue) => void;
  onDirectionChannelChange: (value: string) => void;
  onHueChannelChange: (value: string) => void;
  onHueReverseChange: (value: boolean) => void;
  onDirectionReverseChange: (value: boolean) => void;
  switchImageMode: () => void;
  onDrop: (acceptedFiles: File[]) => void;

  particleNumberValue: number;
  particleTraceWidthValue: number;
  particleVelocityValue: number;
  particleLifeTimeValue: number;
  directionChannelValue: string;
  hueChannelValue: string;
  hueReversedValue: boolean;
  directionReversedValue: boolean;

  directionHueOptions: {
    value: string;
    title: string;
  }[];
  switchButtonTitle: string;
  selectedImageMode: string;
  uploadedImage: File | null;
}
