import React from "react";
import InputWithLabelView from "../view/InputWithLabelView";
import { IInputWithLabel } from "./IInputWithLabel";

export const InputWithLabel: React.FC<IInputWithLabel> = ({
  propertyName,
  onValueChange,
  defaultValue,
  label
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onValueChange(event.target.value, propertyName);

  return (
    <InputWithLabelView
      label={label}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default InputWithLabel;
