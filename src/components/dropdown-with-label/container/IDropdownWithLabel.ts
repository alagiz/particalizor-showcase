export interface IDropdownWithLabel {
  onValueChange: (value: string, property: string) => void;
  propertyName: string;
  selectedValue: string;
  defaultValue: string;
  options: {
    value: string;
    title: string;
  }[];
  label: string;
}
