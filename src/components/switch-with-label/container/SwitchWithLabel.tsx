import React from "react";
import SwitchWithLabelView from "../view/SwitchWithLabelView";
import { ISwitchWithLabel } from "./ISwitchWithLabel";

export const SwitchWithLabel: React.FC<ISwitchWithLabel> = ({
  onValueChange,
  propertyName,
  defaultValue,
  label
}) => {
  const onChange = (value: boolean) => onValueChange(value, propertyName);

  return (
    <SwitchWithLabelView
      label={label}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default SwitchWithLabel;
