export interface IInputWithLabel {
  onValueChange: (value: string, property: string) => void;
  propertyName: string;
  selectedValue: string;
  defaultValue: string;
  label: string;
}
