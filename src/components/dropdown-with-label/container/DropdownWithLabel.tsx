import React from "react";
import DropdownWithLabelView from "../view/DropdownWithLabelView";
import { IDropdownWithLabel } from "./IDropdownWithLabel";

export const DropdownWithLabel: React.FC<IDropdownWithLabel> = ({
  propertyName,
  onValueChange,
  defaultValue,
  options,
  label
}) => {
  const onChange = (value: string) => onValueChange(value, propertyName);

  return (
    <DropdownWithLabelView
      label={label}
      defaultValue={defaultValue}
      options={options}
      onChange={onChange}
    />
  );
};

export default DropdownWithLabel;
