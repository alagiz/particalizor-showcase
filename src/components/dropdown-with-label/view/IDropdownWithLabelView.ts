export interface IDropdownWithLabelView {
  onChange: (value: string) => void;
  defaultValue: string;
  options: {
    value: string;
    title: string;
  }[];
  label: string;
}
