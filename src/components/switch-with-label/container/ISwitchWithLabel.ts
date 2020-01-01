export interface ISwitchWithLabel {
  onValueChange: (value: boolean, property: string) => void;
  propertyName: string;
  defaultValue: boolean;
  label: string;
}
