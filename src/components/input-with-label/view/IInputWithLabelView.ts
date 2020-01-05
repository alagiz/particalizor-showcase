import React from "react";

export interface IInputWithLabelView {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue: string;
  label: string;
}
